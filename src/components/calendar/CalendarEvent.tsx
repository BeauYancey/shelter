import { Box, Card, Popover, Text, useMantineTheme, Group, Divider, Image } from "@mantine/core"
import type { Event } from "../../types/Event"
import { IconClock, IconInfoCircle, IconMapPin } from "@tabler/icons-react";

interface CalendarEventProps {
  event: Event
}

export default function CalendarEvent({event}: CalendarEventProps) {
  const theme = useMantineTheme();
  const colors = {
    fundraiser: theme.colors.purple,
    clinic: theme.colors.orange,
    closure: theme.colors.red,
    other: theme.colors.teal
  }

  const timeString = event.startTime
    ? event.endTime
      ? `${event.startTime.hours}:${String(event.startTime.minutes).padStart(2, "0")} - ${event.endTime.hours}:${String(event.endTime.minutes).padStart(2, "0")}`
      : `${event.startTime.hours}:${String(event.startTime.minutes).padStart(2, "0")}`
    : null

  return (
    <Popover>
      <Popover.Target>
        <Box
          bg={colors[event.type][2]} 
          bdrs="sm" 
          px="xs"
          style={{cursor: "pointer"}}
          onClick={() => console.log(event)}
        >
          <Text 
            size="sm"
            c={colors[event.type][9]}
            lineClamp={1}
          >
            {event.name}
          </Text>
        </Box>
      </Popover.Target>

      <Popover.Dropdown>
        <Card maw="16rem">
          {event.photo &&
            <Card.Section mb="sm">
              <Image
                src={event.photo}
                h="8rem"
                bdrs="sm"
              />
            </Card.Section>
          }

          <Card.Section>
            <Text fw={700}>{event.name}</Text>
            {timeString && <Group gap={4}><IconClock size={16}/><Text>{timeString}</Text></Group>}
            {event.location && <Group gap={4}><IconMapPin size={16}/><Text>{event.location}</Text></Group>}
            <Group gap={4}><IconInfoCircle size={16}/><Text>{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</Text></Group>
          </Card.Section>

          {event.description && 
            <Card.Section>
              <Divider w="100%" my="sm"/>
              <Text size="sm">{event.description}</Text>
            </Card.Section>
          }
        </Card>
      </Popover.Dropdown>
    </Popover>
  )
}