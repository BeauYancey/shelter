import { Container, Title, Text, Paper, Stack, Button, Grid, Group, Divider, Card, Badge } from '@mantine/core'
import { IconHeart, IconMail, IconShoppingCart, IconBed, IconBowl, IconGift, IconPaw } from '@tabler/icons-react'

export default function DonationPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md" c="#605cac">Make a Donation</Title>
          <Text size="lg" c="dimmed">
            Help us continue our lifesaving work for animals in need
          </Text>
        </div>

        {/* Hero Section with Images */}
        <Paper 
          shadow="md" 
          radius="md" 
          style={{ overflow: 'hidden' }}
        >
          <div style={{ 
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(96, 92, 172, 0.95) 0%, rgba(139, 134, 212, 0.95) 100%)',
            color: 'white'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3
            }} />
            <Stack gap="md" align="center" style={{ textAlign: 'center', padding: '3rem 2rem', position: 'relative' }}>
              <IconHeart size={56} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
              <Title order={2} c="white" size="2.5rem">There Are Many Ways You Can Give</Title>
              <Text size="lg" maw={800}>
                Our goal is to reunite lost pets back to their owners. But for those less fortunate pets 
                that are not reclaimed, SUVAS is dedicated to ensuring that they are safe and well taken 
                care of.
              </Text>
              <Text size="lg" fw={500} maw={800}>
                Your generous support of the South Utah Valley Animal Shelter's lifesaving work ensures 
                that we can continue the lifesaving work we do. All donations will go towards the animals' 
                health, care and rehoming.
              </Text>
              <Text size="xl" fw={700} style={{ marginTop: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                We can't do it without you.
              </Text>
            </Stack>
          </div>
        </Paper>

        {/* Impact Images Section */}
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Paper radius="md" style={{ overflow: 'hidden', height: '200px', position: 'relative' }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1rem'
              }}>
                <IconHeart size={48} color="white" style={{ marginBottom: '0.5rem' }} />
                <Text c="white" fw={700} size="xl" ta="center">Medical Care</Text>
                <Text c="white" size="sm" ta="center">Lifesaving treatments</Text>
              </div>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Paper radius="md" style={{ overflow: 'hidden', height: '200px', position: 'relative' }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1rem'
              }}>
                <IconBowl size={48} color="white" style={{ marginBottom: '0.5rem' }} />
                <Text c="white" fw={700} size="xl" ta="center">Nutritious Food</Text>
                <Text c="white" size="sm" ta="center">Daily meals for every pet</Text>
              </div>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Paper radius="md" style={{ overflow: 'hidden', height: '200px', position: 'relative' }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1rem'
              }}>
                <IconPaw size={48} color="white" style={{ marginBottom: '0.5rem' }} />
                <Text c="white" fw={700} size="xl" ta="center">Safe Shelter</Text>
                <Text c="white" size="sm" ta="center">Warm beds & loving care</Text>
              </div>
            </Paper>
          </Grid.Col>
        </Grid>

        {/* Donation Options Grid */}
        <Grid gutter="lg">
          {/* Direct Donation */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="0" radius="md" h="100%" withBorder style={{ overflow: 'hidden' }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 18C32.3 18 18 32.3 18 50s14.3 32 32 32 32-14.3 32-32S67.7 18 50 18zm0 58c-14.3 0-26-11.7-26-26s11.7-26 26-26 26 11.7 26 26-11.7 26-26 26z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                  opacity: 0.3
                }} />
                <IconHeart size={80} color="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative' }} />
              </div>
              <Stack gap="md" p="lg" h="calc(100% - 180px)" justify="space-between">
                <div>
                  <Title order={3} size="h4" c="#605cac" mb="sm">Direct Donation</Title>
                  <Text>
                    Make a direct financial contribution to support our shelter operations, medical care, 
                    and animal welfare programs. Every dollar makes a difference in the lives of animals 
                    waiting for their forever homes.
                  </Text>
                </div>
                <Button 
                  size="lg" 
                  style={{ backgroundColor: '#605cac' }}
                  leftSection={<IconHeart size={20} />}
                  fullWidth
                >
                  Donate Online Now
                </Button>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Mail-In Donation */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" h="100%" withBorder>
              <Stack gap="md" h="100%" justify="space-between">
                <div>
                  <Group mb="md">
                    <IconMail size={32} color="#605cac" />
                    <Title order={3} size="h4" c="#605cac">Donate by Mail</Title>
                  </Group>
                  <Text mb="md">
                    Prefer to send a check? We accept donations by mail. Make your check payable to SUVAS 
                    and mail it to our shelter address.
                  </Text>
                  <Paper p="md" withBorder style={{ backgroundColor: '#f8f9fa' }}>
                    <Text fw={500} mb="xs">Mail your donation to:</Text>
                    <Text>SUVAS</Text>
                    <Text>582 W 3000 N Street</Text>
                    <Text>Spanish Fork, UT 84660</Text>
                  </Paper>
                </div>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Food Donation Program */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="0" radius="md" h="100%" withBorder style={{ overflow: 'hidden' }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c3.312 0 6-2.688 6-6s-2.688-6-6-6-6 2.688-6 6 2.688 6 6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  opacity: 0.3
                }} />
                <IconBowl size={80} color="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative' }} />
                <Badge 
                  color="yellow" 
                  size="lg" 
                  style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                >
                  Popular!
                </Badge>
              </div>
              <Stack gap="md" p="lg" h="calc(100% - 180px)" justify="space-between">
                <div>
                  <Title order={3} size="h4" c="#605cac" mb="sm">Feed Shelter Animals</Title>
                  <Text mb="md">
                    We are partnering with All Paws Count (formerly Utah Valley Animal Rescue), an 
                    ambassador for Greater Good Charities. They help provide food for rescue and shelter 
                    animals at a reduced price.
                  </Text>
                  <Paper p="md" style={{ backgroundColor: '#f0edff', border: '2px solid #605cac' }}>
                    <Text fw={700} size="lg" c="#605cac" mb="xs" ta="center">
                      Every $0.15 = 1 Pound of Food!
                    </Text>
                    <Text size="sm" ta="center">
                      Your donation goes further than ever
                    </Text>
                  </Paper>
                  <Divider my="md" />
                  <Text fw={500} mb="xs">To donate food:</Text>
                  <Text size="sm" mb="xs">1. Send via Venmo to: <strong>@UtahValleyAnimalRescue</strong></Text>
                  <Text size="sm" mb="xs">2. Confirm with: <strong>#7029</strong></Text>
                  <Text size="sm">3. Note: <strong>"For SUVAS"</strong></Text>
                </div>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconBowl size={20} />}
                  fullWidth
                >
                  Donate Food via Venmo
                </Button>
              </Stack>
            </Card>
          </Grid.Col>

          {/* ShelterBed Donation */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="0" radius="md" h="100%" withBorder style={{ overflow: 'hidden' }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  opacity: 0.3
                }} />
                <IconBed size={80} color="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative' }} />
              </div>
              <Stack gap="md" p="lg" h="calc(100% - 180px)" justify="space-between">
                <div>
                  <Title order={3} size="h4" c="#605cac" mb="sm">Donate a ShelterBed</Title>
                  <Text mb="md">
                    Provide comfort to a shelter pet by donating a ShelterBed. These are the number one 
                    choice of shelters because they are sturdy, comfortable, and chew-proof. The non-porous 
                    materials are easily sanitized.
                  </Text>
                  <Text>
                    Dogs and cats enjoy the comfort of the raised bed which gives them a soft place to 
                    relax off the floor, making their stay more comfortable while they wait for their 
                    forever homes.
                  </Text>
                </div>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconBed size={20} />}
                  fullWidth
                >
                  Donate a Bed
                </Button>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Amazon Wishlist */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="0" radius="md" h="100%" withBorder style={{ overflow: 'hidden' }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  opacity: 0.3
                }} />
                <IconShoppingCart size={80} color="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative' }} />
              </div>
              <Stack gap="md" p="lg" h="calc(100% - 180px)" justify="space-between">
                <div>
                  <Title order={3} size="h4" c="#605cac" mb="sm">Amazon Wishlist</Title>
                  <Text mb="md">
                    Check out our Amazon wishlist to donate needed supplies directly to the shelter. 
                    Items ship directly to us and go straight to helping the animals in our care.
                  </Text>
                  <Text fw={500} mb="xs">Commonly needed items include:</Text>
                  <Stack gap="xs">
                    <Text size="sm"><IconPaw size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />Pet food and treats</Text>
                    <Text size="sm"><IconPaw size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />Toys and enrichment items</Text>
                    <Text size="sm"><IconPaw size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />Cleaning supplies</Text>
                    <Text size="sm"><IconPaw size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} />Blankets and towels</Text>
                  </Stack>
                </div>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconShoppingCart size={20} />}
                  fullWidth
                >
                  View Amazon Wishlist
                </Button>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Tuft + Paw */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="0" radius="md" h="100%" withBorder style={{ overflow: 'hidden' }}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  opacity: 0.3
                }} />
                <IconGift size={80} color="white" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))', position: 'relative' }} />
              </div>
              <Stack gap="md" p="lg" h="calc(100% - 180px)" justify="space-between">
                <div>
                  <Title order={3} size="h4" c="#605cac" mb="sm">Shop Tuft + Paw</Title>
                  <Text mb="md">
                    Help pets while you shop for your cat! Tuft + Paw is a purr-veyor of high-quality, 
                    consciously made, stylish cat furniture, cat accessories, and toys.
                  </Text>
                  <Paper p="md" style={{ backgroundColor: '#f0edff', border: '2px solid #605cac' }}>
                    <Text fw={700} size="lg" c="#605cac" ta="center">
                      10% of Your Order Benefits SUVAS
                    </Text>
                  </Paper>
                  <Text mt="md" size="sm">
                    Simply select our shelter as the beneficiary when you shop, and Tuft + Paw will 
                    donate 10% of your order to us. It's shopping with a purpose!
                  </Text>
                </div>
                <Button 
                  variant="light" 
                  color="violet"
                  leftSection={<IconShoppingCart size={20} />}
                  fullWidth
                >
                  Shop Tuft + Paw
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Thank You Section */}
        <Paper shadow="sm" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <IconHeart size={48} color="#605cac" style={{ margin: '0 auto', display: 'block', marginBottom: '1rem' }} />
          <Title order={2} mb="md" c="#605cac">Thank You for Your Support</Title>
          <Text size="lg">
            Every donation, no matter the size, makes a real difference in the lives of animals waiting 
            for their second chance. Your generosity helps us provide food, shelter, medical care, and 
            love to pets in need. Together, we're saving lives.
          </Text>
        </Paper>
      </Stack>
    </Container>
  )
}