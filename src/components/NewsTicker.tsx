import { Bell } from "lucide-react";

const NewsTicker = () => {
  const updates = [
    "New Employment Scheme Registration Open - Apply Before 30th March",
    "Village Health Camp on 25th March at Community Center",
    "Agriculture Training Workshop - Free Registration Available",
    "School Admission Process Begins - Documents Required",
    "Road Development Project Starting Next Week",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="w-5 h-5 animate-pulse" />
            <span className="font-bold">Latest Updates:</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="animate-ticker whitespace-nowrap">
              {updates.map((update, index) => (
                <span key={index} className="inline-block mx-8">
                  • {update}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
