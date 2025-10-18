import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gauge, Fuel } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  id: string;
  images: string[];
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuelType: string;
  condition?: "New" | "Used";
}

export function CarCard({
  id,
  images,
  title,
  price,
  year,
  mileage,
  fuelType,
  condition = "Used",
}: CarCardProps) {
  const navigate = useNavigate();
  const mainImage = images && images.length ? images[0] : "";

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
      <div className="relative overflow-hidden h-56">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {condition === "New" && (
          <Badge className="absolute top-3 right-4 bg-orange-400 text-white">New</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-2xl font-bold text-orange-400">{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{fuelType}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          variant="default"
          className="flex-1"
          onClick={() => navigate(`/cars/${id}`, { state: { car: { id, images, title, price, year, mileage, fuelType, condition } } })}
        >
          View Details
        </Button>
        <Button  variant={"accent"} className="flex-1 bg-accent text-primary dark:bg-white dark:text-black">Contact</Button>
      </CardFooter>
    </Card>
  );
}
