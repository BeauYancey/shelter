export interface Event {
  id: string;
  name: string;
  type: "fundraiser" | "clinic" | "closure" | "other"
  date: Date;
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