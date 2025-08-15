// src/data/servicesData.js

// Import images
import passengerImg from "../assets/images/services/s1.jpg";
import goodsImg from "../assets/images/services/s2.jpg";
import hospitalImg from "../assets/images/services/s3.jpg";
import hydraulicImg from "../assets/images/services/s4.jpg";
import homeImg from "../assets/images/services/s5.jpg";
import mrlImg from "../assets/images/services/s6.jpg";
import capsuleImg from "../assets/images/services/s7.jpg";
import maintenanceImg from "../assets/images/services/s8.jpg";
import modernizationImg from "../assets/images/services/s9.jpg";

const servicesData = [
  {
    id: "passenger-elevators",
    title: "Passenger Elevators",
    image: passengerImg,
    shortDescription: "Smooth and safe transport for people in buildings.",
    longDescription:
      "Passenger elevators are designed for the convenient and efficient transport of individuals within residential, commercial, and public buildings. Built for safety, comfort, and reliability, these elevators come in a variety of cabin sizes and interior finishes to match the architecture of the building.",
    advantages: [
      "High safety standards",
      "Customizable interiors",
      "Energy-efficient operation",
      "Quiet and smooth ride"
    ],
    pricing: {
      startingFrom: 350000,
      currency: "INR"
    },
    rating: 4.7
  },
  {
    id: "goods-freight-elevators",
    title: "Goods & Freight Elevators",
    image: goodsImg,
    shortDescription: "Heavy-duty lifts for goods and industrial loads.",
    longDescription:
      "Goods and freight elevators are designed to carry heavy loads efficiently and safely. Ideal for warehouses, factories, and storage facilities, these elevators can handle large volumes and weights without compromising performance.",
    advantages: [
      "High load capacity",
      "Durable and rugged design",
      "Smooth operation with heavy loads",
      "Minimal downtime"
    ],
    pricing: {
      startingFrom: 550000,
      currency: "INR"
    },
    rating: 4.8
  },
  {
    id: "hospital-elevators",
    title: "Hospital Elevators",
    image: hospitalImg,
    shortDescription: "Specialized lifts for patient and medical transport.",
    longDescription:
      "Hospital elevators are designed for patient comfort, reliability, and hygiene. Equipped to accommodate stretchers, wheelchairs, and medical equipment, they ensure smooth and safe movement of patients and healthcare staff.",
    advantages: [
      "Spacious cabins",
      "Smooth acceleration and braking",
      "Antibacterial finishes",
      "Silent operation"
    ],
    pricing: {
      startingFrom: 450000,
      currency: "INR"
    },
    rating: 4.9
  },
  {
    id: "hydraulic-elevators",
    title: "Hydraulic Elevators",
    image: hydraulicImg,
    shortDescription: "Reliable lifts powered by hydraulic systems.",
    longDescription:
      "Hydraulic elevators are ideal for low to mid-rise buildings, offering a cost-effective and smooth lifting solution. They are known for their strength, safety, and ability to operate even in buildings without deep shafts.",
    advantages: [
      "Cost-effective",
      "No overhead machinery room needed",
      "Smooth and quiet ride",
      "Easy maintenance"
    ],
    pricing: {
      startingFrom: 300000,
      currency: "INR"
    },
    rating: 4.6
  },
  {
    id: "home-elevators",
    title: "Home Elevators",
    image: homeImg,
    shortDescription: "Compact lifts for modern homes.",
    longDescription:
      "Home elevators add convenience, luxury, and accessibility to residences. Compact in design yet highly functional, they are perfect for multi-storey homes and can be customized to match your interior style.",
    advantages: [
      "Space-saving design",
      "Custom finishes available",
      "Energy-efficient operation",
      "Increased property value"
    ],
    pricing: {
      startingFrom: 250000,
      currency: "INR"
    },
    rating: 4.7
  },
  {
    id: "mrl-elevators",
    title: "MRL (Machine Room-Less) Elevators",
    image: mrlImg,
    shortDescription: "Efficient lifts without a machine room.",
    longDescription:
      "MRL elevators use advanced technology to operate without the need for a dedicated machine room. They are energy-efficient, space-saving, and ideal for modern architectural designs.",
    advantages: [
      "No machine room required",
      "Energy-efficient",
      "Sleek and modern design",
      "Lower construction costs"
    ],
    pricing: {
      startingFrom: 320000,
      currency: "INR"
    },
    rating: 4.8
  },
  {
    id: "capsule-elevators",
    title: "Capsule Elevators",
    image: capsuleImg,
    shortDescription: "Stylish glass lifts for aesthetic appeal.",
    longDescription:
      "Capsule elevators are designed with panoramic glass walls, providing a luxurious and stylish way to travel between floors. Perfect for hotels, malls, and high-end buildings, they combine performance with stunning visuals.",
    advantages: [
      "Panoramic view",
      "Luxury interiors",
      "Smooth and quiet ride",
      "Enhances building aesthetics"
    ],
    pricing: {
      startingFrom: 600000,
      currency: "INR"
    },
    rating: 4.9
  },
  {
    id: "elevator-maintenance",
    title: "Elevator Maintenance",
    image: maintenanceImg,
    shortDescription: "Keep elevators running safely and efficiently.",
    longDescription:
      "Regular elevator maintenance ensures safety, performance, and compliance with regulations. Our team of skilled technicians provides timely inspections, repairs, and upgrades.",
    advantages: [
      "Increased lifespan of elevators",
      "Prevents breakdowns",
      "Ensures safety compliance",
      "Minimizes downtime"
    ],
    pricing: {
      startingFrom: 5000,
      currency: "INR"
    },
    rating: 4.8
  },
  {
    id: "elevator-modernization",
    title: "Elevator Modernization",
    image: modernizationImg,
    shortDescription: "Upgrade old lifts with modern technology.",
    longDescription:
      "Elevator modernization improves performance, safety, and aesthetics of outdated systems. We replace outdated components with advanced technology for better energy efficiency, reliability, and comfort.",
    advantages: [
      "Improved safety",
      "Better energy efficiency",
      "Enhanced aesthetics",
      "Smooth operation"
    ],
    pricing: {
      startingFrom: 150000,
      currency: "INR"
    },
    rating: 4.9
  }
];

export default servicesData;
