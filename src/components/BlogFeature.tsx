import { Paper, Grid, Stack, Group, Avatar, Title, Divider, Image, Text, Anchor, ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../types/BlogPost";

interface BlogFeatureProps {
  post: BlogPost
  includePhoto?: boolean
}
export default function BlogFeature({ post, includePhoto = true }: BlogFeatureProps) {
  const [userLiked, setUserLiked] = useState(post.likedByUser);
  const [likes, setLikes] = useState(post.likes);

  const handleLikeButtonClick = () => {
    const diff = userLiked ? -1 : 1;
    setUserLiked(prev => !prev);
    setLikes(prev => prev + diff);
  }

  return (
    <Paper shadow="xs" m="sm" bdrs="md" bd="1px solid lightgray" style={{overflow: "hidden"}}>
      <Grid>
        {includePhoto &&
          <Grid.Col span={{base: 12, md: 5}} visibleFrom="md">
            <Image 
              src={post.photo}
              w="100%"
              h="20rem"
              // Image should be the same height as the text on the right
              // This is approximate, is there a better way to do this?
            />
          </Grid.Col>
        }
        <Grid.Col span={{base: 12, md: includePhoto ? 7 : 12}}>
          <Stack p="md" justify="space-between" h="100%">
            <Stack gap="xs">
              {/* Author profile */}
              <Group justify="space-between">
                <Group gap="sm">
                  <Avatar src={post.author.photo} size={48}/>
                  <Stack gap={0}>
                    <Text size="sm">{post.author.name}</Text>
                    <Text size="xs">{post.publishedDate.format("MMM D YYYY")} · {post.timeToRead} min read</Text>
                  </Stack>
                </Group>
                <IconDotsVertical />
              </Group>

              {/* Title */}
              <Anchor component={Link} to={`/about/blog/${post.id}`}>
                <Title order={3} lineClamp={2}>{post.title}</Title>
              </Anchor>

              {/* Teaser */}
              <Text lineClamp={3}>
                {post.content.split("\n\n")[0]}
              </Text>
            </Stack>

            {/* Reactions */}
            <Stack>
              <Divider w="100%" />
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
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}