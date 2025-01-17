import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiX, SiLinkedin, SiGoogleearth } from "react-icons/si"; // updated import

const speakers = [
  {
    name: "Elon Musk",
    role: "CEO, SpaceX & Tesla",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Space Exploration", "Electric Vehicles", "Artificial Intelligence"],
    twitter: "elonmusk",
    linkedin: "elon-musk",
    website: "https://www.spacex.com",
  },
  {
    name: "Bill Gates",
    role: "Co-Founder, Microsoft & Philanthropist",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Global Health", "Technology Innovation", "Climate Change"],
    twitter: "BillGates",
    linkedin: "bill-gates",
    website: "https://www.gatesnotes.com",
  },
  {
    name: "Mark Zuckerberg",
    role: "CEO, Meta (Facebook)",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Social Media Trends", "Metaverse Development", "Virtual Reality"],
    twitter: "finkd",
    linkedin: "mark-zuckerberg",
    website: "https://about.facebook.com",
  },
  {
    name: "Sundar Pichai",
    role: "CEO, Google & Alphabet",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Artificial Intelligence", "Search Engines", "Future of Technology"],
    twitter: "sundarpichai",
    linkedin: "sundar-pichai",
    website: "https://www.google.com",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-12 md:py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Pembicara</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl mb-2">{speaker.name}</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4 text-green-600">{speaker.role}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 bg-slate-100">
                <div className="flex space-x-4">
                  <a href={`https://twitter.com/${speaker.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    <SiX size={20} />
                  </a>
                  <a href={`https://www.linkedin.com/in/${speaker.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                    <SiLinkedin size={20} />
                  </a>
                  <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
                    <SiGoogleearth size={20} />
                  </a>
                </div>
                <Button variant="outline">View Profile</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
