import { Clock, Coffee, Mic, Users, Award, BookOpen } from "lucide-react";

const events = [
  { time: "9:00 AM", title: "Opening Ceremony", location: "Main Hall", icon: Award, color: "bg-blue-100 text-blue-800" },
  { time: "10:30 AM", title: "Keynote Speech", location: "Auditorium A", icon: Mic, color: "bg-purple-100 text-purple-800" },
  { time: "12:00 PM", title: "Lunch Break", location: "Cafeteria", icon: Coffee, color: "bg-yellow-100 text-yellow-800" },
  { time: "1:30 PM", title: "Panel Discussion", location: "Conference Room B", icon: Users, color: "bg-green-100 text-green-800" },
  { time: "3:00 PM", title: "Workshop Sessions", location: "Various Rooms", icon: BookOpen, color: "bg-red-100 text-red-800" },
  { time: "5:00 PM", title: "Closing Remarks", location: "Main Hall", icon: Mic, color: "bg-indigo-100 text-indigo-800" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Event Schedule</h2>
        <p className="text-xl text-center text-gray-600 mb-12">September 15-17, 2025</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className={`${event.color} rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
              <div className="flex items-center mb-4">
                <event.icon className="w-8 h-8 mr-3" />
                <h3 className="font-semibold text-xl">{event.title}</h3>
              </div>
              <div className="flex items-center text-sm mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="text-sm">{event.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
