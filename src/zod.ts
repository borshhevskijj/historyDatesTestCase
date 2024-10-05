import { z } from "zod";

// creating a schema for strings
export const DataSchema = z.object({
  year: z.number().lte(9999),
  text: z.string(),
});

export const IntervalSchema = z.object({
  start: z.number().lte(9999),
  end: z.number().lte(9999),
  data: z.array(DataSchema),
});

export const InitialData = z.array(IntervalSchema);
