import { Center, Title } from "@mantine/core";

export default function NotFound() {
  return (
    <Center flex={1} m="xl" bg="var(--mantine-color-gray-0)" bdrs="md">
      <Title order={2}>Page Not Found</Title>
    </Center>
  )
}