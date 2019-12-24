import { Body } from './body';
import { NBody } from './nbody';
import { render } from './rendering';


const step = (nbody: NBody) => {
  for (var i = 0, len = 5; i < len; i++) {
    nbody.step(0.01);
  }

  let energy = nbody.get_total_energy();
  $('#test').text(energy);

  render(nbody);

  setTimeout(
    () => step(nbody),
    0
  );
}


export const main = () => {
  $('#test').text('init');
  console.log('starting');

  let nbody = new NBody();

  nbody.add_body(new Body('sun'));
  nbody.add_body(new Body('jupyter'));
  nbody.add_body(new Body('saturn'));
  nbody.add_body(new Body('uranus'));
  nbody.add_body(new Body('neptune'));

  nbody.offset_momentum();

  let energy = nbody.get_total_energy();
  console.log(energy);
  $('#test').text(energy);

  step(nbody);
}
