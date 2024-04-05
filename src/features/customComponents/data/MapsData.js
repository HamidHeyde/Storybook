export const MapData = [
  {
    name: "1st Map",
    description: "1st Map description",
    type: "user",
    owner_ids: ["8c678a71-e222-4567-bc38-7a11b842448b"],
    group_ids: [],
    metrics: [
      {
        field_id: "50a85cc7-1602-4d8a-872b-40d0a27ad725",
        label: "incident records ",
        ref: "number",
        calc: "count",
        ranges: [],
      },
      {
        field_id: "31e63d5c-dbc2-43a0-bb8e-aa57961fecab",
        label: "Production Capacity",
        ref: "size",
        calc: "avg",
        ranges: [0, 21, 29, 75, 96],
      },
      {
        field_id: "4b1f1e15-58c1-4e39-9b0e-078b758435b7",
        label: "Expenses",
        ref: "color",
        calc: "avg",
        ranges: [9, 31, 89],
      },
      {
        field_id: "50a85cc7-1602-4d8a-872b-40d0a27ad725",
        label: "incident records ",
        ref: "shadow",
        calc: "count",
        ranges: [0, 43, 61, 100],
      },
    ],
    suspended_at: null,
  },
  {
    name: "2nd Map",
    description: "2nd Map description",
    type: "business",
    owner_ids: ["8c678a71-e222-4567-bc38-7a11b842448b"],
    group_ids: [],
    metrics: [
      {
        field_id: "4b1f1e15-58c1-4e39-9b0e-078b758435b7",
        label: "Expenses",
        ref: "number",
        calc: "avg",
        ranges: [],
      },
      {
        field_id: "50a85cc7-1602-4d8a-872b-40d0a27ad725",
        label: "incident records ",
        ref: "size",
        calc: "count",
        ranges: [0, 19, 23, 37, 61],
      },
      {
        field_id: "5e7e6990-5280-4be4-ae53-46634637e58f",
        label: "Number of employees",
        ref: "color",
        calc: "count",
        ranges: [0, 10, 16],
      },
      {
        field_id: "4b1f1e15-58c1-4e39-9b0e-078b758435b7",
        label: "Expenses",
        ref: "shadow",
        calc: "avg",
        ranges: [0, 16, 27, 46],
      },
    ],
    suspended_at: null,
  },
]