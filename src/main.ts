import { Environment } from './environment';

const env_size = 10;

export const main = () => {
  $('#test').text('init');
  console.log('init');

  let env = new Environment(env_size, env_size);
}
