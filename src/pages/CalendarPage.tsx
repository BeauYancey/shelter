import { Stack, Title } from "@mantine/core";
import Calendar from "../components/calendar/Calendar";

export default function CalendarPage() {
  return (
    <Stack p="xl">
      <Title order={1}>SUVAS Calendar</Title>
      <Calendar />
    </Stack>
  );
}