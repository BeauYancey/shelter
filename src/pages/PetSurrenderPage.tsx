import { Container, Title, Text, Paper, Stack, Alert, List, Anchor } from '@mantine/core'
import { IconAlertCircle, IconHeart, IconExternalLink } from '@tabler/icons-react'

export default function PetSurrenderPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Pet Surrender</Title>
          <Text size="lg" c="dimmed">
            Information and resources for pet owners
          </Text>
        </div>

        <Alert 
          icon={<IconAlertCircle size={24} />} 
          title="Owner Surrender Status" 
          color="red" 
          variant="filled"
          styles={{
            title: { fontSize: '1.1rem', fontWeight: 600 }
          }}
        >
          <Text size="md" fw={500}>
            SUVAS IS NOT ACCEPTING OWNER SURRENDERS AT THIS TIME. OUR SHELTER IS AT CRISIS CAPACITY 
            AND WILL OPEN OUR SURRENDER APPLICATIONS WHEN THAT CHANGES.
          </Text>
        </Alert>

        <Paper shadow="sm" p="xl" radius="md">
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                <IconHeart size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Alternatives to Surrendering Your Pet
              </Title>
              <Text mb="md">
                We understand that circumstances can make it difficult to keep your pet. Before considering 
                surrender, please explore these alternatives that may help you find a new home for your pet:
              </Text>
            </div>

            <div>
              <Title order={3} size="h5" mb="sm" c="#605cac">
                1. Network Your Pet
              </Title>
              <Text mb="md">
                Reach out to family, friends, coworkers, and neighbors. Post about your pet on your social 
                media platforms and ask friends to help by sharing your posts. Personal connections often 
                lead to the best outcomes.
              </Text>
            </div>

            <div>
              <Title order={3} size="h5" mb="sm" c="#605cac">
                2. Rehoming Facebook Groups
              </Title>
              <Text mb="md">
                Search for local pet rehoming groups on Facebook in your area. These community-focused 
                groups connect pet owners directly with potential adopters.
              </Text>
            </div>

            <div>
              <Title order={3} size="h5" mb="sm" c="#605cac">
                3. Rehome by Adopt-A-Pet
              </Title>
              <Text mb="xs">
                A free platform that helps you safely rehome your pet directly to a new family:
              </Text>
              <Anchor 
                href="https://rehome.adoptapet.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                c="#605cac"
                fw={500}
              >
                https://rehome.adoptapet.com/
                <IconExternalLink size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
              </Anchor>
            </div>

            <div>
              <Title order={3} size="h5" mb="sm" c="#605cac">
                4. Home-to-Home Rehoming
              </Title>
              <Text mb="xs">
                Another trusted rehoming platform connecting pet owners with adopters:
              </Text>
              <Anchor 
                href="https://home-home.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                c="#605cac"
                fw={500}
              >
                https://home-home.org/
                <IconExternalLink size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
              </Anchor>
            </div>

            <div>
              <Title order={3} size="h5" mb="sm" c="#605cac">
                5. Ruff Haven Crisis Sheltering
              </Title>
              <Text mb="xs">
                Provides temporary and permanent rehoming solutions:
              </Text>
              <Anchor 
                href="https://www.ruffhaven.org/rehome-your-pet" 
                target="_blank" 
                rel="noopener noreferrer"
                c="#605cac"
                fw={500}
              >
                https://www.ruffhaven.org/rehome-your-pet
                <IconExternalLink size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
              </Anchor>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            Need Help Keeping Your Pet?
          </Title>
          <Text mb="md">
            If you are wanting to keep your pet and need assistance, resources are available to help you.
          </Text>
          <div>
            <Text fw={500} mb="sm">Humane Society of Utah Resources:</Text>
            <List withPadding spacing="xs">
              <List.Item>Pet Retention Program</List.Item>
              <List.Item>Behavior and Training Program</List.Item>
            </List>
            <Text mt="md">
              View their resources at:{' '}
              <Anchor 
                href="https://utahhumane.org" 
                target="_blank" 
                rel="noopener noreferrer"
                c="#605cac"
                fw={500}
              >
                utahhumane.org
                <IconExternalLink size={16} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
              </Anchor>
            </Text>
          </div>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} size="h3" mb="md" c="#605cac">
            Important Note
          </Title>
          <Text>
            If your pet came from a shelter or rescue other than SUVAS, please contact them first. 
            Many organizations have return policies and may be able to help you directly.
          </Text>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            Questions?
          </Title>
          <Text>
            If you have questions about pet surrender or need additional guidance, please contact us at:
          </Text>
          <Text mt="sm">
            <strong>Phone:</strong>{' '}
            <Anchor href="tel:801-851-4080" c="#605cac">
              801-851-4080
            </Anchor>
          </Text>
        </Paper>
      </Stack>
    </Container>
  )
}