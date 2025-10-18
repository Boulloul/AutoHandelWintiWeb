import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 dark:bg-gray-900">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50 pt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Auto Drive<br />
                  Los Angeles, CA 90001<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 pt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-400" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sales: (555) 123-4567<br />
                  Service: (555) 123-4568
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 pt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-400" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@carsales.com<br />
                  support@carsales.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 pt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 pt-6">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Inquiry about..." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
