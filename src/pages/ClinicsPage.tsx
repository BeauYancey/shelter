import { Container, Title, Text, Paper, Stack, Alert, Table, Badge, Divider, Button, Group } from '@mantine/core'
import { IconInfoCircle, IconCalendar, IconMapPin, IconCurrency, IconAlertTriangle } from '@tabler/icons-react'

export default function ClinicsPage() {
  const clinics = [
    {
      location: "Spanish Fork/Salem",
      date: "March 8th",
      time: "10am-12pm",
      venue: "Nebo Fairgrounds",
      address: "475 S Main St. (Ponderosa Bldg)",
      vet: "Nebo",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp_felv: 41
      }
    },
    {
      location: "Mapleton",
      date: "April 12th",
      time: "10am-12pm",
      venue: "Fire Station",
      address: "305 N Main",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Springville",
      date: "April 19th",
      time: "10am-12pm",
      venue: "Fire Station",
      address: "75 W Center St",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Payson",
      date: "May 3rd",
      time: "10am-12pm",
      venue: "Mt. Nebo Middle School",
      address: "851 W 450 S (Drive Through)",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Santaquin",
      date: "June 7th",
      time: "10am-12pm",
      venue: "Public Works",
      address: "1215 N Center St.",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Provo",
      date: "June 14th",
      time: "10am-12pm",
      venue: "Fire Station Two",
      address: "2737 N Canyon Rd.",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Springville",
      date: "Aug 9th",
      time: "10am-12pm",
      venue: "Fire Station",
      address: "75 W Center St",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Payson",
      date: "Sept 6th",
      time: "10am-12pm",
      venue: "Payson City Center",
      address: "South Parking lot (Drive Through)",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Salem",
      date: "Sept 27th",
      time: "10am-12pm",
      venue: "Fire Station",
      address: "750 N 250 E Salem",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    },
    {
      location: "Provo",
      date: "Oct 4th",
      time: "10am-12pm",
      venue: "Fire Station One",
      address: "80 S 300 W Provo",
      vet: "Dr. Bott",
      prices: {
        rabies: 16,
        bordetella: 21,
        dhpp: 21,
        fvrcp: 26,
        felv: 21
      }
    }
  ]

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Vaccination Clinics</Title>
          <Text size="lg" c="dimmed">
            Affordable vaccination services for your pets throughout 2025
          </Text>
        </div>

        <Alert icon={<IconAlertTriangle size={20} />} title="Important Clinic Information" color="violet">
          <Stack gap="sm">
            <Text size="sm" fw={500}>**CATS MUST BE IN A CARRIER TO ATTEND CLINICS**</Text>
            <Text size="sm">
              Please note that our clinics operate on a first-come, first-served basis. Pre-registration is 
              no longer available. We do our best to vaccinate as many animals as possible within the time 
              allowed. Thank you for your understanding and cooperation.
            </Text>
          </Stack>
        </Alert>

        <Paper shadow="sm" p="xl" radius="md">
          <Title order={2} size="h3" mb="lg" c="#605cac">
            Animal Licensing Information
          </Title>
          <Stack gap="md">
            <Text>
              To obtain a Utah County Animal License, your pet must be at least four (4) months of age with 
              a current rabies vaccination. You are required to license your pet within thirty (30) days of 
              acquiring the new animal, or moving into Utah County.
            </Text>
            <Text>
              Utah State Law and Utah County Ordinance require that EVERY dog over six (6) months of age must 
              have a current rabies vaccination and animal license. It is mandatory that a license and rabies 
              tag be attached to your pet's collar at all times.
            </Text>
            <Text>
              When purchasing a license, you must provide proof of rabies vaccination with a current rabies 
              certificate from a veterinarian. Many city offices and veterinary clinics are available if you 
              wish to purchase a license in-person.
            </Text>

            <Divider my="sm" />

            <div>
              <Text fw={500} mb="xs">We provide animal licensing for southern Utah County, including:</Text>
              <Text c="dimmed">
                Elk Ridge, Genola, Goshen, Mapleton, Payson, Provo, Salem, Santaquin, Spanish Fork, 
                Springville, and Woodland Hills
              </Text>
              <Text size="sm" mt="xs" c="dimmed">
                Animal licenses for Northern Utah County are provided by the North Utah Valley Animal Shelter.
              </Text>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Button 
                size="lg" 
                style={{ backgroundColor: '#605cac' }}
                leftSection={<IconCalendar size={20} />}
              >
                Purchase License Online
              </Button>
            </div>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Title order={2} size="h3" mb="md" c="#605cac">
            Animal License Prices
          </Title>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>License Type</Table.Th>
                <Table.Th>Spayed/Neutered</Table.Th>
                <Table.Th>Not Spayed/Neutered</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>1 Year</Table.Td>
                <Table.Td>$15.00</Table.Td>
                <Table.Td>$30.00</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>3 Year</Table.Td>
                <Table.Td>$40.00</Table.Td>
                <Table.Td>$80.00</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Lifetime</Table.Td>
                <Table.Td>$75.00</Table.Td>
                <Table.Td>$150.00</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Senior (65+) Lifetime</Table.Td>
                <Table.Td>$50.00</Table.Td>
                <Table.Td>$100.00</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>

        <div>
          <Title order={2} mb="lg" c="#605cac">2025 Vaccination Clinic Schedule</Title>
          
          <Stack gap="lg">
            {clinics.map((clinic, index) => (
              <Paper key={index} shadow="sm" p="xl" radius="md" withBorder>
                <Group justify="space-between" mb="md" wrap="wrap">
                  <div>
                    <Group gap="sm" mb="xs">
                      <Title order={3} size="h4" c="#605cac">{clinic.location}</Title>
                      <Badge color="violet" size="lg">{clinic.date}</Badge>
                    </Group>
                    <Group gap="xl" mt="sm">
                      <Text size="sm">
                        <IconCalendar size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                        {clinic.time}
                      </Text>
                      <Text size="sm">
                        <IconMapPin size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                        {clinic.venue}
                      </Text>
                    </Group>
                    <Text size="sm" c="dimmed" mt="xs">{clinic.address}</Text>
                  </div>
                </Group>

                <Divider my="md" />

                <div>
                  <Text fw={500} mb="sm" size="sm">
                    <IconCurrency size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    Vaccination Prices:
                  </Text>
                  <Group gap="xl" wrap="wrap">
                    <Text size="sm">Rabies: ${clinic.prices.rabies}.00</Text>
                    <Text size="sm">Bordetella (Kennel Cough): ${clinic.prices.bordetella}.00</Text>
                    <Text size="sm">DHPP (Parvo Combo): ${clinic.prices.dhpp}.00</Text>
                    {clinic.prices.fvrcp_felv ? (
                      <Text size="sm">FVRCP & FeLV Combo: ${clinic.prices.fvrcp_felv}.00</Text>
                    ) : (
                      <>
                        <Text size="sm">FVRCP (Feline Distemper): ${clinic.prices.fvrcp}.00</Text>
                        <Text size="sm">FeLV (Feline Leukemia): ${clinic.prices.felv}.00</Text>
                      </>
                    )}
                  </Group>
                </div>
              </Paper>
            ))}
          </Stack>
        </div>
      </Stack>
    </Container>
  )
}