import "./style.css";

import sourceUrl from "animations/dist/animation1?url";
console.log(sourceUrl);

// We just care about a side effect (defining custom element) of the import here.
// That's why we dont import the class definition (and also why the module does not export anything)
import "@motion-canvas/player";
import "@motion-canvas/core";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <motion-canvas-player src=${sourceUrl}/>
  </div>
`;
