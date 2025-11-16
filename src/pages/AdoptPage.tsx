import { Container, Grid, Title, Text, Select, MultiSelect, Paper, Group, Button } from "@mantine/core";
import { useState, useMemo } from "react";
import AnimalCard from "../components/animal/AnimalCard";
import { pets } from "../data/pets";

const AdoptPage = () => {
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const [shelterTimeFilter, setShelterTimeFilter] = useState<string | null>(null);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [ageFilter, setAgeFilter] = useState<string[]>([]);
  const [feeFilter, setFeeFilter] = useState<string | null>(null);

  // Calculate days in shelter
  const getDaysInShelter = (intakeDate: Date): number => {
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
  const getAgeCategory = (age: number): string => {
    if (age < 2) return "puppy/kitten";
    if (age < 7) return "adult";
    return "senior";
  };

  // Get unique species for filter
  const speciesOptions = useMemo(() => {
    const species = Array.from(new Set(pets.map(pet => pet.species)));
    return [
      { value: "all", label: "All Animals" },
      ...species.map(s => ({ value: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))
    ];
  }, []);

  // Filter pets
  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      // Species filter
      if (speciesFilter && speciesFilter !== "all" && pet.species !== speciesFilter) {
        return false;
      }

      // Shelter time filter
      if (shelterTimeFilter) {
        const days = getDaysInShelter(pet.intakeDate);
        if (shelterTimeFilter === "new" && days > 30) return false;
        if (shelterTimeFilter === "moderate" && (days <= 30 || days > 90)) return false;
        if (shelterTimeFilter === "long" && days <= 90) return false;
      }

      // Size filter
      if (sizeFilter.length > 0) {
        const petSize = getPetSize(pet.weight);
        if (!sizeFilter.includes(petSize)) return false;
      }

      // Age filter
      if (ageFilter.length > 0) {
        const petAge = getAgeCategory(pet.age!);
        if (!ageFilter.includes(petAge)) return false;
      }

      // Fee filter
      if (feeFilter) {
        const hasNoFee = pet.adoptionFee === null || pet.adoptionFee === undefined;
        if (feeFilter === "free" && pet.adoptionFee !== 0) return false;
        if (feeFilter === "low" && (pet.adoptionFee === 0 || pet.adoptionFee! > 50 || hasNoFee)) return false;
        if (feeFilter === "standard" && (pet.adoptionFee! <= 50 || hasNoFee)) return false;
        if (feeFilter === "call" && !hasNoFee) return false;
      }

      return true;
    });
  }, [speciesFilter, shelterTimeFilter, sizeFilter, ageFilter, feeFilter]);

  const clearFilters = () => {
    setSpeciesFilter(null);
    setShelterTimeFilter(null);
    setSizeFilter([]);
    setAgeFilter([]);
    setFeeFilter(null);
  };

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        Available Pets for Adoption
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Find your perfect companion! All pets are ready for their forever homes.
      </Text>

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
              label="Time in Shelter"
              placeholder="Select duration"
              data={[
                { value: "new", label: "New (Under 30 days)" },
                { value: "moderate", label: "Moderate (30-90 days)" },
                { value: "long", label: "Long-term (90+ days)" }
              ]}
              value={shelterTimeFilter}
              onChange={setShelterTimeFilter}
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
              label="Age"
              placeholder="Select ages"
              data={[
                { value: "puppy/kitten", label: "Puppy/Kitten (Under 2 years)" },
                { value: "adult", label: "Adult (2-7 years)" },
                { value: "senior", label: "Senior (7+ years)" }
              ]}
              value={ageFilter}
              onChange={setAgeFilter}
              clearable
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Select
              label="Adoption Fee"
              placeholder="Select fee range"
              data={[
                { value: "free", label: "Free (Sponsored)" },
                { value: "low", label: "Low ($1-$100)" },
                { value: "standard", label: "Standard ($100+)" }
              ]}
              value={feeFilter}
              onChange={setFeeFilter}
              clearable
            />
          </Grid.Col>
        </Grid>

        <Text size="sm" c="dimmed" mt="md">
          Showing {filteredPets.length} of {pets.length} pets
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

export default AdoptPage;