"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiInstagram, SiTiktok } from "react-icons/si";

interface SpeakerData {
  name: string;
  role: string;
  image: string;
  awards: string[];
  contact: {
    instagram: string;
    tiktok: string;
  };
  experience: {
    title: string;
    organization: string;
    year: string;
  }[];
  speaking: {
    event: string;
    organizer: string;
    year: string;
  }[];
  workAndBusiness: {
    title: string;
    company: string;
    description: string;
    year: string;
  }[];
}

const speakerData: SpeakerData = {
  name: "Septiana Pratiwi, S.Pd.",
  role: "Entrepreneur & Business Mentor",
  image: "/profile.jpg?height=400&width=400",
  awards: ["Awardee Beasiswa Mien Uno Foundation", "Awardee Beasiswa ISDP - Bank Syariah Indonesia", "Awardee Beasiswa Djarum Foundation 36", "Awardee Beasiswa PPA"],
  contact: {
    instagram: "@septianawp",
    tiktok: "@fortia_",
  },
  experience: [
    {
      title: "Ketua Umum",
      organization: "Forum Komunikasi Koperasi Mahasiswa Indonesia",
      year: "2021-2023",
    },
    {
      title: "Ketua Umum",
      organization: "KOPMA UNSIL",
      year: "2021",
    },
    {
      title: "Founder dan CEO",
      organization: "Admirable Project",
      year: "2012-sekarang",
    },
  ],
  speaking: [
    {
      event: "Entrepreneur Training Program",
      organizer: "HMJ Ekonomi Syariah Universitas Siliwangi",
      year: "2023",
    },
    {
      event: "Leadership Training",
      organizer: "KOPMA Universitas Siliwangi",
      year: "2023",
    },
    {
      event: "Siliwangi Startcoop Entrepreneur Class",
      organizer: "KOPMA Universitas Siliwangi",
      year: "2023",
    },
  ],
  workAndBusiness: [
    {
      title: "Founder & CEO",
      company: "Admirable Project",
      description: "Bisnis di bidang fashion dan craft",
      year: "2012 - sekarang",
    },
    {
      title: "Founder",
      company: "Fortia",
      description: "Bisnis di bidang fashion",
      year: "2020 - sekarang",
    },
    {
      title: "Founder",
      company: "Septiana Pratiwi Official",
      description: "Bisnis di bidang jasa konsultasi dan mentoring",
      year: "2021 - sekarang",
    },
    {
      title: "Founder",
      company: "Kopi Septi",
      description: "Bisnis di bidang F&B",
      year: "2023 - sekarang",
    },
  ],
};

export default function Speakers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="speakers" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Pembicara</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Belajar langsung dari praktisi berpengalaman di bidang kewirausahaan dan kepemimpinan</p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-80 md:h-auto">
                  <Image src={speakerData.image || "/placeholder.svg"} alt={speakerData.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{speakerData.name}</h3>
                    <p className="text-sm">{speakerData.role}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h4 className="text-xl font-semibold mb-4">About the Speaker</h4>
                  <p className="text-gray-600 mb-6">
                    Septiana Pratiwi adalah seorang wirausahawan dan mentor bisnis dengan tekad untuk memberdayakan generasi pemimpin berikutnya. Dengan pengalaman yang luas di berbagai industri, ia membawa banyak pengetahuan untuk
                    menginspirasi dan membimbing para calon wirausahawan.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <a href={`https://www.instagram.com/${speakerData.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      <SiInstagram size={24} />
                    </a>
                    <a href={`https://www.tiktok.com/@${speakerData.contact.tiktok}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      <SiTiktok size={24} />
                    </a>
                  </div>
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Full Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{speakerData.name}</DialogTitle>
                      </DialogHeader>
                      <SpeakerDetails speakerData={speakerData} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function SpeakerDetails({ speakerData }: { speakerData: SpeakerData }) {
  return (
    <Tabs defaultValue="awards" className="w-full mt-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="awards">Penghargaan</TabsTrigger>
        <TabsTrigger value="experience">Pengalaman</TabsTrigger>
        <TabsTrigger value="speaking">Pembicara</TabsTrigger>
        <TabsTrigger value="workAndBusiness">Kerja & Bisnis</TabsTrigger>
      </TabsList>

      <TabsContent value="awards" className="mt-6">
        <div className="space-y-4">
          {speakerData.awards.map((award, index) => (
            <div key={index} className="flex items-center gap-2">
              <Badge variant="secondary">{award}</Badge>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="experience" className="mt-6">
        <div className="space-y-4">
          {speakerData.experience.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h4 className="font-semibold">{exp.title}</h4>
                <p className="text-gray-600">{exp.organization}</p>
                <p className="text-sm text-gray-500">{exp.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="speaking" className="mt-6">
        <div className="space-y-4">
          {speakerData.speaking.map((event, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h4 className="font-semibold">{event.event}</h4>
                <p className="text-gray-600">{event.organizer}</p>
                <p className="text-sm text-gray-500">{event.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="workAndBusiness" className="mt-6">
        <div className="space-y-4">
          {speakerData.workAndBusiness.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.company}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
