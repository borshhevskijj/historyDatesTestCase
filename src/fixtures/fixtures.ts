import { InitialData } from "../zod";

export const INITIAL_INTERVALS = InitialData.parse(
  window.INITIAL_INTERVALS ?? [
    {
      start: 2015,
      end: 2020,
      data: [
        {
          year: 2015,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
        {
          year: 2016,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
        {
          year: 2017,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
        {
          year: 2018,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
        {
          year: 2019,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
        {
          year: 2020,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nihil eaque repudiandae nulla numquam.",
        },
      ],
    },
  ]
);
