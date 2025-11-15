import { Box } from "@mantine/core";
import BlogFeature from "../components/BlogFeature";
import { posts } from "../data/blog";

export default function BlogPage() {
  return (
    <Box p="xl">
      {posts.map(p => (
        <BlogFeature key={p.id} post={p}/>
      ))}
    </Box>
  )
}