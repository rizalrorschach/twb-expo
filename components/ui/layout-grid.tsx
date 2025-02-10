"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-screen p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative overflow-hidden")}>
          <CldImage fill src={card.thumbnail} className={cn("object-cover bg-center absolute inset-0 h-full w-full transition duration-200 rounded-lg")} alt="thumbnail" />
        </div>
      ))}
    </div>
  );
};
