class Environment {
  area: boolean[][];
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.area = [];

    for (var i = 0; i < this.width; i++) {
      this.area[i] = [];
      for (var j = 0; j < this.height; j++) {
        this.area[i][j] = false;
      }
    }
  }
}

export { Environment }

