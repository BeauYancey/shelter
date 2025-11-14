import { ActionIcon, Anchor, Box, Center, Group, Stack, Text, Title } from "@mantine/core";
import { IconBrandAmazon, IconBrandInstagram, IconBrandMeta, IconBrandPaypal } from "@tabler/icons-react";

export default function Footer () {
  return (
    <footer style={{ 
      backgroundColor: '#605cac', 
      padding: '1rem 2rem 0.5rem',
      width: '100%',
      color: "var(--mantine-color-white)"
    }}>
      <Group justify="space-between" align="flex-start">
        <Stack align="flex-start" gap="sm">
          <Title order={3}>Contact</Title>
          
          <Stack gap={0}>
            <Anchor size="sm" c="var(--mantine-color-white)" href="mailto:kierstan.suvas@gmail.com">kierstan.suvas@gmail.com</Anchor>
            <Anchor size="sm" c="var(--mantine-color-white)" href="tel:8019514080">(801) 951-4080</Anchor>
          </Stack>

          <Stack gap={0}>
            <Text fw="bold">Location</Text>
            <Text size="sm">582 W. 3000 N.</Text>
            <Text size="sm">Spanish Fork, UT 84660</Text>
          </Stack>

          <Stack gap={0}>
            <Text fw="bold">Social Media</Text>
            <Group gap="xs">
              <Anchor href="https://www.instagram.com/southutahvalleyanimalshelter/">
                <ActionIcon>
                  <IconBrandInstagram />
                </ActionIcon>
              </Anchor>
              <Anchor href="https://www.facebook.com/South-Utah-Valley-Animal-Shelter-1283084035046870/">
                <ActionIcon>
                  <IconBrandMeta />
                </ActionIcon>
              </Anchor>
              <Anchor href="https://a.co/9X2D4sN">
                <ActionIcon>
                  <IconBrandAmazon />
                </ActionIcon>
              </Anchor>
              <Anchor href="https://account.venmo.com/u/Suvas_AnimalShelter">
                <ActionIcon>
                  <IconBrandPaypal />
                </ActionIcon>
              </Anchor>
            </Group>
          </Stack>
        </Stack>

        <Stack align="flex-start">
          <Title order={3}>Our Sponsors</Title>
          <Box h="10rem" w="40rem" bg="var(--mantine-color-purple-5)">
            <Center h="100%" w="100%">
              <Text>Sponsor links go here</Text>
            </Center>
          </Box>
        </Stack>
      </Group>
    </footer>
  )
}