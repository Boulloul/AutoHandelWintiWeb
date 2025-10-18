import { CarCard } from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { cars } from "@/lib/cars";

const Cars = () => {
  const allCars = cars;

  return (
    <div className="min-h-screen py-6 px-5 dark:bg-gray-900">
      <div className=" ">
        {/* Header */}
        {/* <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inventory</h1>
          <p className="text-xl text-muted-foreground">Browse our complete collection of premium vehicles</p>
        </div> */}

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search cars..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="used">Used</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-30k">Under $30,000</SelectItem>
                <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                <SelectItem value="50k+">Over $50,000</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="gasoline">Gasoline</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCars.map((car) => (
            <CarCard key={car.id} id={car.id} images={car.images} title={car.title} price={car.price} year={car.year} mileage={car.mileage} fuelType={car.fuelType} condition={car.condition} />
          ))}
        </div>

        {/* Results Info */}
        <div className="mt-12 text-center text-muted-foreground">
          Showing {allCars.length} vehicles
        </div>
      </div>
    </div>
  );
};

export default Cars;
