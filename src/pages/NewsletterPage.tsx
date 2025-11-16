import { Stack, TextInput, Title, Button } from "@mantine/core";

export default function NewsletterPage() {
  return (
    <Stack p="xl" w="100%">
      <Title order={1}>SUVAS Newsletter</Title>

      <Stack w="100%">
        <Title order={2}>November 2025 Issue</Title>
        <embed src="https://www.suvas.org/_files/ugd/18ed8a_8ba38edd44984bdba26862b99215d97a.pdf" style={{width: "100%", height: "75vh"}} />
      </Stack>

      <Stack gap="sm">
        <Title order={2}>Subscribe</Title>
        <Stack gap={8}>
          <TextInput placeholder="Enter your email..." w="fit-content" miw="24rem" />
          <Button w="fit-content">Submit</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}