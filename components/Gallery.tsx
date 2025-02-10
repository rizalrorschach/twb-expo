"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Gallery() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Galeri</h2>
        <div className="h-[80vh] w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "Expo/imv2buwywuzjew0hf4kz",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "Expo/dvqjei2swpfbml7i3gnd",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "Expo/eosiu2uvnlrybl7u5wd8",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "Expo/un6134okwgw0kjucoxtg",
  },
  {
    id: 5,
    className: "md:col-span-2",
    thumbnail: "Expo/wiysbxw6eyg4bp6jj46x",
  },
  {
    id: 6,
    className: "md:col-span-1",
    thumbnail: "Expo/yookkhk9f5fwwtnzryfm",
  },
  {
    id: 7,
    className: "md:col-span-1",
    thumbnail: "Expo/h1pcmb9rs7ctdsbd21eu",
  },
  {
    id: 8,
    className: "md:col-span-1",
    thumbnail: "Expo/ilfsje3rlqehaveud5fs",
  },
];
