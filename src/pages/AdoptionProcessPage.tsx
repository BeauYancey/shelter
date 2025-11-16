import { Container, Title, Text, Paper, Stack, List, ThemeIcon, Grid, Button, Divider, Group } from "@mantine/core";
import { IconPhone, IconClipboardList, IconHeart, IconInfoCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const AdoptionProcessPage = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        How to Adopt
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Thank you for choosing to adopt! Here's everything you need to know about our adoption process.
      </Text>

      {/* Step 1: Making an Appointment */}
      <Paper shadow="sm" p="xl" mb="lg" withBorder>
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size="lg" radius="md" color="blue">
              <IconPhone size={20} />
            </ThemeIcon>
            <Title order={2}>Step 1: Schedule Your Visit</Title>
          </Group>
          
          <Text>
            The first step in adopting a pet is to schedule an appointment with our shelter. 
            This ensures our staff can give you personalized attention and help you find the perfect match.
          </Text>

          <Paper p="md" withBorder bg="blue.0">
            <Text fw={600} mb="xs">Contact Us:</Text>
            <Text>Phone: (555) 123-4567</Text>
            <Text>Email: adoptions@shelter.org</Text>
            <Text>Hours: Monday-Saturday, 10am-6pm</Text>
            <Text mt="sm" size="sm" c="dimmed">
              Walk-ins are welcome, but appointments receive priority assistance.
            </Text>
          </Paper>

          <Button leftSection={<IconPhone size={16} />} size="md" fullWidth>
            Call to Schedule
          </Button>
        </Stack>
      </Paper>

      {/* Step 2: Questions to Ask */}
      <Paper shadow="sm" p="xl" mb="lg" withBorder>
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size="lg" radius="md" color="teal">
              <IconClipboardList size={20} />
            </ThemeIcon>
            <Title order={2}>Step 2: Important Questions to Ask</Title>
          </Group>
          
          <Text>
            Come prepared with questions to ensure the pet is right for your home and lifestyle. 
            Here are some important topics to discuss:
          </Text>

          <Grid gutter="md">
            <Grid.Col span={12}>
              <Text fw={600} size="sm" mb="xs">About the Pet's Health:</Text>
              <List size="sm" spacing="xs">
                <List.Item>Is the pet up to date on vaccinations?</List.Item>
                <List.Item>Has the pet been spayed/neutered?</List.Item>
                <List.Item>Does the pet have any known health issues or special medical needs?</List.Item>
                <List.Item>What is the pet's medical history?</List.Item>
              </List>
            </Grid.Col>

            <Grid.Col span={12}>
              <Text fw={600} size="sm" mb="xs">About Behavior & Personality:</Text>
              <List size="sm" spacing="xs">
                <List.Item>How does the pet interact with children, other pets, and strangers?</List.Item>
                <List.Item>What is the pet's energy level and exercise needs?</List.Item>
                <List.Item>Are there any known behavioral issues or training needs?</List.Item>
                <List.Item>What is the pet's typical daily routine?</List.Item>
              </List>
            </Grid.Col>

            <Grid.Col span={12}>
              <Text fw={600} size="sm" mb="xs">About History & Care:</Text>
              <List size="sm" spacing="xs">
                <List.Item>Why was the pet surrendered or how did they come to the shelter?</List.Item>
                <List.Item>What type of food does the pet eat and how often?</List.Item>
                <List.Item>Does the pet have any special dietary restrictions?</List.Item>
                <List.Item>Is the pet house-trained or litter-trained?</List.Item>
              </List>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>

      {/* Step 3: Things to Know */}
      <Paper shadow="sm" p="xl" mb="lg" withBorder>
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size="lg" radius="md" color="grape">
              <IconInfoCircle size={20} />
            </ThemeIcon>
            <Title order={2}>Step 3: Things to Know Before Adopting</Title>
          </Group>
          
          <Text>
            Adopting a pet is a big responsibility. Here's what you should be prepared for:
          </Text>

          <Stack gap="sm">
            <div>
              <Text fw={600} mb="xs">Required Documentation:</Text>
              <List size="sm" spacing="xs">
                <List.Item>Valid photo ID</List.Item>
                <List.Item>Proof of address (utility bill or lease agreement)</List.Item>
                <List.Item>Landlord approval if renting (phone number or written permission)</List.Item>
                <List.Item>Veterinary references if you've had pets before</List.Item>
              </List>
            </div>

            <Divider />

            <div>
              <Text fw={600} mb="xs">Adoption Fees Include:</Text>
              <List size="sm" spacing="xs">
                <List.Item>Spay/neuter surgery</List.Item>
                <List.Item>Up-to-date vaccinations</List.Item>
                <List.Item>Microchip registration</List.Item>
                <List.Item>Initial health examination</List.Item>
                <List.Item>30 days of pet insurance (optional enrollment)</List.Item>
              </List>
            </div>

            <Divider />

            <div>
              <Text fw={600} mb="xs">Home Requirements:</Text>
              <List size="sm" spacing="xs">
                <List.Item>All household members must meet the pet before adoption</List.Item>
                <List.Item>Current pets may need to meet the new pet (meet-and-greet required)</List.Item>
                <List.Item>You must be 21 years or older to adopt</List.Item>
                <List.Item>Provide a safe, loving, and permanent home</List.Item>
              </List>
            </div>

            <Divider />

            <div>
              <Text fw={600} mb="xs">Post-Adoption Support:</Text>
              <List size="sm" spacing="xs">
                <List.Item>14-day adjustment period with free behavioral support</List.Item>
                <List.Item>Access to training resources and recommendations</List.Item>
                <List.Item>Lifetime return policy if circumstances change</List.Item>
                <List.Item>Follow-up calls to ensure successful transition</List.Item>
              </List>
            </div>
          </Stack>
        </Stack>
      </Paper>

      {/* Final Section */}
      <Paper shadow="sm" p="xl" withBorder bg="green.0">
        <Stack gap="md" align="center">
          <ThemeIcon size={60} radius="xl" color="green">
            <IconHeart size={30} />
          </ThemeIcon>
          <Title order={3} ta="center">Ready to Change a Life?</Title>
          <Text ta="center" maw={500}>
            Every adoption saves a life and opens up space for another animal in need. 
            Our team is here to guide you through every step of the process.
          </Text>
          <Button size="lg" color="green">
            <Link to="/adopt/pets" style={{ textDecoration: 'none', color: 'inherit' }}>
            View Available Pets
            </Link>
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default AdoptionProcessPage;