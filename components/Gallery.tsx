"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Event Highlights</h2>
        <div className="h-[80vh] w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

const OpeningCeremony = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Opening Ceremony</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">The grand opening of Campus Expo 2025, featuring keynote speakers and special performances to kick off an inspiring event.</p>
    </div>
  );
};

const TechShowcase = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Tech Showcase</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">Explore cutting-edge technology demonstrations from leading companies and innovative startups shaping the future.</p>
    </div>
  );
};

const CareerFair = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Career Fair</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">Connect with potential employers, explore exciting career opportunities, and take the next step in your professional journey.</p>
    </div>
  );
};

const Workshops = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Interactive Workshops</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">Engage in hands-on learning experiences covering a wide range of topics and skills essential for future leaders.</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <OpeningCeremony />,
    className: "md:col-span-2",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    content: <TechShowcase />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    content: <CareerFair />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    content: <Workshops />,
    className: "md:col-span-2",
    thumbnail: "/placeholder.svg?height=400&width=800",
  },
];
