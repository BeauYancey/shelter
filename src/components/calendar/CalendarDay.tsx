import type { Dayjs } from "dayjs";
import type { Event } from "../../types/Event";
import CalendarEvent from "./CalendarEvent";
import { Box, Space, Stack, Text } from "@mantine/core";
import classes from "./Calendar.module.css";

interface CalendarDayProps {
  date: Dayjs;
  events: Event[];
  dimmed: boolean;
}

export default function CalendarDay({ date, events }: CalendarDayProps) {
  return (
    <Box 
      w="100%" 
      h="8rem" 
      className={classes.calendarDay} 
      bdrs="sm" 
      p="xs" 
      style={{backgroundColor: [0, 6].some(d => d === date.day()) ? "var(--mantine-color-gray-1)" : undefined}}
    >
      <Text>{date.date()}</Text>
      <Space h="sm" />
      <Stack gap="xs">
        {events.map(event => (
          <CalendarEvent key={event.id} event={event}/>
        ))}
      </Stack>
    </Box>
  );
}