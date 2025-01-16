"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <X className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          {[
            ["HOME", "/"],
            ["ABOUT", "#about"],
            ["EXHIBITIONS", "#exhibitions"],
            ["SPEAKERS", "#speakers"],
            ["PARTNERS", "#partners"],
            ["CONTACT US", "#contact"],
          ].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="text-sm font-medium transition-colors hover:text-primary">
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
