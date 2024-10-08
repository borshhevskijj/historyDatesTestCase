import { Coords } from "../types";

const FULL_CIRCLE_DEG = 360;
const k = FULL_CIRCLE_DEG / 2 / Math.PI;
export class CircleWithDots {
  private radius = 0;
  private gap = 0;
  #coords: Coords = [];
  private dots: HTMLDivElement[] = [];

  constructor(
    circle: HTMLDivElement,
    public currentIndex = 0,
    private dotSize = 20,
    private baseAngle = 120,
    private animationSteps = 20,
    private animationStepDelay = 50
  ) {
    this.radius = circle?.getBoundingClientRect()?.width / 2;
    this.dots = Array.from(circle.children) as HTMLDivElement[];
    this.gap = FULL_CIRCLE_DEG / this.dots.length;
    this.applyRotationToDots();
  }

  moveTo(newCurrent: number = 0) {
    const { gap, currentIndex } = this;

    if (newCurrent === currentIndex) return;

    let rotate = 0;
    let left = 0;
    let cnt = newCurrent;
    while (cnt !== currentIndex) {
      cnt = CircleWithDots.prevDotIndex(cnt, this.dots.length);
      left++;
    }
    let right = 0;
    cnt = newCurrent;
    while (cnt !== currentIndex) {
      cnt = CircleWithDots.nextDotIndex(cnt, this.dots.length);
      right++;
    }
    rotate = left < right ? -left : right;

    const rotateAngle = rotate * gap;
    const rotateAngleChunk = rotateAngle / this.animationSteps;

    cnt = 0;
    const interval = setInterval(() => {
      this.applyRotationToDots(rotateAngleChunk * cnt++);
      if (cnt > this.animationSteps) clearInterval(interval);
    }, this.animationStepDelay);
  }

  applyRotationToDots(angle: number = 0) {
    const { gap, baseAngle } = this;

    this.dots.forEach((dot, index) => {
      const cos = Math.cos((gap * index + baseAngle + angle) / k);
      const sin = Math.sin((gap * index + baseAngle + angle) / k);
      dot.style.left =
        this.radius - (this.radius * cos + this.dotSize / 2) + "px";
      dot.style.top =
        this.radius - (this.radius * sin + this.dotSize / 2) + "px";
    });
  }

  static nextDotIndex(i: number, max: number) {
    if (i >= max - 1) return 0;
    return i + 1;
  }

  static prevDotIndex(i: number, max: number) {
    if (i <= 0) return max - 1;
    return i - 1;
  }

  get coords() {
    return this.#coords;
  }
}

//   return {
//     d: this.dotSize,
//     x: this.radius - (this.radius * cos + this.dotSize / 2)+'px',
//     y: this.radius - (this.radius * sin + this.dotSize / 2),
//     i: index + 1,
//   };
