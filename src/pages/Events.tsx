import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Village Health Camp",
      date: "March 25, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Community Health Center",
      attendees: 120,
      category: "Health",
      description: "Free medical check-up, blood pressure screening, and health consultation",
      status: "Registration Open",
    },
    {
      id: 2,
      title: "Organic Farming Workshop",
      date: "March 28, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Krishi Vigyan Kendra",
      attendees: 45,
      category: "Agriculture",
      description: "Learn sustainable farming practices and get free organic farming kit",
      status: "Registration Open",
    },
    {
      id: 3,
      title: "Gram Sabha Meeting",
      date: "April 2, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Panchayat Office",
      attendees: 200,
      category: "Governance",
      description: "Monthly village meeting to discuss development projects and budget allocation",
      status: "Upcoming",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Women's Self Help Group Workshop",
      date: "March 15, 2024",
      location: "Community Hall",
      attendees: 85,
      category: "Social Welfare",
    },
    {
      id: 5,
      title: "Digital Literacy Training",
      date: "March 10, 2024",
      location: "Government School",
      attendees: 60,
      category: "Education",
    },
    {
      id: 6,
      title: "Blood Donation Camp",
      date: "March 5, 2024",
      location: "Primary Health Center",
      attendees: 95,
      category: "Health",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Events & Meetings</h1>
            <p className="text-muted-foreground text-lg">
              Participate in community programs and village development activities
            </p>
          </div>

          {/* Calendar View Placeholder */}
          <div className="mb-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">March 2024</h2>
                <p className="text-muted-foreground">3 upcoming events this month</p>
              </div>
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                View Full Calendar
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge className="bg-secondary">{event.status}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{event.attendees} people registered</span>
                    </div>
                    <div className="flex gap-2">
                      <Button>
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover-lift">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{event.category}</Badge>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.attendees} attended</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Photos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
