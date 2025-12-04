import React, { useState } from 'react';
import type { Pet } from '../../types/Pet';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group, Stack, Grid } from '@mantine/core';

interface AnimalCardProps {
  animal: Pet;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const nextPhoto = (): void => {
    setCurrentPhotoIndex((prev) => 
      prev === animal.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = (): void => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? animal.photos.length - 1 : prev - 1
    );
  };

  return (
    <Card shadow="md" padding="lg" radius="md" withBorder style={{ maxWidth: 400 }} onClick={() => navigate("/adopt/application")}>
      <Card.Section style={{ position: 'relative' }}>
        <Image
          src={animal.photos[currentPhotoIndex]}
          height={300}
          alt={animal.name}
        />
        
        {animal.photos.length > 1 && (
          <>
            <Button
              onClick={prevPhoto}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.8
              }}
              size="xs"
              variant="filled"
              color="dark"
            >
              ←
            </Button>
            <Button
              onClick={nextPhoto}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.8
              }}
              size="xs"
              variant="filled"
              color="dark"
            >
              →
            </Button>
            <Group
              gap={5}
              style={{
                position: 'absolute',
                bottom: 10,
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {animal.photos.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentPhotoIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentPhotoIndex(index)}
                />
              ))}
            </Group>
          </>
        )}
      </Card.Section>

      <Stack gap="md" mt="md">
        <Group justify="space-between" align="flex-start">
          <div>
            <Text size="xl" fw={700}>{animal.name}</Text>
            <Text size="sm" c="dimmed">{animal.breed}</Text>
          </div>
          <Badge color="blue" variant="light" size="lg">
            {animal.species}
          </Badge>
        </Group>

        <Grid gutter="xs">
          <Grid.Col span={6}>
            <Text size="xs" c="dimmed">Age</Text>
            <Text size="sm" fw={500}>{animal.age} years</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xs" c="dimmed">Sex</Text>
            <Text size="sm" fw={500} style={{ textTransform: 'capitalize' }}>
              {animal.sex}
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xs" c="dimmed">Weight</Text>
            <Text size="sm" fw={500}>{animal.weight} lbs</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xs" c="dimmed">Intake Date</Text>
            <Text size="sm" fw={500}>{formatDate(animal.intakeDate)}</Text>
          </Grid.Col>
        </Grid>

        <Text size="sm" style={{ lineHeight: 1.6 }} lineClamp={7}>
          {animal.description}
        </Text>

        <Group justify="space-between" align="center">
          <div>
            <Text size="xs" c="dimmed">Adoption Fee</Text>
            <Text size="lg" fw={700} c={animal.adoptionFee === 0 ? "green" : "blue"}>
              {animal.adoptionFee === undefined ? "Call for Details" : animal.adoptionFee === 0 ? "FREE - Sponsored!" : `$${animal.adoptionFee}`}
            </Text>
          </div>
        </Group>

        <Button fullWidth variant="filled" color="blue" size="md">
          Adopt {animal.name}
        </Button>
      </Stack>
    </Card>
  );
};

export default AnimalCard;
