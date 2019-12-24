import { DAYS_PER_YEAR, SOLAR_MASS } from './constants';


class Body {
  mass: number;

  position_x: number;
  position_y: number;
  position_z: number;

  velocity_x: number;
  velocity_y: number;
  velocity_z: number;

  name: string;

  constructor(what: string) {
    this.mass = 0;

    this.position_x = 0;
    this.position_y = 0;
    this.position_z = 0;

    this.velocity_x = 0;
    this.velocity_y = 0;
    this.velocity_z = 0;

    this.name = 'unitialized';

    if (what == 'jupyter') {
      this.name = 'jupyter';

      this.position_x = 4.84143144246472090e+00;
      this.position_y = -1.16032004402742839e+00;
      this.position_z = -1.03622044471123109e-01;

      this.velocity_x = 1.66007664274403694e-03 * DAYS_PER_YEAR;
      this.velocity_y = 7.69901118419740425e-03 * DAYS_PER_YEAR;
      this.velocity_z = -6.90460016972063023e-05 * DAYS_PER_YEAR;

      this.mass       = 9.54791938424326609e-04 * SOLAR_MASS;
    } else if (what == 'saturn') {
      this.name = 'saturn';

      this.position_x = 8.34336671824457987e+00;
      this.position_y = 4.12479856412430479e+00;
      this.position_z = -4.03523417114321381e-01;

      this.velocity_x = -2.76742510726862411e-03 * DAYS_PER_YEAR;
      this.velocity_y = 4.99852801234917238e-03 * DAYS_PER_YEAR;
      this.velocity_z = 2.30417297573763929e-05 * DAYS_PER_YEAR;

      this.mass       = 2.85885980666130812e-04 * SOLAR_MASS;
    } else if (what == 'uranus') {
      this.name = 'uranus';

      this.position_x = 1.28943695621391310e+01;
      this.position_y = -1.51111514016986312e+01;
      this.position_z = -2.23307578892655734e-01;

      this.velocity_x = 2.96460137564761618e-03 * DAYS_PER_YEAR;
      this.velocity_y = 2.37847173959480950e-03 * DAYS_PER_YEAR;
      this.velocity_z = -2.96589568540237556e-05 * DAYS_PER_YEAR;

      this.mass       = 4.36624404335156298e-05 * SOLAR_MASS;
    } else if (what == 'neptune') {
      this.name = 'neptune';

      this.position_x = 1.53796971148509165e+01;
      this.position_y = -2.59193146099879641e+01;
      this.position_z = 1.79258772950371181e-01;

      this.velocity_x = 2.68067772490389322e-03 * DAYS_PER_YEAR;
      this.velocity_y = 1.62824170038242295e-03 * DAYS_PER_YEAR;
      this.velocity_z = -9.51592254519715870e-05 * DAYS_PER_YEAR;

      this.mass       = 5.15138902046611451e-05 * SOLAR_MASS;
    } else if (what == 'sun') {
      this.name = 'sun';
      this.mass = SOLAR_MASS;
    }
  }

  offsetMomentum(px: number, py: number, pz: number) {
    this.velocity_x = -px / SOLAR_MASS;
    this.velocity_y = -py / SOLAR_MASS;
    this.velocity_z = -pz / SOLAR_MASS;
  }
}

export { Body }
