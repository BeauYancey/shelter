import { Container, Title, Text, Paper, TextInput, Textarea, Select, Radio, Group, Button, Stack, Checkbox, Grid } from "@mantine/core";
import { useState } from "react";

const AdoptionApplicationPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Pet Information
    petName: "",
    petId: "",
    
    // Housing Information
    housingType: "",
    ownOrRent: "",
    landlordName: "",
    landlordPhone: "",
    yardType: "",
    
    // Household Information
    householdMembers: "",
    hasChildren: "",
    childrenAges: "",
    hasOtherPets: "",
    otherPetsDetails: "",
    
    // Experience & Lifestyle
    petExperience: "",
    dailySchedule: "",
    exercisePlan: "",
    vacationPlan: "",
    
    // Agreement
    agreementChecked: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! Our team will contact you within 24-48 hours.");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Adoption Application
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Please complete this application after meeting your potential new family member. 
        All information will be kept confidential and used only for adoption screening purposes.
      </Text>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Title order={2} size="h3" mb="md">Personal Information</Title>
          
          <Stack gap="md">
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="First Name"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Last Name"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </Grid.Col>
            </Grid>

            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Email"
                  placeholder="john.doe@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="Phone Number"
                  placeholder="(555) 123-4567"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </Grid.Col>
            </Grid>

            <TextInput
              label="Street Address"
              placeholder="123 Main Street"
              required
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />

            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  label="City"
                  placeholder="Springfield"
                  required
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 3 }}>
                <TextInput
                  label="State"
                  placeholder="IL"
                  required
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 3 }}>
                <TextInput
                  label="Zip Code"
                  placeholder="62701"
                  required
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                />
              </Grid.Col>
            </Grid>
          </Stack>
        </Paper>

        {/* Pet Information */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Title order={2} size="h3" mb="md">Pet Information</Title>
          
          <Stack gap="md">
            <TextInput
              label="Pet Name"
              placeholder="e.g., Crash"
              required
              value={formData.petName}
              onChange={(e) => handleChange("petName", e.target.value)}
              description="The name of the pet you wish to adopt"
            />
            <TextInput
              label="Pet ID (if known)"
              placeholder="e.g., 89553"
              value={formData.petId}
              onChange={(e) => handleChange("petId", e.target.value)}
              description="Found on the pet's profile card"
            />
          </Stack>
        </Paper>

        {/* Housing Information */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Title order={2} size="h3" mb="md">Housing Information</Title>
          
          <Stack gap="md">
            <Select
              label="Type of Residence"
              placeholder="Select one"
              required
              data={[
                { value: "house", label: "House" },
                { value: "apartment", label: "Apartment" },
                { value: "condo", label: "Condo" },
                { value: "townhouse", label: "Townhouse" },
                { value: "other", label: "Other" }
              ]}
              value={formData.housingType}
              onChange={(value) => handleChange("housingType", value || "")}
            />

            <Radio.Group
              label="Do you own or rent?"
              required
              value={formData.ownOrRent}
              onChange={(value) => handleChange("ownOrRent", value)}
            >
              <Group mt="xs">
                <Radio value="own" label="Own" />
                <Radio value="rent" label="Rent" />
              </Group>
            </Radio.Group>

            {formData.ownOrRent === "rent" && (
              <>
                <TextInput
                  label="Landlord Name"
                  placeholder="Landlord's full name"
                  required
                  value={formData.landlordName}
                  onChange={(e) => handleChange("landlordName", e.target.value)}
                />
                <TextInput
                  label="Landlord Phone Number"
                  placeholder="(555) 123-4567"
                  required
                  value={formData.landlordPhone}
                  onChange={(e) => handleChange("landlordPhone", e.target.value)}
                  description="We will contact your landlord to verify pet permission"
                />
              </>
            )}

            <Select
              label="Yard Type"
              placeholder="Select one"
              required
              data={[
                { value: "fenced", label: "Fenced Yard" },
                { value: "unfenced", label: "Unfenced Yard" },
                { value: "no-yard", label: "No Yard" },
                { value: "shared", label: "Shared Yard" }
              ]}
              value={formData.yardType}
              onChange={(value) => handleChange("yardType", value || "")}
            />
          </Stack>
        </Paper>

        {/* Household Information */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Title order={2} size="h3" mb="md">Household Information</Title>
          
          <Stack gap="md">
            <TextInput
              label="Number of People in Household"
              placeholder="e.g., 4"
              type="number"
              required
              value={formData.householdMembers}
              onChange={(e) => handleChange("householdMembers", e.target.value)}
            />

            <Radio.Group
              label="Are there children in the home?"
              required
              value={formData.hasChildren}
              onChange={(value) => handleChange("hasChildren", value)}
            >
              <Group mt="xs">
                <Radio value="yes" label="Yes" />
                <Radio value="no" label="No" />
              </Group>
            </Radio.Group>

            {formData.hasChildren === "yes" && (
              <TextInput
                label="Ages of Children"
                placeholder="e.g., 5, 8, 12"
                required
                value={formData.childrenAges}
                onChange={(e) => handleChange("childrenAges", e.target.value)}
              />
            )}

            <Radio.Group
              label="Do you currently have other pets?"
              required
              value={formData.hasOtherPets}
              onChange={(value) => handleChange("hasOtherPets", value)}
            >
              <Group mt="xs">
                <Radio value="yes" label="Yes" />
                <Radio value="no" label="No" />
              </Group>
            </Radio.Group>

            {formData.hasOtherPets === "yes" && (
              <Textarea
                label="Please describe your current pets"
                placeholder="Include species, breed, age, and temperament"
                required
                minRows={3}
                value={formData.otherPetsDetails}
                onChange={(e) => handleChange("otherPetsDetails", e.target.value)}
              />
            )}
          </Stack>
        </Paper>

        {/* Experience & Lifestyle */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Title order={2} size="h3" mb="md">Experience & Lifestyle</Title>
          
          <Stack gap="md">
            <Textarea
              label="Previous Pet Experience"
              placeholder="Describe your experience with pets (types, how long, training, etc.)"
              required
              minRows={3}
              value={formData.petExperience}
              onChange={(e) => handleChange("petExperience", e.target.value)}
            />

            <Textarea
              label="Daily Schedule"
              placeholder="Describe your typical daily routine and how much time you can dedicate to a pet"
              required
              minRows={3}
              value={formData.dailySchedule}
              onChange={(e) => handleChange("dailySchedule", e.target.value)}
            />

            <Textarea
              label="Exercise Plan"
              placeholder="How do you plan to exercise and engage your new pet?"
              required
              minRows={2}
              value={formData.exercisePlan}
              onChange={(e) => handleChange("exercisePlan", e.target.value)}
            />

            <Textarea
              label="Vacation Plans"
              placeholder="What arrangements will you make for your pet when you travel?"
              required
              minRows={2}
              value={formData.vacationPlan}
              onChange={(e) => handleChange("vacationPlan", e.target.value)}
            />
          </Stack>
        </Paper>

        {/* Agreement */}
        <Paper shadow="sm" p="xl" mb="lg" withBorder>
          <Stack gap="md">
            <Checkbox
              label="I understand that this application does not guarantee adoption and that the shelter reserves the right to deny any application. I certify that all information provided is true and accurate."
              required
              checked={formData.agreementChecked}
              onChange={(e) => handleChange("agreementChecked", e.currentTarget.checked)}
            />

            <Text size="sm" c="dimmed">
              By submitting this application, you agree to a home visit and reference checks. 
              Our adoption team will review your application and contact you within 24-48 hours.
            </Text>
          </Stack>
        </Paper>

        {/* Submit Button */}
        <Group justify="center">
          <Button type="submit" size="lg" disabled={!formData.agreementChecked}>
            Submit Application
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default AdoptionApplicationPage;