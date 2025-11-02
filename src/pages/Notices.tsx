import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Calendar, Download, Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Notices = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const notices = [
    {
      id: 1,
      title: "New Employment Scheme Registration - PM-KISAN",
      category: "Employment",
      date: "March 20, 2024",
      description: "Online registration is now open for the PM-KISAN Skill Development Program. Eligible candidates can apply through the official portal.",
      hasAttachment: true,
      isPinned: true,
    },
    {
      id: 2,
      title: "Village Health Camp - Free Medical Check-up",
      category: "Health",
      date: "March 18, 2024",
      description: "Free health camp will be organized on 25th March at the Community Center. Bring your health cards and Aadhaar for registration.",
      hasAttachment: false,
      isPinned: true,
    },
    {
      id: 3,
      title: "Agriculture Training Workshop on Organic Farming",
      category: "Agriculture",
      date: "March 15, 2024",
      description: "Learn modern and organic farming techniques from agricultural experts. Workshop scheduled for 22nd March at Krishi Vigyan Kendra.",
      hasAttachment: true,
      isPinned: false,
    },
    {
      id: 4,
      title: "School Admission Process 2024-25",
      category: "Education",
      date: "March 12, 2024",
      description: "Admission process for government schools begins. Parents need to submit birth certificate, residence proof, and Aadhaar card.",
      hasAttachment: true,
      isPinned: false,
    },
    {
      id: 5,
      title: "Road Development Project Starting Next Week",
      category: "Infrastructure",
      date: "March 10, 2024",
      description: "Village main road reconstruction project will begin from 25th March. Temporary diversions will be in place.",
      hasAttachment: false,
      isPinned: false,
    },
    {
      id: 6,
      title: "Women's Self Help Group Meeting",
      category: "Social Welfare",
      date: "March 8, 2024",
      description: "Monthly meeting of women's self-help groups to discuss new loan schemes and skill development programs.",
      hasAttachment: false,
      isPinned: false,
    },
  ];

  const categories = ["all", "Employment", "Health", "Agriculture", "Education", "Infrastructure", "Social Welfare"];

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory = selectedCategory === "all" || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pinnedNotices = filteredNotices.filter((n) => n.isPinned);
  const regularNotices = filteredNotices.filter((n) => !n.isPinned);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Notices & Announcements</h1>
            <p className="text-muted-foreground text-lg">Stay updated with latest government schemes and village notifications</p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pinned Notices */}
          {pinnedNotices.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                📌 Pinned Notices
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {pinnedNotices.map((notice) => (
                  <Card key={notice.id} className="border-primary/50 bg-primary/5 hover-lift">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <Badge variant="secondary">{notice.category}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{notice.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{notice.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{notice.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Read More</Button>
                        {notice.hasAttachment && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Notices */}
          <div>
            <h2 className="text-2xl font-bold mb-4">All Notices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularNotices.map((notice) => (
                <Card key={notice.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <Badge>{notice.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{notice.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">Read More</Button>
                      {notice.hasAttachment && (
                        <Button size="sm" variant="ghost">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotices.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No notices found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notices;
