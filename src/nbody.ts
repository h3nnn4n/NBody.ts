import { Body } from './body';


class NBody {
  bodies: Body[] = [];
  nbodies: number = 0;

  add_body(body: Body) {
    this.bodies.push(body);
    this.nbodies += 1;

    console.log('added a body: ' + body.name + '\nnbodies: ' + this.nbodies);
  }

  get_total_energy() {
    let energy = 0.0;

    for (let i = 0, len = this.nbodies; i < len; i++) {
      let body_i = this.bodies[i];

      energy += 0.5 * body_i.mass * (
        body_i.velocity_x * body_i.velocity_x +
        body_i.velocity_y * body_i.velocity_y +
        body_i.velocity_z * body_i.velocity_z );

      for (let j = i + 1, len = this.nbodies; j < len; j++) {
        let body_j = this.bodies[j];

        let dx = body_i.position_x - body_j.position_x;
        let dy = body_i.position_y - body_j.position_y;
        let dz = body_i.position_z - body_j.position_z;

        let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        energy -= (body_i.mass * body_j.mass) / distance;
      }
    }

    return energy;
  }
}

export { NBody }
