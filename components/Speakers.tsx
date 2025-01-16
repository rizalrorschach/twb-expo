import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Twitter, Linkedin, Globe } from "lucide-react";

const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "AI Researcher",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["AI Ethics", "Machine Learning", "Neural Networks"],
    twitter: "janesmith",
    linkedin: "jane-smith-ai",
    website: "https://janesmith.ai",
  },
  {
    name: "Prof. John Doe",
    role: "Sustainability Expert",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Climate Change", "Renewable Energy", "Green Tech"],
    twitter: "johndoe_sustain",
    linkedin: "john-doe-sustainability",
    website: "https://johndoe-sustainability.com",
  },
  {
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["Startup Ecosystems", "EdTech Innovations", "FinTech Trends"],
    twitter: "sarahjstartup",
    linkedin: "sarah-johnson-tech",
    website: "https://sarahjohnson.tech",
  },
  {
    name: "Michael Chen",
    role: "Biotech Innovator",
    image: "/placeholder.svg?height=400&width=400",
    topics: ["CRISPR Technology", "Personalized Medicine", "Bioethics"],
    twitter: "michaelchen_bio",
    linkedin: "michael-chen-biotech",
    website: "https://michaelchen-biotech.org",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Speakers and Innovators</h2>
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
                    <Twitter size={20} />
                  </a>
                  <a href={`https://www.linkedin.com/in/${speaker.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                    <Linkedin size={20} />
                  </a>
                  <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
                    <Globe size={20} />
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
