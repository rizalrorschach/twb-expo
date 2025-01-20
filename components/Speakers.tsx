import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const speakers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

export default function Speakers() {
  return (
    <section id="speakers" className="py-12 md:py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Pembicara</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
                  <User className="h-24 w-24 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col items-center justify-center text-center">
                <CardTitle className="text-2xl mb-2">Coming Soon</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4 text-blue-600">Exciting Speaker</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <Badge variant="secondary">Topic 1</Badge>
                  <Badge variant="secondary">Topic 2</Badge>
                  <Badge variant="secondary">Topic 3</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
