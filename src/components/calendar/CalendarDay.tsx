import type { Dayjs } from "dayjs";
import type { Event } from "../../types/Event";
import CalendarEvent from "./CalendarEvent";
import { Box, Grid, Space, Stack, Text } from "@mantine/core";
import classes from "./Calendar.module.css";
import { IconCircleFilled } from "@tabler/icons-react";
import { hours } from "../../data/hours";

interface CalendarDayProps {
  date: Dayjs;
  events: Event[];
}

export default function CalendarDay({ date, events }: CalendarDayProps) {

  const openHours = hours[date.day()]
  const timeString = events.some(e => e.type === "closure")
    ? "Closed"
    : openHours
      ? `${openHours.open.hours}:${String(openHours.open.minutes).padStart(2, "0")} - ${openHours.close.hours}:${String(openHours.close.minutes).padStart(2, "0")}`
      : null

  return (
    <Box 
      w="100%" 
      h="6.5rem" 
      className={classes.calendarDay} 
      bdrs="sm" 
      p="xs" 
      style={{backgroundColor: [0, 6].some(d => d === date.day()) ? "var(--mantine-color-gray-1)" : undefined, overflowY: "scroll"}}
    >
      <Grid w="100%" gutter="xs" align="center">
        <Grid.Col span={2}>
          <Text pos="sticky" style={{top: 0}}>{date.date()}</Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Box bg={timeString === "Closed" ? "var(--mantine-color-orange-1)" : "var(--mantine-color-gray-0)"} w="fit-content" px={6} bdrs="sm" className={classes.hoursOfOperation}>
            {timeString && <Text size="sm" style={{opacity: 0.5}}>{timeString}</Text>}
          </Box>
        </Grid.Col>
        <Grid.Col span={1}>
          {events.length > 0 && <IconCircleFilled size={8} color="var(--mantine-color-gray-4)"/>}
        </Grid.Col>
      </Grid>
      <Space h="xs" />
      <Stack gap={2}>
        {events.map(event => (
          <CalendarEvent key={event.id} event={event}/>
        ))}
      </Stack>
    </Box>
  );
}