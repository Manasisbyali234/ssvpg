export const pgInfo = {
  name: "SSV Stays - Blossom PG for Women",
  shortName: "SSV Stays",
  tagline: "Premium PG for Women in Bengaluru",
  address: "63, 1st Main, 1st Cross Road, Behind HDFC Bank, Byatarayanapura, Sahakar Nagar, Bengaluru, Karnataka 560092",
  phone: "093914 06506",
  phoneLink: "+919391406506",
  whatsapp: "https://wa.me/919391406506",
  email: "ssvstays@gmail.com",
  timing: "Open 9AM – 8PM, Monday to Saturday",
  gender: "Women Only",
  city: "Bengaluru",
  lat: 13.0609,
  lng: 77.5800,
};

import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";
import room9 from "../assets/room9.jpg";
import room10 from "../assets/room10.jpg";
import room11 from "../assets/room11.jpg";
import wash1 from "../assets/wash1.jpg";
import wash2 from "../assets/wash2.jpg";
import wash3 from "../assets/wash3.jpg";
import wash4 from "../assets/wash4.jpg";

export const roomTypes = [
  {
    id: "single",
    type: "Single Occupancy",
    price: 10000,
    image: room1,
    features: ["Private Room", "High-Speed WiFi", "Home Cooked Food", "Laundry Service", "AC", "Attached Washroom"],
  },
  {
    id: "double",
    type: "Double Sharing",
    price: 7000,
    image: room2,
    features: ["Shared Room (2 People)", "High-Speed WiFi", "Home Cooked Food", "Laundry Service", "AC", "Common Washroom"],
  },
  {
    id: "triple",
    type: "Triple Sharing",
    price: 5500,
    image: room3,
    features: ["Shared Room (3 People)", "High-Speed WiFi", "Home Cooked Food", "Laundry Service", "Fan/AC", "Common Washroom"],
  },
];

export const amenities = [
  { label: "High-Speed WiFi", icon: "wifi" },
  { label: "Home Cooked Food", icon: "food" },
  { label: "Air Conditioning", icon: "ac" },
  { label: "Laundry Service", icon: "laundry" },
  { label: "CCTV Surveillance", icon: "cctv" },
  { label: "Purified Drinking Water", icon: "water" },
  { label: "Power Backup", icon: "power" },
  { label: "Daily Housekeeping", icon: "housekeeping" },
  { label: "Separate Washrooms", icon: "washroom" },
  { label: "Visitor Restrictions", icon: "visitor" },
  { label: "Secure Entry", icon: "secure" },
  { label: "24/7 Support", icon: "support" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    review: "SSV Stays feels like a second home. The food is amazing and the staff is very caring. I feel completely safe here.",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    review: "Best PG in Sahakar Nagar! Clean rooms, great food, and very secure. Highly recommend to all working women.",
  },
  {
    id: 3,
    name: "Kavitha Nair",
    avatar: "https://i.pravatar.cc/100?img=9",
    rating: 4,
    review: "I've been staying here for 8 months. The location is perfect and the management is very responsive.",
  },
  {
    id: 4,
    name: "Sneha Patel",
    avatar: "https://i.pravatar.cc/100?img=16",
    rating: 5,
    review: "Wonderful experience! The rooms are well-maintained and the home food is just like mom's cooking.",
  },
  {
    id: 5,
    name: "Divya Menon",
    avatar: "https://i.pravatar.cc/100?img=20",
    rating: 5,
    review: "Very safe and comfortable. The CCTV and secure entry give a lot of peace of mind to my parents.",
  },
  {
    id: 6,
    name: "Ritu Singh",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 4,
    review: "Affordable pricing with great amenities. The WiFi is fast and the housekeeping is done daily.",
  },
];

export const galleryImages = [
  { id: 1, src: room1, alt: "Room View 1", category: "Rooms" },
  { id: 2, src: room2, alt: "Room View 2", category: "Rooms" },
  { id: 3, src: room3, alt: "Room View 3", category: "Rooms" },
  { id: 4, src: room4, alt: "Room View 4", category: "Rooms" },
  { id: 5, src: room5, alt: "Room View 5", category: "Rooms" },
  { id: 6, src: room6, alt: "Room View 6", category: "Rooms" },
  { id: 7, src: room7, alt: "Room View 7", category: "Rooms" },
  { id: 8, src: room8, alt: "Room View 8", category: "Rooms" },
  { id: 9, src: room9, alt: "Room View 9", category: "Rooms" },
  { id: 10, src: room10, alt: "Room View 10", category: "Rooms" },
  { id: 11, src: room11, alt: "Room View 11", category: "Rooms" },
  { id: 12, src: wash1, alt: "Washroom 1", category: "Washrooms" },
  { id: 13, src: wash2, alt: "Washroom 2", category: "Washrooms" },
  { id: 14, src: wash3, alt: "Washroom 3", category: "Washrooms" },
  { id: 15, src: wash4, alt: "Washroom 4", category: "Washrooms" },
];

export const houseRules = [
  "No male visitors allowed inside the premises",
  "Gates close at 10:00 PM — residents must be back by then",
  "No smoking or alcohol on the premises",
  "Maintain cleanliness in common areas",
  "No loud music or noise after 10:00 PM",
  "Guests must be registered at the reception",
  "Electricity and water to be used responsibly",
  "One month advance notice required before vacating",
  "ID proof mandatory at the time of admission",
  "Cooking in rooms is not permitted",
];
