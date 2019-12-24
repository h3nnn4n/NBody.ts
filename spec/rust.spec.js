import { DAYS_PER_YEAR, SOLAR_MASS } from '../src/constants';
import { NBody } from '../src/nbody.ts';
import { Body } from '../src/body.ts';

import {
  expect
} from "chai";
import {
  describe,
  it
} from "mocha";

describe("Rust Wasm Interface", () => {
  describe("a plus b", () => {
    it('2 + 2 = 4', function () {
      let nbody = new NBody();

      nbody.add_body(new Body('sun'));
      nbody.add_body(new Body('jupyter'));
      nbody.add_body(new Body('saturn'));
      nbody.add_body(new Body('uranus'));
      nbody.add_body(new Body('neptune'));

      let energy = nbody.get_total_energy();

      expect(energy).to.equal(-0.16928990337790564);
    });
  });
});
