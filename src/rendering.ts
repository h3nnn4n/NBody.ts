import { Body } from './body';
import { NBody } from './nbody';


const render = (nbody: NBody) => {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement;

  if (canvas === null) {
    return;
  }

  let ctx = canvas.getContext('2d');

  if (ctx === null) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = 7.5;

  for (var i = 0, len = nbody.nbodies; i < len; i++) {
    let body = nbody.bodies[i];

    ctx.beginPath();
    ctx.arc(
      body.position_x * scale + canvas.width / 2,
      body.position_y * scale + canvas.height / 2,
      1 + Math.sqrt(body.mass),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

export { render }
