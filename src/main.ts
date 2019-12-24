import { Body } from './body';
import { NBody } from './nbody';

export const main = () => {
  $('#test').text('init');
  console.log('starting');

  let nbody = new NBody();

  nbody.add_body(new Body('sun'));
  nbody.add_body(new Body('jupyter'));
  nbody.add_body(new Body('saturn'));
  nbody.add_body(new Body('uranus'));
  nbody.add_body(new Body('neptune'));

  $('#test').text(nbody.get_total_energy());
}
