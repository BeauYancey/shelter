import { useParams } from "react-router-dom";
import { posts } from "../data/blog";
import { Paper, Stack, Title, Text, Divider, Group, ActionIcon, SimpleGrid, Textarea, Skeleton, Image, Button } from "@mantine/core";
import { IconHeartFilled, IconHeart, IconBrandMeta, IconBrandX, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import { useState } from "react";
import BlogFeature from "../components/BlogFeature";
import NotFound from "./NotFound";

export default function BlogPost() {
  const {id} = useParams();
  const post = posts.find(p => p.id === id);
  if (!post) {
    return <NotFound />
  }

  const [likes, setLikes] = useState(post.likes ?? 0);
  const [userLiked, setUserLiked] = useState(post.likedByUser ?? false);

  const handleLikeButtonClick = () => {
    const diff = userLiked ? -1 : 1;
    setUserLiked(prev => !prev);
    setLikes(prev => prev + diff);
  }

  return (
    <Stack p="xl" align="center" w="100%">
      <Paper w="100%" maw="64rem" shadow="xs" bd="1px solid var(--mantine-color-gray-2)" bdrs="md" p="xl">
        <Image
          src={post.photo}
          w="100%"
          mah="20rem"
          mb="lg"
          bdrs="sm"
        />

        <Title order={1} mb="lg">{post.title}</Title>
        {post.content.split("\n\n").map((p, i) => (
          <Text key={i} mb="md">{p}</Text>
        ))}

        <Divider w="100%" mb="md"/>
        <Group>
          <ActionIcon variant="subtle">
            <IconBrandMeta />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconBrandX />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconLink />
          </ActionIcon>
        </Group>

        <Divider w="100%" my="md"/>
        <Group justify="space-between">
          <Group gap="sm">
            <Text size="sm">{post.views} views</Text>
            <Text size="sm">{post.comments} comments</Text>
          </Group>
          <Group gap="2">
            <Text size="sm">{likes}</Text>
            <ActionIcon variant="transparent" onClick={handleLikeButtonClick}>
              {userLiked
                ? <IconHeartFilled size={20} color="var(--mantine-color-purple-7)"/>
                : <IconHeart size={20} color="var(--mantine-color-purple-7)"/>
              }
            </ActionIcon>
          </Group>
        </Group>
      </Paper>

      <Stack gap="xs" w="100%" maw="64rem">
        <Title order={3}>Recent Posts</Title>
        <SimpleGrid cols={3}>
          {posts.filter(p => p.id != post.id).slice(0, 3).map(p => <BlogFeature post={p} includePhoto={false}/>)}
        </SimpleGrid>
      </Stack>

      <Stack w="100%" maw="64rem">
        <Title order={3}>Comments</Title>
        <Stack gap={8}>
          <Textarea w="100%" placeholder="Start typing..." autosize/>
          <Button w="fit-content">Submit</Button>
        </Stack>
        <Skeleton h="10rem" w="100%" bdrs="sm"/>
      </Stack>
      
    </Stack>
  )
}