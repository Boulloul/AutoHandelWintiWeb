import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard";
import { Search, Shield, DollarSign, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-cars.jpg";
import { cars } from "@/lib/cars";

const Home = () => {
  const navigate = useNavigate();
  // Take only the first 3 cars for featured section
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70 z-10 dark:from-black dark:via-black/70 dark:to-black/70" />
        <img
          src={heroImage}
          alt="Luxury car showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in dark:text-white">
            Find Your Dream Car
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in dark:text-white">
            Browse our premium selection of luxury vehicles and find the perfect match for your lifestyle
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in ">
            <Button
              className="bg-orange-500 hover:bg-orange-600"
              variant="default"
              size="lg"
              onClick={() => navigate('/cars')}
            >
              Browse Inventory
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Wide Selection", description: "Browse hundreds of premium vehicles" },
              { icon: Shield, title: "Certified Quality", description: "All cars thoroughly inspected" },
              { icon: DollarSign, title: "Best Prices", description: "Competitive pricing guaranteed" },
              { icon: Award, title: "Expert Service", description: "Professional sales team" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-xl text-muted-foreground">Discover our handpicked selection of premium cars</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                images={car.images}
                title={car.title}
                price={car.price}
                year={car.year}
                mileage={car.mileage}
                fuelType={car.fuelType}
                condition={car.condition}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/cars')}
            >
              View All Inventory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
