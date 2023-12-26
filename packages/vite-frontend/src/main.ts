import "./style.css";

import sourceUrl from "animations/dist/animation1?url";

// We just care about a side effect (defining custom element) of the import here.
import "@motion-canvas/player";
import "@motion-canvas/core";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <motion-canvas-player src="${sourceUrl}"/>
  </div>
`;
