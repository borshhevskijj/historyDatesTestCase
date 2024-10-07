import { Coords } from "../types";

const FULL_CIRCLE_DEG = 360;
export class CircleWithDots {
  private radius = 0;
  constructor(size: number, private dotSize: number, private dotCount: number) {
    this.radius = size / 2;
  }

  calculate(): Coords {
    return this.#getDots();
  }

  #getDots() {
    const k = FULL_CIRCLE_DEG / 2 / Math.PI;
    const gap = FULL_CIRCLE_DEG / this.dotCount;

    return Array(this.dotCount)
      .fill(null)
      .map((_, index) => {
        const cos = Math.cos((gap * index + 90) / k);
        const sin = Math.sin((gap * index + 90) / k);
        return {
          d: this.dotSize,
          x: this.radius - (this.radius * cos + this.dotSize / 2),
          y: this.radius - (this.radius * sin + this.dotSize / 2),
        };
      });
  }
}
