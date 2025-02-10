"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail } from "lucide-react";

const speakerData = {
  name: "Septiana Pratiwi, S.Pd.",
  role: "Entrepreneur & Business Mentor",
  image: "/profile.jpg?height=400&width=400",
  awards: ["Awardee Beasiswa Mien Uno Foundation", "Awardee Beasiswa ISDP - Bank Syariah Indonesia", "Awardee Beasiswa Djarum Foundation 36", "Awardee Beasiswa PPA"],
  contact: {
    instagram: "@septianawp",
    tiktok: "@fortia_",
    phone: "+6281384541908",
    email: "officialcontactsepti@gmail.com",
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
  return (
    <section id="speakers" className="py-12 md:py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Speaker</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Belajar langsung dari praktisi berpengalaman di bidang kewirausahaan dan kepemimpinan</p>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              {/* Speaker Image and Basic Info */}
              <div className="md:w-1/3 p-6 bg-gray-50">
                <div className="relative h-72 w-full mb-6">
                  <Image src={speakerData.image || "/placeholder.svg"} alt={speakerData.name} fill className="object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{speakerData.name}</h3>
                <p className="text-gray-600 mb-4">{speakerData.role}</p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <a href={`https://www.instagram.com/${speakerData.contact.instagram}`} className="transition duration-300">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href={`https://www.instagram.com/${speakerData.contact.instagram}`} className="transition duration-300">
                      <span>{speakerData.contact.instagram}</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{speakerData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{speakerData.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Speaker Details */}
              <div className="md:w-2/3 p-6">
                <Tabs defaultValue="awards" className="w-full">
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
