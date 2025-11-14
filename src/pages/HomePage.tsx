import { Box, Stack, Title, Text, Group, Image, Grid, Space, Center, Button } from "@mantine/core";
import Calendar from "../components/calendar/Calendar";
import BlogFeature from "../components/BlogFeature";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box p="xl">
      {/* About us */}
      <Grid gutter="lg" mb="lg">
        <Grid.Col span={{base: 12, md: 5}} order={{base: 2, md: 1}}>
          <Group w="100%" justify="center">
            <Image 
              src="https://static.wixstatic.com/media/18ed8a_a4668a12c70d4db6a152e540f4216ad0~mv2.jpg/v1/fill/w_720,h_437,al_c,lg_1,q_80,enc_avif,quality_auto/18ed8a_a4668a12c70d4db6a152e540f4216ad0~mv2.jpg" 
              w="100%"
              maw="40rem"
              bdrs="sm"
              alt="Shelter front doors"
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={{base: 12, md: 7}} order={{base: 1, md: 2}}>
          <Stack>
            <Title order={1}>Get to know SUVAS</Title>
            <Text>
              At South Utah Valley Animal Shelter, we proudly serve the animals and residents of southern Utah County including Elk Ridge, 
              Mapleton, Payson, Provo, Salem, Santaquin, Spanish Fork, Springville, and Woodland Hills. Our primary goal is to reunite lost 
              pets with their families. For animals that are not reclaimed, we work tirelessly to place them in caring, permanent homes through 
              our adoption program and by collaborating with trusted local rescue groups. Every animal deserves compassion, and we're here to 
              give them that.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Calendar */}
      <Title order={1}>What's going on?</Title>
      <Calendar />
      <Space h="lg" />

      {/* Featured blog post */}
      <Title order={1}>What we're saying</Title>
      <BlogFeature />
      <Center w="100%">
        <Button onClick={() => navigate("/blog")}>Read More Blog Posts</Button>
      </Center>
      
    </Box>
  );
}