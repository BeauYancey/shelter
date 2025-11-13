export interface User {
  id: number;
  username: string;
  role: "admin" | "staff" | "volunteer" | "adopter";  
}