import { plugin } from "./docsify-mermaid-zoom.js";

const { mermaidZoom = {}, mermaidConfig = {} } = window.$docsify;

mermaidConfig.postRenderCallback = plugin(...Object.values(mermaidZoom));

window.$docsify.mermaidConfig = mermaidConfig;
