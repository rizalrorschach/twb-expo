"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const newsPortals = [
  {
    name: "Radar Tasik",
    logo: "/radar.jpeg?height=60&width=120",
    url: "https://radartasik.disway.id/read/667458/kenalkan-perguruan-tinggi-karang-taruna-desa-tawangbanteng-akan-gelar-twb-expo-campus-2024-ini-jadwalnya",
  },
  {
    name: "Nuansa Post",
    logo: "/nuansa.jpeg?height=60&width=120",
    url: "https://nuansapost.id/2024/02/25/karang-taruna-desa-tawang-banteng-bersama-mahasiswa-menggelar-twb-expo-kampus-2024/",
  },
  { name: "SRIndonesia TV", logo: "/yt.jpeg?height=60&width=120", url: "https://www.youtube.com/watch?v=bc2mcAGm3Q0" },
];

export default function MediaCoverage() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Media Coverage</h2>
        <p className="text-xl text-center text-gray-600 mb-12">TWB Campus Expo 2025 telah diliput oleh berbagai portal berita terkemuka</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {newsPortals.map((portal) => (
            <Card key={portal.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <Image src={portal.logo || "/placeholder.svg"} alt={`Logo ${portal.name}`} width={120} height={60} className="object-contain" />
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => window.open(portal.url, "_blank")}>
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
