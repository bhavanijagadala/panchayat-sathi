import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText, Calendar, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Digital Governance for Rural India",
      description: "Connecting Panchayats with villagers through transparent digital communication",
      image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=1200&q=80",
    },
    {
      title: "Stay Updated with Latest Notices",
      description: "Access government schemes, announcements, and important information instantly",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    },
    {
      title: "Community Events & Meetings",
      description: "Participate in village development programs and social initiatives",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative">
      {/* Hero Carousel */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white animate-fadeIn">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <Link to="/notices">View Notices</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
                      <Link to="/events">Upcoming Events</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/notices">
            <div className="bg-card rounded-xl p-6 shadow-lg hover-lift cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Notices</h3>
              <p className="text-muted-foreground">Government schemes, announcements, and updates</p>
            </div>
          </Link>

          <Link to="/events">
            <div className="bg-card rounded-xl p-6 shadow-lg hover-lift cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p className="text-muted-foreground">Community meetings and village programs</p>
            </div>
          </Link>

          <Link to="/gallery">
            <div className="bg-card rounded-xl p-6 shadow-lg hover-lift cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gallery</h3>
              <p className="text-muted-foreground">Photos and videos from local events</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
