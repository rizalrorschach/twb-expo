import { Clock, Coffee, Mic, Users, Award, BookOpen } from "lucide-react";

const events = [
  { time: "09:00 WIB", title: "Upacara Pembukaan", location: "Aula Utama", icon: Award, color: "bg-blue-100 text-blue-800" },
  { time: "10:30 WIB", title: "Pidato Utama", location: "Auditorium A", icon: Mic, color: "bg-purple-100 text-purple-800" },
  { time: "12:00 WIB", title: "Istirahat Makan Siang", location: "Kafetaria", icon: Coffee, color: "bg-yellow-100 text-yellow-800" },
  { time: "13:30 WIB", title: "Diskusi", location: "Ruang Konferensi B", icon: Users, color: "bg-green-100 text-green-800" },
  { time: "15:00 WIB", title: "Sesi Lokakarya", location: "Berbagai Ruangan", icon: BookOpen, color: "bg-red-100 text-red-800" },
  { time: "17:00 WIB", title: "Penutupan", location: "Aula Utama", icon: Mic, color: "bg-indigo-100 text-indigo-800" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Rangkaian Acara</h2>
        <p className="text-xl text-center text-gray-600 mb-12">23 Februari, 2025</p>
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
