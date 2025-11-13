import dayjs from "dayjs";
import type { Event } from "../types/Event";

export const events: Event[] = [
  {
    id: "6372d9b5-f27b-4cd5-a28b-d996185e2f21",
    name: "Veterans Day",
    type: "closure",
    date: dayjs("2025-11-11")
  },
  {
    id: "397dbe02-93ba-49c3-9dff-3110f343f033",
    name: "Provo Licensing Clinic",
    type: "clinic",
    date: dayjs("2025-11-19"),
    startTime: { hours: 10, minutes: 0 },
    endTime: { hours: 15, minutes: 30 },
    location: "Provo City Center",
  },
  {
    id: "b6dbed64-a7f0-47d8-ba99-db4d824ef0e6",
    name: "Paws for a Cause 5K",
    type: "fundraiser",
    date: dayjs("2025-11-24"),
    startTime: { hours: 8, minutes: 0 },
    endTime: { hours: 12, minutes: 0 },
    location: "Provo Canyon Trailhead",
    description: "Join us for a 5K fun run to raise funds for new dog and cat beds. Dogs welcome!",
    photo: "https://cdn10.phillymag.com/wp-content/uploads/2014/04/dog-jog2.jpg"
  },
  {
    id: "074aac39-6273-4102-85b1-a5bec5b67b6e",
    name: "Thanksgiving",
    type: "closure",
    date: dayjs("2025-11-27"),

  },
  {
    id: "21c2bcbf-c85c-4ebb-99e7-32ce3349cc0e",
    name: "Bark in the Park Picnic",
    type: "fundraiser",
    date: dayjs("2025-11-28"),
    startTime: { hours: 12, minutes: 0 },
    endTime: { hours: 14, minutes: 0 },
    location: "Springville Memorial Park",
    description: "A family-friendly picnic and raffle to benefit the shelter's medical fund. Bring your pets for games and treats!",
    photo: "https://worldanimalfoundation.org/wp-content/uploads/2025/07/7-Dog-Breeds-That-Guard-Picnic-Baskets-From-Stray-Dogs.jpg"
  },
  {
    id: "184a0293-7221-4f80-bcde-1fe4765d3699",
    name: "Winter Vaccination & Microchip Clinic",
    type: "clinic",
    date: dayjs("2025-12-02"),
    startTime: { hours: 9, minutes: 0 },
    endTime: { hours: 13, minutes: 0 },
    location: "Spanish Fork Shelter"
  },
  {
    id: "d27180cb-f256-4c35-a1a8-e7d98ca28a26",
    name: "Pet Portraits",
    type: "fundraiser",
    date: dayjs("2025-12-15"),
    startTime: { hours: 10, minutes: 0 },
    endTime: { hours: 15, minutes: 0 },
    description: "Local photographers offering professional pet portraits — all proceeds support the shelter's adoption programs.",
    location: "Shelter Lobby",
    photo: "https://crownandpaw.com/cdn/shop/files/Custom_Watercolor_Pet_Portrait_Crown_and_Paw_11_600x.jpg?v=1693994847"
  },
]