import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Volume2, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("photos");

  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51", title: "Village Health Camp 2024", category: "Health" },
    { id: 2, url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", title: "Gram Sabha Meeting", category: "Governance" },
    { id: 3, url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", title: "Digital Literacy Program", category: "Education" },
    { id: 4, url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", title: "Women SHG Workshop", category: "Social" },
    { id: 5, url: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9", title: "Organic Farming Training", category: "Agriculture" },
    { id: 6, url: "https://images.unsplash.com/photo-1593113598332-cd288d649433", title: "Community Development", category: "Infrastructure" },
  ];

  const videos = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51", title: "Village Success Story", duration: "5:30" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", title: "Annual Day Celebration", duration: "12:45" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", title: "Government Scheme Overview", duration: "8:20" },
  ];

  const audioAnnouncements = [
    { id: 1, title: "Daily News Update - March 20", duration: "3:45", date: "March 20, 2024" },
    { id: 2, title: "Health Awareness Message", duration: "2:30", date: "March 19, 2024" },
    { id: 3, title: "Agriculture Tips in Local Language", duration: "4:15", date: "March 18, 2024" },
    { id: 4, title: "Government Scheme Announcement", duration: "5:00", date: "March 17, 2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Media Gallery</h1>
            <p className="text-muted-foreground text-lg">
              Photos, videos, and audio from village programs and events
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="photos" className="gap-2">
                <ImageIcon className="w-4 h-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2">
                <Play className="w-4 h-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="audio" className="gap-2">
                <Volume2 className="w-4 h-4" />
                Audio
              </TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <span className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                          {photo.category}
                        </span>
                        <h3 className="font-bold mt-2">{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <h3 className="font-bold">{video.title}</h3>
                      <span className="text-sm">{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Audio Tab */}
            <TabsContent value="audio" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audioAnnouncements.map((audio) => (
                  <div key={audio.id} className="bg-card border rounded-xl p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Volume2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{audio.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{audio.duration}</span>
                          <span>•</span>
                          <span>{audio.date}</span>
                        </div>
                        <Button size="sm" className="gap-2">
                          <Play className="w-4 h-4" />
                          Play Audio
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
