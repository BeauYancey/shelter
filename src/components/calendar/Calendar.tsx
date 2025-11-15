import dayjs, { Dayjs } from "dayjs";
import type { Event } from "../../types/Event";
import { events } from "../../data/events";
import CalendarDay from "./CalendarDay";
import { useState } from "react";
import { Box, Button, Group, SimpleGrid, Title, Text } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface CalendarProps {
  maxWidth?: string | number;
}

export default function Calendar({ maxWidth }: CalendarProps) {
  const [month, setMonth] = useState(dayjs());

  const startOfMonth = month.startOf("month");
  const endOfMonth = month.endOf("month");
  const startOfGrid = startOfMonth.startOf("week");
  const endOfGrid = endOfMonth.endOf("week");

  const days: Dayjs[] = [];
  let current = startOfGrid;
  while (current.isBefore(endOfGrid) || current.isSame(endOfGrid, "day")) {
    days.push(current);
    current = current.add(1, "day");
  }

  const handlePrevMonth = () => setMonth((m) => m.subtract(1, "month"));
  const handleNextMonth = () => setMonth((m) => m.add(1, "month"));

  const getDayEvents = (date: Dayjs): Event[] => {
    return events.filter(event => event.date.isSame(date, 'day'));
  }

  return (
    <Box
      w="100%"
      maw={maxWidth}
    >
      {/* Month Header */}
      <Group gap="xl" mb="sm" justify="center">
        <Button onClick={handlePrevMonth} variant="subtle">            
          <IconChevronLeft />
        </Button>
        <Title order={3}>{month.format("MMMM YYYY")}</Title>
        <Button onClick={handleNextMonth} variant="subtle">
          <IconChevronRight />
        </Button>
      </Group>

      {/* Weekday Labels */}
      <SimpleGrid cols={7} mb="xs">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Text key={day} ta="center" fw={600}>
            {day}
          </Text>
        ))}
      </SimpleGrid>
      
      {/* Calendar Grid */}
      <SimpleGrid cols={7} spacing="xs" verticalSpacing="xs">
        {days.map(d => {
          const dayEvents = getDayEvents(d);

          return (
            <Box key={d.toString()}>
              <CalendarDay date={d} events={dayEvents} />
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  );
}