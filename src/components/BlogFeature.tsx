import { Paper, Grid, Stack, Group, Avatar, Title, Divider, Image, Text, Anchor, ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconHeart } from "@tabler/icons-react";

export default function BlogFeature() {
  return (
    <Paper shadow="xs" m="sm" bdrs="md" bd="1px solid lightgray" style={{overflow: "hidden"}}>
      <Grid>
        <Grid.Col span={{base: 12, md: 5}} visibleFrom="md">
          <Image 
            src="https://static.wixstatic.com/media/18ed8a_d3c199614a78436a8a004f4c378acc1d~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/18ed8a_d3c199614a78436a8a004f4c378acc1d~mv2.webp"
            w="100%"
            h="100%"
          />
        </Grid.Col>
        <Grid.Col span={{base: 12, md: 7}}>
          <Stack p="md" justify="space-between" h="100%">
            <Stack gap="xs">
              {/* Author profile */}
              <Group justify="space-between">
                <Group gap="sm">
                  <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocKW_r-NBkwx9bi7adXVem8Dm7kiI0NOo9DGp79p83vydTdqmA%3Ds96-c" size={48}/>
                  <Stack gap={0}>
                    <Text size="sm">Brooklyn Turner</Text>
                    <Text size="xs">Oct 15 - 4 min read</Text>
                  </Stack>
                </Group>
                <IconDotsVertical />
              </Group>
              {/* Title */}
              <Anchor>
                <Title order={3}>What to Expect When Adopting a Shelter Pet and Helping Them Feel at Home</Title>
              </Anchor>

              {/* Teaser */}
              <Text lineClamp={3}>
                Adopting a shelter pet can be one of the most rewarding experiences of your life. Not only do you gain a loyal companion, but you also provide a loving home to an animal in need. However, it is essential to recognize that this transition may be challenging for your new furry friend. Many shelter pets come with a history that is unknown. In this blog post, we will discuss what to expect after adopting a shelter pet, how long it may take for them to feel at home, and actionable steps you can take to help them show their true selves.
              </Text>
            </Stack>

            {/* Reactions */}
            <Stack>
              <Divider w="100%" />
              <Group justify="space-between">
                <Group gap="sm">
                  <Text size="sm">29 views</Text>
                  <Text size="sm">0 comments</Text>
                </Group>
                <Group gap="2">
                  <Text size="sm">2</Text>
                  <ActionIcon variant="transparent">
                    <IconHeart size={20} color="var(--mantine-color-purple-7)"/>
                  </ActionIcon>
                </Group>
              </Group>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}