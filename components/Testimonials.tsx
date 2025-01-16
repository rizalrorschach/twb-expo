"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Campus Expo 2024 was an incredible experience! I learned so much and made great connections.",
    name: "Sarah L.",
    title: "Student",
  },
  {
    quote: "As a speaker, I was impressed by the organization and enthusiasm of the attendees.",
    name: "Dr. James H.",
    title: "Professor",
  },
  {
    quote: "The expo opened my eyes to new career possibilities. Can't wait for next year!",
    name: "Emily R.",
    title: "Recent Graduate",
  },
  {
    quote: "The networking opportunities at Campus Expo were unparalleled. I made valuable industry connections.",
    name: "Michael T.",
    title: "Industry Professional",
  },
  {
    quote: "The workshops were incredibly informative and practical. I gained skills I can apply immediately.",
    name: "Lisa K.",
    title: "Graduate Student",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
