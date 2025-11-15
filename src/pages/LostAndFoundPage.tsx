import { Container, Grid, Title, Text, Select, MultiSelect, Paper, Group, Button, Badge } from "@mantine/core";
import { useState, useMemo } from "react";
import AnimalCard from "../components/animal/AnimalCard";
import { lostFoundPets } from "../data/pets";

const LostAndFoundPage = () => {
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState<string | null>(null);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [ageFilter, setAgeFilter] = useState<string[]>([]);

  // Calculate days since found
  const getDaysSinceFound = (intakeDate: Date): number => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - intakeDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Categorize pet size based on weight
  const getPetSize = (weight: number): string => {
    if (weight < 25) return "small";
    if (weight < 60) return "medium";
    return "large";
  };

  // Categorize pet age
  const getAgeCategory = (age: number | undefined): string => {
    if (!age) return "unknown";
    if (age < 2) return "young";
    if (age < 7) return "adult";
    return "senior";
  };

  // Get unique species for filter
  const speciesOptions = useMemo(() => {
    const species = Array.from(new Set(lostFoundPets.map(pet => pet.species)));
    return [
      { value: "all", label: "All Animals" },
      ...species.map(s => ({ value: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))
    ];
  }, []);

  // Filter pets
  const filteredPets = useMemo(() => {
    return lostFoundPets.filter((pet) => {
      // Species filter
      if (speciesFilter && speciesFilter !== "all" && pet.species !== speciesFilter) {
        return false;
      }

      // Time filter
      if (timeFilter) {
        const days = getDaysSinceFound(pet.intakeDate);
        if (timeFilter === "recent" && days > 7) return false;
        if (timeFilter === "week" && (days <= 7 || days > 30)) return false;
        if (timeFilter === "month" && days <= 30) return false;
      }

      // Size filter
      if (sizeFilter.length > 0 && pet.weight) {
        const petSize = getPetSize(pet.weight);
        if (!sizeFilter.includes(petSize)) return false;
      }

      // Age filter
      if (ageFilter.length > 0) {
        const petAge = getAgeCategory(pet.age);
        if (!ageFilter.includes(petAge)) return false;
      }

      return true;
    });
  }, [speciesFilter, timeFilter, sizeFilter, ageFilter]);

  const clearFilters = () => {
    setSpeciesFilter(null);
    setTimeFilter(null);
    setSizeFilter([]);
    setAgeFilter([]);
  };

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        Lost & Found Pets
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        These pets were found and are waiting to be reunited with their families. 
        If you recognize any of these animals, please contact us immediately.
      </Text>

      <Paper shadow="sm" p="md" mb="xl" withBorder bg="orange.0">
        <Group gap="md" align="center">
          <Badge size="lg" color="orange" variant="filled">Important</Badge>
          <div>
            <Text fw={600}>Lost or found a pet?</Text>
            <Text size="sm">Call us at (555) 123-4567 or visit the shelter immediately. Time is critical!</Text>
          </div>
        </Group>
      </Paper>

      <Paper shadow="sm" p="md" mb="xl" withBorder>
        <Group mb="md" align="flex-start">
          <Text size="lg" fw={600}>Filters</Text>
          <Button variant="subtle" size="xs" onClick={clearFilters}>
            Clear All
          </Button>
        </Group>
        
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Select
              label="Animal Type"
              placeholder="Select type"
              data={speciesOptions}
              value={speciesFilter}
              onChange={setSpeciesFilter}
              clearable
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Select
              label="Time Since Found"
              placeholder="Select timeframe"
              data={[
                { value: "recent", label: "Last 7 days" },
                { value: "week", label: "7-30 days ago" },
                { value: "month", label: "Over 30 days ago" }
              ]}
              value={timeFilter}
              onChange={setTimeFilter}
              clearable
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <MultiSelect
              label="Size"
              placeholder="Select sizes"
              data={[
                { value: "small", label: "Small (Under 25 lbs)" },
                { value: "medium", label: "Medium (25-60 lbs)" },
                { value: "large", label: "Large (60+ lbs)" }
              ]}
              value={sizeFilter}
              onChange={setSizeFilter}
              clearable
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <MultiSelect
              label="Estimated Age"
              placeholder="Select ages"
              data={[
                { value: "young", label: "Young (Under 2 years)" },
                { value: "adult", label: "Adult (2-7 years)" },
                { value: "senior", label: "Senior (7+ years)" },
                { value: "unknown", label: "Unknown" }
              ]}
              value={ageFilter}
              onChange={setAgeFilter}
              clearable
            />
          </Grid.Col>
        </Grid>

        <Text size="sm" c="dimmed" mt="md">
          Showing {filteredPets.length} of {lostFoundPets.length} pets
        </Text>
      </Paper>

      {filteredPets.length === 0 ? (
        <Paper p="xl" withBorder>
          <Text size="lg" ta="center" c="dimmed">
            No pets match your filters. Try adjusting your search criteria.
          </Text>
        </Paper>
      ) : (
        <Grid gutter="lg">
          {filteredPets.map((pet) => (
            <Grid.Col key={pet.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <AnimalCard animal={pet} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LostAndFoundPage;