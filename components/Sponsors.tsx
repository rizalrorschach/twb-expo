import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
    { name: "EduInnovate", logo: "/placeholder.svg?height=100&width=200" },
    { name: "FutureLearn", logo: "/placeholder.svg?height=100&width=200" },
    { name: "GreenEnergy", logo: "/placeholder.svg?height=100&width=200" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-700">Sponsors and Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Image src={sponsor.logo} alt={sponsor.name} width={200} height={100} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
