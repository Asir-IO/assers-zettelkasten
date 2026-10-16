import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import lightboxStyle from "./styles/lightbox.scss"

const Lightbox: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return <div class={displayClass ?? ""} id="glightbox-placeholder"></div>
}

Lightbox.afterDOMLoaded = `
const loadGLightbox = () => {
  return new Promise((resolve) => {
    if (window.GLightbox) return resolve(window.GLightbox);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/glightbox@3.3.1/dist/js/glightbox.min.js";
    script.onload = () => resolve(window.GLightbox);
    document.head.appendChild(script);
  });
};

let lightbox;

// Helper to keep SVG URLs synced with the active theme
const syncThemedImages = () => {
  const isDark = document.documentElement.getAttribute("saved-theme") === "dark";
  let changed = false;

  document.querySelectorAll(".svg-theme-wrapper").forEach(wrapper => {
    // Specifically target only images/objects to avoid grabbing buttons or links
    const darkEl = wrapper.querySelector("img.dark-mode-svg, object.dark-mode-svg");
    const lightEl = wrapper.querySelector("img:not(.dark-mode-svg), object:not(.dark-mode-svg)");
    const activeEl = (isDark && darkEl) ? darkEl : lightEl;
    
    if (!activeEl) return;
    
    const targetSource = activeEl.getAttribute("data") || activeEl.getAttribute("src");
    const trigger = wrapper.querySelector(".glightbox");
    
    if (trigger && targetSource && trigger.getAttribute("href") !== targetSource) {
      trigger.setAttribute("href", targetSource);
      trigger.dataset.title = activeEl.getAttribute("title") || "";
      changed = true;
    }
  });
  
  return changed;
};

document.addEventListener("nav", async () => {
  if (!document.getElementById("glightbox-css")) {
    const link = document.createElement("link");
    link.id = "glightbox-css";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/glightbox@3.3.1/dist/css/glightbox.min.css";
    document.head.appendChild(link);
  }

  const GLightbox = await loadGLightbox();

  lightbox?.destroy();

  const createZoomButton = () => {
    const btn = document.createElement("button");
    btn.className = "zoom-overlay-btn";
    btn.type = "button";
    btn.title = "View Fullscreen";
    btn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="zoomIcon">
<rect x="10" y="6" width="1" height="7"/>
<path d="M7 9H14V10H7V9Z"/>
<rect x="15" y="3" width="2" height="2"/>
<path d="M15 16V18H6V16H15Z"/>
<path d="M15 1V3H6V1H15Z"/>
<rect x="4" y="3" width="2" height="2"/>
<path d="M4 14H2V5H4V14Z"/>
<path d="M19 14H17V5H19V14Z"/>
<rect x="4" y="14" width="2" height="2"/>
<rect x="15" y="14" width="2" height="2"/>
<rect x="17" y="16" width="2" height="2"/>
<rect x="19" y="18" width="2" height="2"/>
<rect x="21" y="20" width="2" height="2"/>
</svg>\`;
    return btn;
  };

  const createTrigger = (source, content, title) => {
    const trigger = document.createElement("a");
    trigger.className = "glightbox";
    trigger.href = source;
    trigger.dataset.gallery = "site-images";
    trigger.dataset.type = "image";
    if (title) trigger.dataset.title = title;
    if (content) trigger.appendChild(content);
    trigger.addEventListener("click", (e) => e.preventDefault());
    return trigger;
  };

  const svgWrappers = document.querySelectorAll(".svg-theme-wrapper");
  svgWrappers.forEach(wrapper => {
    if (wrapper.querySelector(".zoom-overlay-btn")) return;
    wrapper.querySelectorAll('object, img').forEach(el => el.style.cursor = 'auto');

    // Create an empty trigger, we will populate the actual URL via syncThemedImages() below
    const trigger = createTrigger("#", null, "");
    trigger.hidden = true;
    wrapper.appendChild(trigger);

    const btn = createZoomButton();
    wrapper.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Safety check: ensure URLs are synced right before opening
      if (syncThemedImages() && lightbox) {
        lightbox.reload();
      }
      trigger.click(); 
    });
  });

  // Set initial SVG URLs
  syncThemedImages();

  const standardImages = document.querySelectorAll("article.popover-hint img, img.thumb");
  standardImages.forEach(img => {
    if (img.closest(".svg-theme-wrapper") || img.closest(".lightbox-media-wrapper")) return;

    img.style.cursor = "auto";

    const parentLink = img.closest("a");
    const wrapper = document.createElement("div");
    wrapper.className = "lightbox-media-wrapper";
    if (parentLink?.parentNode) {
      parentLink.parentNode.insertBefore(wrapper, parentLink);
      wrapper.appendChild(parentLink);
    } else {
      img.parentNode.insertBefore(wrapper, img);
    }

    const targetSource = parentLink ? parentLink.href : (img.currentSrc || img.src);
    if (!targetSource) return;

    let trigger;
    if (parentLink) {
      trigger = parentLink;
      trigger.addEventListener("click", (e) => e.preventDefault());
    } else {
      trigger = createTrigger(targetSource, null, img.alt);
    }
    
    trigger.classList.add("glightbox");
    trigger.dataset.gallery = "site-images";
    trigger.dataset.type = "image";
    if (img.alt) trigger.dataset.title = img.alt;
    
    if (!parentLink) {
      wrapper.appendChild(trigger);
      trigger.appendChild(img);
    }

    const btn = createZoomButton();
    wrapper.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      trigger.click(); 
    });
  });

  if (!document.querySelector(".glightbox")) return;

  lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    closeButton: true,
  });

  // Listen to Quartz's dark mode toggle to update GLightbox's internal cache dynamically
  document.removeEventListener("themechange", window.lightboxThemeChange);
  window.lightboxThemeChange = () => {
    if (syncThemedImages() && lightbox) {
      lightbox.reload();
    }
  };
  document.addEventListener("themechange", window.lightboxThemeChange);
});
`

Lightbox.css = lightboxStyle
export default (() => Lightbox) satisfies QuartzComponentConstructor