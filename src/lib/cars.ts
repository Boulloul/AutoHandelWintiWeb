
export interface Car {
  id: string;
  images: string[];
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuelType: string;
  condition?: "New" | "Used";
}

export const cars: Car[] = [
  {
    id: "1",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "Mercedes-Benz C300",
    price: "$45,000",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    condition: "New",
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "BMW M4 Competition",
    price: "$82,000",
    year: 2024,
    mileage: "5,000 km",
    fuelType: "Petrol",
    condition: "New",
  },
    {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "Audi A4",
    price: "$39,000",
    year: 2022,
    mileage: "20,000 km",
    fuelType: "Diesel",
    condition: "Used",
  },
    {
    id: "4",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "Tesla Model 3",
    price: "$35,000",
    year: 2021,
    mileage: "10,000 km",
    fuelType: "Electric",
    condition: "Used",
  },
    {
    id: "5",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "Ford Mustang",
    price: "$30,000",
    year: 2020,
    mileage: "25,000 km",
    fuelType: "Petrol",
    condition: "Used",
  },
    {
    id: "6",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    ],
    title: "Chevrolet Camaro",
    price: "$28,000",
    year: 2019,
    mileage: "30,000 km",
    fuelType: "Petrol",
    condition: "Used",
  }
];