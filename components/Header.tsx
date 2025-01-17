"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full bg-slate-50">
      <div className="flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-2 mt-3">
          <Image src="/logo.png" alt="Campus Expo 2025 Logo" width={100} height={40} />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            ["HOME", "/"],
            ["TENTANG", "#about"],
            ["JADWAL", "#exhibitions"],
            ["PEMBICARA", "#speakers"],
            ["PARTNERS", "#partners"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className={cn("text-sm font-medium transition-colors hover:text-primary", "text-muted-foreground")}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden md:inline-flex">
            <Link href="#registration">Daftar</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
