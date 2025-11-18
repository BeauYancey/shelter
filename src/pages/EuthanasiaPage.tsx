import { Container, Title, Text, Paper, Stack, Alert, Divider } from '@mantine/core'
import { IconInfoCircle, IconHeart } from '@tabler/icons-react'

export default function EuthanasiaPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Euthanasia Services</Title>
          <Text size="lg" c="dimmed">
            Our commitment to humane treatment and compassionate care
          </Text>
        </div>

        <Alert icon={<IconInfoCircle size={20} />} title="Policy Update - July 26, 2022" color="violet" variant="light">
          <Text size="sm">
            The South Utah Valley Animal Shelter has updated our euthanasia procedures to ensure 
            the most humane treatment possible for animals in our care.
          </Text>
        </Alert>

        <Paper shadow="sm" p="xl" radius="md">
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                Upcoming Policy Changes
              </Title>
              <Text c="dimmed" mb="lg">July 26, 2022</Text>
              
              <Text mb="md">
                The South Utah Valley Animal Shelter would like to announce the following changes:
              </Text>

              <Text mb="md">
                Over the past few years the Board of Directors of the South Utah Valley Animal Shelter have 
                reviewed studies regarding the humane euthanasia of animals. With the assistance of shelter 
                management, a decision was reached at a recent board meeting to update shelter policy, 
                transitioning from the use of carbon monoxide to lethal injection.
              </Text>

              <Text mb="md">
                As of July 2022 the South Utah Valley Animal Shelter has made this transition and will be 
                using EBI (euthanasia by injection) as our primary method of euthanasia.
              </Text>

              <Text>
                As member cities of the South Utah Valley Animal Shelter, we remain committed to the humane 
                treatment of animals and the dedication to re-unite lost animals with their owners.
              </Text>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Stack gap="lg">
            <div>
              <Title order={2} size="h3" mb="md" c="#605cac">
                <IconHeart size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Our Commitment
              </Title>
              
              <Text mb="md">
                At South Utah Valley Animal Shelter, we understand that euthanasia is one of the most difficult 
                aspects of animal welfare work. Every decision is made with the utmost care and consideration 
                for the animal's wellbeing.
              </Text>

              <Divider my="md" />

              <div>
                <Title order={3} size="h5" mb="sm" c="#605cac">
                  Humane Treatment
                </Title>
                <Text mb="md">
                  We are dedicated to providing the most humane and compassionate care possible. Our transition 
                  to euthanasia by injection (EBI) reflects our commitment to following best practices in 
                  animal welfare and ensuring a peaceful, dignified process.
                </Text>
              </div>

              <div>
                <Title order={3} size="h5" mb="sm" c="#605cac">
                  Life-Saving Focus
                </Title>
                <Text mb="md">
                  Our primary mission is to save lives. We work tirelessly to reunite lost pets with their 
                  families, find homes for adoptable animals, and provide medical care and rehabilitation 
                  whenever possible. Euthanasia is only considered as a last resort when an animal is suffering 
                  or poses a significant safety risk.
                </Text>
              </div>

              <div>
                <Title order={3} size="h5" mb="sm" c="#605cac">
                  Community Partnership
                </Title>
                <Text>
                  We work closely with our member cities and community partners to promote responsible pet 
                  ownership, support spay/neuter programs, and reduce the number of homeless animals in our 
                  community. Together, we can make a difference.
                </Text>
              </div>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} size="h3" mb="md" c="#605cac">
            Questions or Concerns?
          </Title>
          <Text mb="md">
            If you have questions about our euthanasia policies or any other shelter services, please don't 
            hesitate to contact us. We are committed to transparency and open communication with our community.
          </Text>
          <Text>
            <strong>Phone:</strong>{' '}
            <a href="tel:801-851-4080" style={{ color: '#605cac' }}>
              801-851-4080
            </a>
          </Text>
        </Paper>
      </Stack>
    </Container>
  )
}