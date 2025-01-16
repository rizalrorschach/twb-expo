import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Homepage() {
  return (
    <section className="min-h-screen bg-slate-50 text-gray-900 flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to TWB Campus Expo 2025</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-xl">Discover, Learn, and Connect at the Biggest Campus Event of the Year</p>
          <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
            Register Now
          </Button>
        </div>
        <div className="md:w-1/2 relative h-[40vh] md:h-[70vh] max-w-lg mx-auto">
          <Image src="/placeholder.svg?height=800&width=600" alt="Campus Expo 2025" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
