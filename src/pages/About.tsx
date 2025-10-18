import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 dark:bg-gray-900">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about connecting people with their perfect vehicle. With over 15 years of experience in the automotive industry, we've built our reputation on trust, quality, and exceptional customer service.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-orange-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide the highest quality vehicles and exceptional customer service, making car buying an enjoyable and transparent experience for everyone.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-orange-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted and customer-focused automotive dealership, setting new standards for excellence in the industry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Customer First",
                description: "Your satisfaction is our top priority",
              },
              {
                icon: Award,
                title: "Quality",
                description: "Only the finest vehicles in our inventory",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Honest and transparent in all dealings",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Committed to exceeding expectations",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-400/10 mb-4">
                  <value.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-orange-400 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "15+", label: "Years in Business" },
              { number: "5000+", label: "Happy Customers" },
              { number: "500+", label: "Cars Sold Annually" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
