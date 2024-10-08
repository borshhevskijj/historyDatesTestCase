import { z } from "zod";

export const DataSchema = z.object({
  year: z.number(),
  text: z.string(),
});

export const IntervalSchema = z.object({
  title: z.string(),
  start: z.number(),
  end: z.number(),
  data: z.array(DataSchema),
});

export const InitialData = z.array(IntervalSchema);

export type TData = z.infer<typeof DataSchema>;
export type TInterval = z.infer<typeof IntervalSchema>;
export type TPureInterval = Omit<TInterval, "data">;
export type InitialData = z.infer<typeof InitialData>;
