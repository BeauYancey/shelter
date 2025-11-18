import { Container, Title, Text, Paper, Button, Stack, Alert, List } from '@mantine/core'
import { IconHeart, IconInfoCircle, IconMail, IconPhone } from '@tabler/icons-react'

export default function VolunteerPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Volunteer</Title>
          <Text size="lg" c="dimmed">
            Join our team and make a difference in the lives of animals in need
          </Text>
        </div>

        <Alert icon={<IconInfoCircle size={20} />} title="Important Volunteer Guidelines" color="violet">
          <List spacing="xs" size="sm">
            <List.Item>All volunteers must check in at the front desk before visiting with the animals</List.Item>
            <List.Item>Please call and schedule a time and date beforehand if you are a group of FOUR or more</List.Item>
            <List.Item>Children under 18 years of age MUST have an adult with them at all times</List.Item>
            <List.Item>You must be over 18 years old to hold the leash of any canines</List.Item>
          </List>
        </Alert>

        <Paper shadow="sm" p="xl" radius="md">
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                Why Volunteer With Us?
              </Title>
              <Text>
                We love having volunteers and often rely on their help for the success of events as well as 
                the happiness of the animals. To volunteer for the South Utah Valley Animal Shelter please 
                come in and fill out an application. We would love to have your help.
              </Text>
              <Text mt="md">
                Come help us out at regularly scheduled times - or whenever you have an hour or two to spare!
              </Text>
            </div>

            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                Volunteer Opportunities
              </Title>
              
              <Paper p="md" withBorder mb="md">
                <Title order={3} size="h5" mb="sm" c="#605cac">
                  Shelter Volunteering
                </Title>
                <Text>
                  You must be over the age of 18 to volunteer inside the shelter. Help with daily animal 
                  care, socialization, cleaning, and other essential tasks that keep our shelter running smoothly.
                </Text>
              </Paper>

              <Paper p="md" withBorder>
                <Title order={3} size="h5" mb="sm" c="#605cac">
                  Clinics & Events
                </Title>
                <Text>
                  To volunteer at clinics/events you must be 16 years of age and available weeknights and 
                  Saturdays. Help us make our community events and veterinary clinics successful!
                </Text>
              </Paper>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            Get Started Today
          </Title>
          <Stack gap="md">
            <Text>
              Ready to join our volunteer team? Fill out our volunteer application to get started. 
              We'll review your application and get in touch with you about next steps.
            </Text>
            
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Button 
                size="lg" 
                style={{ backgroundColor: '#605cac' }}
                leftSection={<IconHeart size={20} />}
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTw0XnPFHtEEcmEPkFQn68oRqVvexkstsbVztZMvlbWV4b7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer Application
              </Button>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} size="h3" mb="md" c="#605cac">
            Questions?
          </Title>
          <Text mb="md">
            For any volunteering questions, please contact our volunteer coordinator:
          </Text>
          <Stack gap="sm">
            <Text>
              <IconMail size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <strong>Email:</strong>{' '}
              <a href="mailto:Sabrinasuvas@gmail.com" style={{ color: '#605cac' }}>
                Sabrinasuvas@gmail.com
              </a>
            </Text>
            <Text>
              <IconPhone size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <strong>Phone:</strong>{' '}
              <a href="tel:801-851-4080" style={{ color: '#605cac' }}>
                801-851-4080
              </a>
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}