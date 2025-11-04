import { Coords } from "../types";

const FULL_CIRCLE_DEG = 360;

export class CircleWithDots {
  private radius = 0;
  private gap = 0;
  #coords: Coords = [];
  private dots: HTMLDivElement[] = [];

  constructor(
    circle: HTMLDivElement,
    public currentIndex = 0,
    private dotSize = 20,
    private baseAngle = 300,
    private animationSteps = 100,
    private animationStepDelay = 10
  ) {
    this.radius = circle?.getBoundingClientRect()?.width / 2;
    this.dots = Array.from(circle.children) as HTMLDivElement[];
    this.gap = FULL_CIRCLE_DEG / this.dots.length;
    this.applyRotationToDots();
  }

  private rAF: number | null = null;
  private startTs = 0;
  private duration = this.animationSteps * this.animationStepDelay;
  private startAngle = 0;
  private endAngle = 0;
  private currentAngle = 0;

  moveTo(newCurrent: number = 0) {
    const { gap, currentIndex } = this;
    if (newCurrent === currentIndex) return;

    // считаем шаги влево/вправо как раньше
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
    const rotateSteps = left < right ? -left : right;

    // целевой угол
    const rotateAngle = rotateSteps * gap;

    // rAF-анимация общего угла вместо setInterval
    this.startAngle = this.currentAngle;
    this.endAngle = this.currentAngle + rotateAngle;
    this.startTs = 0;

    const easeOutQuad = (t: number) => t * (2 - t); // можно заменить на cubic-bezier при желании

    const tick = (ts: number) => {
      if (!this.startTs) this.startTs = ts;
      const progress = Math.min(1, (ts - this.startTs) / this.duration);
      const eased = easeOutQuad(progress);
      this.currentAngle =
        this.startAngle + (this.endAngle - this.startAngle) * eased;

      this.applyRotationToDots(this.currentAngle);

      if (progress < 1) {
        this.rAF = requestAnimationFrame(tick);
      } else {
        this.rAF = null;
        this.currentAngle = this.endAngle;
        this.currentIndex = newCurrent;
      }
    };

    if (this.rAF) cancelAnimationFrame(this.rAF);
    this.rAF = requestAnimationFrame(tick);
  }

  applyRotationToDots(angle: number = 0) {
    const { gap, baseAngle } = this;

    this.dots.forEach((dot, index) => {
      const a =
        (gap * index + baseAngle + angle) / (FULL_CIRCLE_DEG / (2 * Math.PI));
      const cos = Math.cos(a);
      const sin = Math.sin(a);

      const cx = this.radius;
      const cy = this.radius;
      const x = cx + this.radius * cos;
      const y = cy + this.radius * sin;

      dot.style.transform = `translate(${x - this.dotSize / 2}px, ${
        y - this.dotSize / 2
      }px)`;
      dot.style.willChange = "transform";
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
