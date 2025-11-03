export interface ChartDimentions {
  w: number;
  h: number;
  cX: number;
  cY: number;
}

export type Coord = {
  x: number;
  y: number;
  d?: number;
  i?: number;
};

export type Coords = Coord[];

type TimelineData = {
  year: number;
  text: string;
};

export type TimelineEvent = {
  start: number;
  end: number;
  title: string;
  data: TimelineData[];
};
