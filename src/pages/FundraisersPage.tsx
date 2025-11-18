import { Container, Title, Text, Paper, Button, Stack, Grid, Badge, Group } from '@mantine/core'
import { IconHeart, IconPaw, IconCalendar, IconGift } from '@tabler/icons-react'

export default function FundraisersPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Fundraisers</Title>
          <Text size="lg" c="dimmed">
            Your support helps us save lives and build a healthier community
          </Text>
        </div>

        {/* Featured Campaign */}
        <Paper shadow="md" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa', border: '2px solid #605cac' }}>
          <Badge color="violet" size="lg" mb="md">Featured Campaign</Badge>
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="sm" c="#605cac">
                Care Through Control - Building Healthier Communities Mission
              </Title>
              <Text size="lg" fw={500} c="dimmed" mb="md">
                Let's reach this goal together!
              </Text>
            </div>

            <Text>
              The Care Through Control Mission is dedicated to building a healthier community one animal at a time. 
              This fund provides life-saving medical care for the animals at South Utah Valley Animal Shelter, 
              including spaying/neutering, vaccinations, medications, and other essential treatments.
            </Text>

            <Text>
              With the organization we were partnering with shifting their focus elsewhere, we are now turning to 
              you, our compassionate community, for support. Your donation is more important than ever.
            </Text>

            <div>
              <Text fw={500} mb="sm" size="lg">By contributing, you'll help us:</Text>
              <Stack gap="xs" ml="md">
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Prevent accidental litters through spay and neuter
                </Text>
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Provide critical medical care and vaccinations
                </Text>
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Ensure each animal has the basic necessities for a healthy life
                </Text>
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Reduce shelter overpopulation
                </Text>
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Sustain and grow our life-saving foster program
                </Text>
                <Text><IconPaw size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#605cac' }} />
                  Ensuring each adopted animal is spayed/neutered
                </Text>
              </Stack>
            </div>

            <Paper p="md" style={{ backgroundColor: '#fff' }}>
              <Text size="lg" fw={500} ta="center" c="#605cac" mb="sm">
                Give Them the Care They Deserve
              </Text>
              <Text ta="center" mb="md">
                Together, we can reduce the number of homeless pets and give animals a second chance at life. 
                Please donate today and help us create a brighter, healthier future for animals in our community.
              </Text>
              <div style={{ textAlign: 'center' }}>
                <Button 
                  size="lg" 
                  style={{ backgroundColor: '#605cac' }}
                  leftSection={<IconHeart size={20} />}
                >
                  Donate Now
                </Button>
              </div>
            </Paper>
          </Stack>
        </Paper>

        {/* Other Fundraising Opportunities */}
        <div>
          <Title order={2} mb="lg" c="#605cac">More Ways to Support</Title>
          
          <Grid gutter="lg">
            {/* Sponsor a Pet */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper shadow="sm" p="xl" radius="md" h="100%">
                <Group mb="md">
                  <IconPaw size={32} color="#605cac" />
                  <Title order={3} size="h4" c="#605cac">Sponsor a Pet</Title>
                </Group>
                <Text mb="md">
                  Help cover the costs of care for a specific animal in our shelter. Your sponsorship provides 
                  food, medical care, and enrichment for pets waiting for their forever homes.
                </Text>
                <Text fw={500} mb="sm">Sponsorship includes:</Text>
                <Stack gap="xs" mb="lg">
                  <Text size="sm">• Daily meals and nutrition</Text>
                  <Text size="sm">• Veterinary care and medications</Text>
                  <Text size="sm">• Toys and enrichment activities</Text>
                  <Text size="sm">• Photo updates of your sponsored pet</Text>
                </Stack>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconHeart size={18} />}
                  fullWidth
                >
                  Learn More About Sponsorship
                </Button>
              </Paper>
            </Grid.Col>

            {/* Holiday Gift Drive */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper shadow="sm" p="xl" radius="md" h="100%">
                <Group mb="md">
                  <IconGift size={32} color="#605cac" />
                  <Title order={3} size="h4" c="#605cac">Holiday Gift Drive</Title>
                </Group>
                <Text mb="md">
                  Every holiday season, we host a gift drive to provide special treats and necessities for our 
                  shelter animals. Help make the holidays brighter for pets in need!
                </Text>
                <Text fw={500} mb="sm">Most needed items:</Text>
                <Stack gap="xs" mb="lg">
                  <Text size="sm">• Pet toys and enrichment items</Text>
                  <Text size="sm">• Blankets and bedding</Text>
                  <Text size="sm">• Quality pet food and treats</Text>
                  <Text size="sm">• Cleaning supplies</Text>
                </Stack>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconGift size={18} />}
                  fullWidth
                >
                  View Wish List
                </Button>
              </Paper>
            </Grid.Col>

            {/* Annual Paws & Claws Gala */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper shadow="sm" p="xl" radius="md" h="100%">
                <Group mb="md">
                  <IconCalendar size={32} color="#605cac" />
                  <Title order={3} size="h4" c="#605cac">Paws & Claws Gala</Title>
                </Group>
                <Text mb="md">
                  Join us for our signature fundraising event featuring dinner, live entertainment, silent auction, 
                  and inspiring stories of rescued animals. All proceeds support our shelter operations and programs.
                </Text>
                <Text fw={500} mb="sm">Event highlights:</Text>
                <Stack gap="xs" mb="lg">
                  <Text size="sm">• Elegant dinner and cocktails</Text>
                  <Text size="sm">• Live and silent auctions</Text>
                  <Text size="sm">• Meet adoptable animals</Text>
                  <Text size="sm">• Network with fellow animal lovers</Text>
                </Stack>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconCalendar size={18} />}
                  fullWidth
                >
                  Event Details Coming Soon
                </Button>
              </Paper>
            </Grid.Col>

            {/* Walk for Paws */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper shadow="sm" p="xl" radius="md" h="100%">
                <Group mb="md">
                  <IconPaw size={32} color="#605cac" />
                  <Title order={3} size="h4" c="#605cac">Walk for Paws</Title>
                </Group>
                <Text mb="md">
                  Our annual community walk brings together animal lovers for a fun day of exercise, entertainment, 
                  and fundraising. Bring your dogs and family for a memorable day supporting homeless pets!
                </Text>
                <Text fw={500} mb="sm">What to expect:</Text>
                <Stack gap="xs" mb="lg">
                  <Text size="sm">• 5K walk through scenic trails</Text>
                  <Text size="sm">• Pet-friendly activities and games</Text>
                  <Text size="sm">• Vendor booths and giveaways</Text>
                  <Text size="sm">• Prizes for top fundraisers</Text>
                </Stack>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconPaw size={18} />}
                  fullWidth
                >
                  Register for Walk
                </Button>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>

        {/* Host Your Own Fundraiser */}
        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            Host Your Own Fundraiser
          </Title>
          <Text mb="md">
            Want to make an even bigger impact? Host your own fundraiser for SUVAS! Whether it's a birthday 
            celebration, a bake sale, a garage sale, or a community event, every effort helps save lives.
          </Text>
          <Text mb="lg">
            We'll provide you with materials, guidance, and support to make your fundraiser a success. Contact 
            us to learn more about hosting a third-party fundraising event.
          </Text>
          <div style={{ textAlign: 'center' }}>
            <Button 
              size="lg" 
              variant="outline"
              color="violet"
              leftSection={<IconHeart size={20} />}
            >
              Start a Fundraiser
            </Button>
          </div>
        </Paper>
      </Stack>
    </Container>
  )
}