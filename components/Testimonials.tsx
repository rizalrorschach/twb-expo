"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Acaranya seru",
    name: "Puput Melati",
    title: "SMK Al Amin",
  },
  {
    quote: "Saya sangat termotivasi untuk melanjutkan kuliah",
    name: "Yuni Nurpadilah",
    title: "SMK Al Amin",
  },
  {
    quote: "Menambah wawasan untuk kuliah menjadi lebih mantap",
    name: "Reni Nurhasanah",
    title: "SMK Mutiara Medika Cisinga",
  },
  {
    quote: "Menyenangkan dan sangat memotivasi untuk melanjutkan studi ke perguruan tinggi",
    name: "Ai Siti Nurjamilah",
    title: "Tawangbanteng",
  },
  {
    quote: "Sangat menyenangkan sekali",
    name: "Defi Aliyawati",
    title: "SMK Al Amin",
  },
  {
    quote: "Acaranya sangat wahh bangeutt",
    name: "Yuli Padilah",
    title: "SMK Al Amin",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Testimonial</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent z-0"></div>
          <div className="relative z-10">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
