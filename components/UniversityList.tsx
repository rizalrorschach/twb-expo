import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const universities = [
  { name: "Institut Nahdlatul Ulama", type: "Swasta", location: "Tasikmalaya", logo: "/inu.png?height=80&width=80" },
  { name: "Universitas Siliwangi", type: "Negeri", location: "Tasikmalaya", logo: "/unsil.png?height=80&width=80" },
  { name: "Universitas Cipasung", type: "Swasta", location: "Tasikmalaya", logo: "/uncip.png?height=80&width=80" },
  { name: "Universitas Perjuangan", type: "Swasta", location: "Tasikmalaya", logo: "/unper.png?height=80&width=80" },
  { name: "Universitas Pendidikan Indonesia", type: "Negeri", location: "Tasikmalaya", logo: "/upi.png?height=80&width=80" },
  { name: "Institut Agama Islam Tasikmalaya", type: "Swasta", location: "Tasikmalaya", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Universitas Islam KH Ruhiyat", type: "Swasta", location: "Tasikmalaya", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Universitas Islam Nusantara", type: "Swasta", location: "Tasikmalaya", logo: "/placeholder.svg?height=80&width=80" },
  { name: "STKIP Pancakaraya", type: "Swasta", location: "Tasikmalaya", logo: "/placeholder.svg?height=80&width=80" },
];

export default function UniversityList() {
  return (
    <section id="universities" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Universitas Peserta</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Temui perwakilan dari universitas terkemuka di Indonesia</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <Image src={uni.logo || "/placeholder.svg"} alt={`Logo ${uni.name}`} width={80} height={80} className="rounded-full" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{uni.name}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant={uni.type === "Negeri" ? "default" : "secondary"}>{uni.type}</Badge>
                    <span className="text-sm text-gray-500">{uni.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
