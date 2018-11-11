import * PIXI from 'pixi.js';

let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
})

document.body.appendChild(app.view);