"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Registration() {
  const handleRegistrationClick = () => {
    window.open("https://bit.ly/DaftarTwbExpo2025", "_blank");
  };

  return (
    <section id="registration" className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="w-full max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2">Daftar Sekarang</CardTitle>
            <CardDescription className="text-xl">Bergabunglah dengan TWB Campus Expo 2025</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-center mb-6 text-gray-600">Untuk mendaftar, silakan klik tombol di bawah ini. Anda akan diarahkan ke formulir pendaftaran Google.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleRegistrationClick}>
              Daftar di Google Form
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
