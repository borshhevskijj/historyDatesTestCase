import { DataSchema, IntervalSchema } from "./zod";

export type TData = z.infer<typeof DataSchema>;
export type TInterval = z.infer<typeof IntervalSchema>;

declare global {
  interface Window {
    INITIAL_INTERVALS: TInterval[];
  }
}
