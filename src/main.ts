import { Body } from './body';
import { NBody } from './nbody';


const step = (nbody: NBody) => {
  for (var j = 0, len = 100000; j < len; j++) {
    nbody.step(0.01);
  }

  let energy = nbody.get_total_energy();
  $('#test').text(energy);

  setTimeout(
    () => step(nbody),
    1
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

  let energy = nbody.get_total_energy();
  console.log(energy);
  $('#test').text(energy);

  step(nbody);
}
