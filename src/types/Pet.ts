export interface Pet {
  id: number;
  name?: string; // No name may be given for lost/found pets
  species: "dog" | "cat" | "bird" | "rabbit" | "other";
  breed: string;
  age?: number; // Years -- no age means unknown
  sex: "male" | "female";
  weight: number; // Pounds
  intakeDate: Date;
  description?: string;
  adoptionFee?: number; // Dollars -- no fee means call the shelter for details 
  photos: string[];
}