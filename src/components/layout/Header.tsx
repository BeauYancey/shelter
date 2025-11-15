import { Title, Group, Menu, Anchor } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

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
    <>
      <header style={{ borderBottom: '1px solid #e9ecef' }}>
        <div style={{ 
          backgroundColor: '#605cac', 
          padding: '1.5rem',
          width: '100%'
        }}>
          <Title order={1} ta="center" size="2rem" c="var(--mantine-color-white)">ANIMAL SHELTER</Title>
        </div>
      </header>
        
      <nav style={{ position: "sticky", top: 0, borderBottom: "1px solid #e9ecef", zIndex: 100 }}>
        <Group justify="space-evenly" style={{ padding: '0.5rem 3rem', backgroundColor: '#fff' }}>
          <Anchor 
            component={Link}
            to="/" 
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
              <Menu.Item component={Link} to="/about/blog">Blog</Menu.Item>
              <Menu.Item component={Link} to="/about/calendar">Calendar</Menu.Item>
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
              <Menu.Item component={Link} to="/adopt/how-to">How to adopt</Menu.Item>
              <Menu.Item component={Link} to="/adopt/application">Adoption application</Menu.Item>
              <Menu.Item component={Link} to="/adopt/pets">Pets available</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Anchor 
            component={Link}
            to="/lost-found" 
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
              <Menu.Item component={Link} to="/get-involved/donation">Donation</Menu.Item>
              <Menu.Item component={Link} to="/get-involved/volunteering">Volunteering</Menu.Item>
              <Menu.Item component={Link} to="/get-involved/fostering">Fostering</Menu.Item>
              <Menu.Item component={Link} to="/get-involved/fundraisers">Fundraisers</Menu.Item>
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
              <Menu.Item component={Link} to="/services/euthanasia">Euthanasia</Menu.Item>
              <Menu.Item component={Link} to="/services/clinics">Clinics</Menu.Item>
              <Menu.Item component={Link} to="/services/surrender">Pet surrender</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </nav>
    </>
  )
}