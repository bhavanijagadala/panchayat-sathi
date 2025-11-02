import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Award, Megaphone } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "2,500+", color: "text-primary" },
    { icon: Megaphone, label: "Notices Published", value: "350+", color: "text-secondary" },
    { icon: TrendingUp, label: "Events Conducted", value: "120+", color: "text-accent" },
    { icon: Award, label: "Villages Connected", value: "15", color: "text-primary" },
  ];

  const recentNotices = [
    {
      title: "New Employment Scheme Registration",
      category: "Employment",
      date: "March 20, 2024",
      excerpt: "Online registration now open for skill development program...",
    },
    {
      title: "Village Health Camp Announcement",
      category: "Health",
      date: "March 18, 2024",
      excerpt: "Free medical check-up camp on 25th March at Community Center...",
    },
    {
      title: "Agriculture Training Workshop",
      category: "Agriculture",
      date: "March 15, 2024",
      excerpt: "Learn modern farming techniques and organic farming methods...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <NewsTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <HeroSection />
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Impact at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card flex items-center justify-center shadow-md ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Notices */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recent Notices</h2>
              <Button variant="outline" asChild>
                <a href="/notices">View All</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentNotices.map((notice, index) => (
                <Card key={index} className="hover-lift cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {notice.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{notice.date}</span>
                    </div>
                    <CardTitle className="text-xl">{notice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{notice.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Digital Panchayat</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're bridging the information gap in rural India by digitizing Panchayat
                communications. Our multilingual, audio-visual platform ensures every villager
                stays informed about government schemes, events, and important announcements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through community surveys and pilot programs, we've designed an inclusive digital
                notice board system that serves both literate and non-literate audiences with
                equal effectiveness.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Get Involved</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
