import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Element } from "hast"
import fs from "fs"
import path from "path"

const toLookupKey = (s: string) => s.toLowerCase().replace(/[\s\-_\\/]/g, "")

export const CdnLinks: QuartzTransformerPlugin = () => {
  const assetMap: Record<string, string> = {}
  const contentDir = path.join(process.cwd(), "content")

  if (fs.existsSync(contentDir)) {
    for (const file of fs.readdirSync(contentDir, { recursive: true }) as string[]) {
      const normalized = file.replace(/\\/g, "/")
      assetMap[toLookupKey(normalized)] = normalized
    }
  }

  return {
    name: "CdnLinks",
    htmlPlugins(ctx) {
      const r2Base = ctx.cfg.configuration.r2Bucket.replace(/\/$/, "")

      return [
        () => (tree) => {
          visit(tree, "element", (node: Element) => {
            const prop = node.properties?.src ? "src" : node.properties?.data ? "data" : undefined
            if (!prop) return

            let url = String(node.properties[prop])
            const [rawPath, hash] = url.split("#")
            const cleanPath = rawPath.split("?")[0]

            // Skip iframes rendering HTML files or extensionless Quartz note embeds
            if (
              node.tagName === "iframe" &&
              (/\.html?$/i.test(cleanPath) || !path.posix.extname(cleanPath))
            ) {
              return
            }

            // 1. Resolve local embeds (img, pdf iframe, video, audio, source, object) to R2
            if (!url.startsWith("http") && !url.startsWith("data:")) {
              const cleanSrc = decodeURI(rawPath).replace(/^[./]+/, "")
              const realPath = assetMap[toLookupKey(cleanSrc)] || cleanSrc

              url = encodeURI(`${r2Base}/${realPath}`) + (hash ? `#${hash}` : "")
              node.properties[prop] = url
            }

            // 2. Morph non-thumbnail <img> SVGs into <object>
            if (node.tagName === "img" && cleanPath.toLowerCase().endsWith(".svg")) {
              const width = parseInt(String(node.properties.width ?? "").replace(/\D/g, ""), 10)
              if (width <= 120) return

              node.tagName = "object"
              node.properties.data = url
              node.properties.type = "image/svg+xml"
              delete node.properties.src

              if (node.properties.alt) {
                node.properties["aria-label"] = node.properties.alt
                delete node.properties.alt
              }

              const prevStyle = node.properties.style ? `${node.properties.style} ` : ""
              node.properties.style = `${prevStyle}max-width: 100%;`
            }
          })
        },
      ]
    },
  }
}
