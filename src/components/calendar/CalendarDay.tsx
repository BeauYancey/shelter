import type { Dayjs } from "dayjs";
import type { Event } from "../../types/Event";
import CalendarEvent from "./CalendarEvent";
import { Box, Group, Space, Stack, Text } from "@mantine/core";
import classes from "./Calendar.module.css";
import { IconCircleFilled } from "@tabler/icons-react";

interface CalendarDayProps {
  date: Dayjs;
  events: Event[];
}

export default function CalendarDay({ date, events }: CalendarDayProps) {
  return (
    <Box 
      w="100%" 
      h="6.5rem" 
      className={classes.calendarDay} 
      bdrs="sm" 
      p="xs" 
      style={{backgroundColor: [0, 6].some(d => d === date.day()) ? "var(--mantine-color-gray-1)" : undefined, overflowY: "scroll"}}
    >
      <Group w="100%" justify="space-between">
        <Text pos="sticky" style={{top: 0}}>{date.date()}</Text>
        {events.length > 0 && <IconCircleFilled size={8} color="var(--mantine-color-gray-4)"/>}
      </Group>
      <Space h="xs" />
      <Stack gap={2}>
        {events.map(event => (
          <CalendarEvent key={event.id} event={event}/>
        ))}
      </Stack>
    </Box>
  );
}