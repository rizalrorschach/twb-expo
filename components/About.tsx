export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">About Campus Expo 2025</h2>
        <div className="space-y-12 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Purpose</h3>
            <p className="text-gray-700 leading-relaxed">
              Campus Expo 2025 aims to bring together students, educators, and industry leaders to showcase innovation, foster collaboration, and inspire the next generation of professionals. Our event creates a unique platform for
              exchanging ideas and building lasting connections.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Theme</h3>
            <p className="text-gray-700 leading-relaxed">
              This year&apos;s theme, &quot;Shaping Tomorrow&apos;s Leaders,&quot; focuses on equipping students with the skills and knowledge needed to thrive in a rapidly evolving global landscape. Through workshops, keynotes, and
              interactive sessions, we&apos;ll explore cutting-edge topics and emerging trends across various disciplines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
