import { Stack, Title, Group, Menu, Anchor } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export default function Header() {
  const linkStyle = {
    transition: 'all 0.2s ease',
    padding: '0.5rem 1rem',
    borderRadius: '4px'
  }

  const hoverStyle = {
    root: {
      '&:hover': {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)'
      }
    }
  }

  return (
    <header style={{ borderBottom: '1px solid #e9ecef' }}>
      <Stack gap={0}>
        <div style={{ 
          backgroundColor: '#e3f2fd', 
          padding: '2rem',
          width: '100%'
        }}>
          <Title order={1} ta="center" size="2rem" c="gray">ANIMAL SHELTER</Title>
        </div>
        
        <Group justify="space-evenly" style={{ padding: '1.5rem 3rem', backgroundColor: '#fff' }}>
          <Anchor 
            href="/" 
            underline="never" 
            c="dark" 
            fw={500} 
            size="md"
            style={linkStyle}
            styles={hoverStyle}
          >
            Home
          </Anchor>

          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Anchor 
                component="button"
                underline="never" 
                c="dark" 
                fw={500} 
                size="md"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                About Us <IconChevronDown size={16} />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a" href="/about/blog">Blog</Menu.Item>
              <Menu.Label>Calendar</Menu.Label>
              <Menu.Item component="a" href="/about/calendar/hours">Hours of operation</Menu.Item>
              <Menu.Item component="a" href="/about/calendar/fundraising">Fundraising events</Menu.Item>
              <Menu.Item component="a" href="/about/calendar/clinics">Clinics</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Anchor 
                component="button"
                underline="never" 
                c="dark" 
                fw={500} 
                size="md"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Adopt <IconChevronDown size={16} />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a" href="/adopt/how-to">How to adopt</Menu.Item>
              <Menu.Item component="a" href="/adopt/application">Adoption application</Menu.Item>
              <Menu.Item component="a" href="/adopt/pets">Pets available</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Anchor 
            href="/lost-found" 
            underline="never" 
            c="dark" 
            fw={500} 
            size="md"
            style={linkStyle}
            styles={hoverStyle}
          >
            Lost/Found
          </Anchor>

          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Anchor 
                component="button"
                underline="never" 
                c="dark" 
                fw={500} 
                size="md"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Get Involved <IconChevronDown size={16} />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a" href="/get-involved/donation">Donation</Menu.Item>
              <Menu.Item component="a" href="/get-involved/volunteering">Volunteering</Menu.Item>
              <Menu.Item component="a" href="/get-involved/fostering">Fostering</Menu.Item>
              <Menu.Item component="a" href="/get-involved/fundraisers">Fundraisers</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Anchor 
                component="button"
                underline="never" 
                c="dark" 
                fw={500} 
                size="md"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Services <IconChevronDown size={16} />
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item component="a" href="/services/euthanasia">Euthanasia</Menu.Item>
              <Menu.Item component="a" href="/services/clinics">Clinics</Menu.Item>
              <Menu.Item component="a" href="/services/surrender">Pet surrender</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Stack>
    </header>
  )
}