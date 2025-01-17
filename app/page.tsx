import Header from "@/components/Header";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Homepage />
      <About />
      <Schedule />
      <Speakers />
      <Registration />
      <Gallery />
      {/* <News /> */}
      <Contact />
      <Sponsors />
      <Testimonials />
      <Footer />
    </main>
  );
}
