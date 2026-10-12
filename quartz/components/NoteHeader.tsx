import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

import ContentMeta from "./ContentMeta"
import TagList from "./TagList"

export default (() => {
  const Meta = ContentMeta()
  const Tags = TagList()

  const NoteHeader: QuartzComponent = (props: QuartzComponentProps) => {
    const { cfg, fileData, displayClass } = props
    const title = fileData.frontmatter?.title

    if (!title) {
      return null
    }

    const rawThumbnail = fileData.frontmatter?.thumbnail as string | undefined
    const cleanName = rawThumbnail
      ? rawThumbnail
          .replace(/[\[\]]/g, "")
          .split("|")[0]
          .trim()
      : null
    const thumbnailSlug = cleanName ? cleanName : "lab-temp-thumb.excalidraw.svg"

    const isWideThumb = fileData.frontmatter?.wideThumb === true

    return (
      <header class={classNames(displayClass, "note-header")}>
        <div class={`thumb-and-meta-container ${isWideThumb ? "wide-mode" : ""}`}>
          <img 
            src={encodeURI(`${cfg.r2Bucket}/z1-Assets/${thumbnailSlug}`)} 
            class={`thumb ${isWideThumb ? "wide-thumb" : ""}`} 
          />
          <div class="meta-container">
            <h1 class="article-title">{title}</h1>
            <Meta {...props} />
          </div>
        </div>
        <div class="tags-container">
          <Tags {...props} />
        </div>
      </header>
    )
  }

  NoteHeader.css =
    `
  .note-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .thumb-and-meta-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    width: 100%;
  }

  .thumb {
    flex-shrink: 0;
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    display: flex;
    margin: 0;
  }

  .thumb-and-meta-container.wide-mode {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .thumb.wide-thumb {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    aspect-ratio: 3/1;
    object-fit: fill;
  }

  .meta-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    flex-grow: 1;
  }

  .meta-container .article-title {
    flex: initial;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  .article-title .h1 {
    flex: initial;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    margin: 0 0 0.5;
  }
  
  .content-meta {
    margin-bottom: 0;
  }

  .tags-container {
  }
  ` +
    (Meta.css ?? "") +
    (Tags.css ?? "")

  return NoteHeader
}) satisfies QuartzComponentConstructor