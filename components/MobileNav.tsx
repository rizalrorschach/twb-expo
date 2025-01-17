"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    ["HOME", "/"],
    ["ABOUT", "#about"],
    ["EXHIBITIONS", "#exhibitions"],
    ["SPEAKERS", "#speakers"],
    ["PARTNERS", "#partners"],
    ["CONTACT US", "#contact"],
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          {navItems.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="text-sm font-medium transition-colors hover:text-primary">
              {label}
            </Link>
          ))}
          <Link href="#registration" onClick={() => setOpen(false)} className="text-sm font-medium transition-colors hover:text-primary">
            Daftar
          </Link>
        </nav>
        <div className="mt-6">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="#registration" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
