interface IInterval {
  start: number;
  end: number;
  data: TData[];
}

interface TData {
  year: number;
  text: string;
}

interface Window {
  INITIAL_INTERVALS: IInterval[];
}
