import type { Dayjs } from "dayjs";

export interface Event {
  id: string;
  name: string;
  type: "fundraiser" | "clinic" | "closure" | "other"
  date: Dayjs;
  startTime?: Time;
  endTime?: Time;
  description?: string;
  location?: string;
  photo?: string
}

interface Time {
  hours: number;
  minutes: number;
}