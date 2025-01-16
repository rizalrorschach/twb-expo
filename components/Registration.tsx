"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, User, Send } from "lucide-react";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappLink = `https://api.whatsapp.com/send?phone=6281802558613&text=Halo%2C%20saya%20${encodeURIComponent(formData.name)}%20dari%20${encodeURIComponent(formData.school)}%20ingin%20mendaftar%20TWB%20Campus%20Expo%202025`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900">
      <div className="container mx-auto max-w-md px-4">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-2">Join Us</CardTitle>
            <CardDescription className="text-xl">Register for TWB Campus Expo 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-medium flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-lg py-3 px-4 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school" className="text-lg font-medium flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  School Name
                </Label>
                <Input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="w-full text-lg py-3 px-4 rounded-md border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-200"
                  placeholder="Enter your school name"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-md transition duration-200 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Register via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
