import { Body } from './body';


class NBody {
  bodies: Body[] = [];
  nbodies: number = 0;

  add_body(body: Body) {
    this.bodies.push(body);
    this.nbodies += 1;

    console.log('added a body: ' + body.name + '\nnbodies: ' + this.nbodies);
  }

  step(dt: number) {
    for (let i = 0, len = this.nbodies; i < len; i++) {
      let body_i = this.bodies[i];

      for (let j = i + 1, len = this.nbodies; j < len; j++) {
        let body_j = this.bodies[j];

        let dx = body_i.position_x - body_j.position_x;
        let dy = body_i.position_y - body_j.position_y;
        let dz = body_i.position_z - body_j.position_z;

        let dSquared = dx * dx + dy * dy + dz * dz;
        let distance = Math.sqrt(dSquared);
        let mag = dt / (dSquared * distance);

        body_i.velocity_x -= dx * body_j.mass * mag;
        body_i.velocity_y -= dy * body_j.mass * mag;
        body_i.velocity_z -= dz * body_j.mass * mag;

        body_j.velocity_x += dx * body_i.mass * mag;
        body_j.velocity_y += dy * body_i.mass * mag;
        body_j.velocity_z += dz * body_i.mass * mag;
      }
    }

    for (let i = 0, len = this.nbodies; i < len; i++) {
      let body = this.bodies[i];

      body.position_x += dt * body.velocity_x;
      body.position_y += dt * body.velocity_y;
      body.position_z += dt * body.velocity_z;
    }
  }

  offset_momentum() {
    let px = 0;
    let py = 0;
    let pz = 0;

    for (var i = 0, len = this.nbodies; i < len; i++) {
      let body_i = this.bodies[i];

      px += body_i.velocity_x * body_i.mass;
      py += body_i.velocity_y * body_i.mass;
      pz += body_i.velocity_z * body_i.mass;
    }

    this.bodies[0].offset_momentum(px, py, pz);
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
