import { Container, Title, Text, List, Paper, Button, Stack } from '@mantine/core'
import { IconHeart, IconPaw } from '@tabler/icons-react'

export default function FosteringPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Fostering</Title>
          <Text size="lg" c="dimmed">
            Help us save lives by opening your heart and home to animals in need
          </Text>
        </div>

        <Paper shadow="sm" p="xl" radius="md">
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                Why We Need Foster Families
              </Title>
              <Text>
                With the high demand put on our employees and the number of animals entering our shelter, 
                we find ourselves with cats and kittens that need more care than we have time for. We do not 
                have around-the-clock staff to help abandoned, malnourished, newborn kittens in need.
              </Text>
              <Text mt="md">
                The community can help us through our foster program. By taking these kittens into a home it 
                gives them the best chance of survival and ultimately, adoption.
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                <IconPaw size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Cat Foster Opportunities
              </Title>
              <Text mb="sm">
                Currently our cat foster program at SUVAS mainly focuses on kittens and special need cats. 
                Foster opportunities would generally be for:
              </Text>
              <List withPadding>
                <List.Item>A litter of orphaned kittens without a mother</List.Item>
                <List.Item>Individually orphaned kittens</List.Item>
                <List.Item>Mother cat with a litter of kittens</List.Item>
                <List.Item>Medical recovery cat or kitten</List.Item>
                <List.Item>Unaltered cat or kittens (foster to adopt)</List.Item>
              </List>
            </div>

            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                <IconPaw size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Dog Foster Opportunities
              </Title>
              <Text mb="sm">
                SUVAS also has the need for dog fosters which could include but not limited to:
              </Text>
              <List withPadding>
                <List.Item>Small dogs</List.Item>
                <List.Item>Medium and large adult dogs</List.Item>
                <List.Item>Moms with puppies</List.Item>
                <List.Item>Puppies without moms</List.Item>
                <List.Item>Dogs in behavioral decline</List.Item>
                <List.Item>Shy or under socialized dogs</List.Item>
                <List.Item>Seniors</List.Item>
                <List.Item>Dogs in need of dog and human manners</List.Item>
                <List.Item>Long term hospice care</List.Item>
              </List>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            <IconHeart size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            The Impact of Fostering
          </Title>
          <Stack gap="md">
            <Text>
              Foster families play an essential role in animal rescue. They provide care and support for 
              the most vulnerable animals in our shelter.
            </Text>
            <Text>
              While in a foster home, our animals learn how to bond with people, receive necessary personal 
              care, and avoid exposure to common shelter illnesses, all while away from the stress of a 
              shelter environment.
            </Text>
            <Text>
              Our fosters are able to learn more about each animal's personality and needs, which in turn 
              helps the adoption staff to find fitting adoptive homes.
            </Text>
            <Text fw={500}>
              Fostering also opens up space in the shelter allowing us to save more lives.
            </Text>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} size="h3" mb="md" c="#605cac">
            How to Become a Foster
          </Title>
          <Stack gap="md">
            <Text>
              Fosters are required to fill out an application which will be reviewed by the shelter manager. 
              Fosters must also watch a training video and answer a short set of questions about the video.
            </Text>
            <Text>
              Inquiring fosters will meet with our foster coordinator in order to become familiar with our 
              procedures and to identify which type of fostering will be best for you and your home.
            </Text>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Title order={3} size="h4" mb="lg" c="#605cac">
                Are you ready to start helping us save lives?
              </Title>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button 
                  size="lg" 
                  style={{ backgroundColor: '#605cac' }}
                  leftSection={<IconPaw size={20} />}
                  component="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScB0DqsPyOl7IA_wky_RNv-jxyyFMPtC37XR5yS7-mhc52DZg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cat Foster Application
                </Button>
                <Button 
                  size="lg" 
                  style={{ backgroundColor: '#605cac' }}
                  leftSection={<IconPaw size={20} />}
                  component="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScB0DqsPyOl7IA_wky_RNv-jxyyFMPtC37XR5yS7-mhc52DZg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dog Foster Application
                </Button>
              </div>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}