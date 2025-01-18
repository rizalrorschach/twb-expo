import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Homepage() {
  return (
    <section className=" bg-slate-50 text-gray-900 flex items-start md:items-center py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center pt-8 md:pt-0">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selamat datang di <br /> TWB Campus Expo 2025
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-xl">Temukan Jalanmu, Wujudkan Mimpimu</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden md:inline-flex">
            <Link href="#registration">Daftar Sekarang</Link>
          </Button>
        </div>
        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image src="/illustration.png?height=800&width=600" alt="Campus Expo 2025" fill className="object-cover rounded-lg" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
