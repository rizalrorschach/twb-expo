import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const sponsors = [
  { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
  { name: "EduInnovate", logo: "/placeholder.svg?height=100&width=200" },
  { name: "FutureLearn", logo: "/placeholder.svg?height=100&width=200" },
  { name: "GreenEnergy", logo: "/placeholder.svg?height=100&width=200" },
  { name: "AI Solutions", logo: "/placeholder.svg?height=100&width=200" },
  { name: "DataDrive", logo: "/placeholder.svg?height=100&width=200" },
];

export default function Sponsors() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Sponsor Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} width={200} height={100} className="mb-4 object-contain" />
                <h3 className="text-lg font-medium text-gray-800">{sponsor.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
