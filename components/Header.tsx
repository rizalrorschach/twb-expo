"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-slate-50">
      <div className="flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold">CAMPUS EXPO 2025</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            ["HOME", "/"],
            ["ABOUT", "#about"],
            ["EXHIBITIONS", "#exhibitions"],
            ["SPEAKERS", "#speakers"],
            ["PARTNERS", "#partners"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className={cn("text-sm font-medium transition-colors hover:text-primary", "text-muted-foreground")}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex rounded-sm px-8" asChild>
            <Link href="#contact">CONTACT US</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
