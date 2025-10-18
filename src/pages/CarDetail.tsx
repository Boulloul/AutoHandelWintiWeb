import {  useParams, useNavigate } from "react-router-dom";
import { cars } from "@/lib/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Gauge, Fuel, Info } from "lucide-react";
import { useState } from "react";

export default function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Trouver la voiture directement depuis l'ID
  const car = cars.find((c) => c.id === id);
  const [activeIndex, setActiveIndex] = useState(0);

  // Vérifier si la voiture existe
  if (!car || !car.images || car.images.length === 0) {
    return (
      <div className="p-8">
        <Button variant="ghost" onClick={() => navigate("/cars")}>
          <ArrowLeft className="w-4 h-4 mr-2" />Back to Cars
        </Button>
        <div className="mt-6 text-xl">Car not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-3 px-4 dark:bg-gray-900">
      <div className="">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/cars")}
          className="mb-6"
        >
          <ArrowLeft  />
          <span className="text-xl"> Back to Cars</span>
        </Button>

        <div className="bg-card rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-2/3">
              <div className="rounded-lg overflow-hidden mb-4 border border-border">
                <img 
                  src={car.images[activeIndex]} 
                  alt={car.title} 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {car.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {car.images.map((img: string, i: number) => (
                    <button
                      key={`thumb-${car.id}-${i}`}
                      onClick={() => setActiveIndex(i)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        i === activeIndex ? "border-amber-500" : "border-border"
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${car.title}-${i}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{car.title}</h1>
                {car.condition === "New" && (
                  <Badge className="bg-amber-500 text-white">New</Badge>
                )}
              </div>

              <p className="text-3xl font-extrabold text-amber-500 mt-4">
                {car.price}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span><strong>Year:</strong> {car.year}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gauge className="w-5 h-5" />
                  <span><strong>Mileage:</strong> {car.mileage}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Fuel className="w-5 h-5" />
                  <span><strong>Fuel Type:</strong> {car.fuelType}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Info className="w-5 h-5" />
                  <span><strong>Info:</strong> Other Informations</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" variant="default">
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}