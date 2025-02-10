"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const newsPortals = [
  { name: "Kompas", logo: "/placeholder.svg?height=60&width=120", url: "https://www.kompas.com" },
  { name: "Detik", logo: "/placeholder.svg?height=60&width=120", url: "https://www.detik.com" },
  { name: "Tempo", logo: "/placeholder.svg?height=60&width=120", url: "https://www.tempo.co" },
  { name: "CNN Indonesia", logo: "/placeholder.svg?height=60&width=120", url: "https://www.cnnindonesia.com" },
  { name: "Liputan6", logo: "/placeholder.svg?height=60&width=120", url: "https://www.liputan6.com" },
  { name: "Okezone", logo: "/placeholder.svg?height=60&width=120", url: "https://www.okezone.com" },
];

export default function MediaCoverage() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Media Coverage</h2>
        <p className="text-xl text-center text-gray-600 mb-12">TWB Campus Expo 2025 telah diliput oleh berbagai portal berita terkemuka</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {newsPortals.map((portal) => (
            <Card key={portal.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 flex flex-col items-center justify-between h-full">
                <div className="mb-4">
                  <Image src={portal.logo || "/placeholder.svg"} alt={`Logo ${portal.name}`} width={120} height={60} className="object-contain" />
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(portal.url, "_blank")}>
                  Lihat Artikel
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
