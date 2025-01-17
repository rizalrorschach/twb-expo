export default function News() {
  const newsItems = [
    { title: "New Keynote Speaker Announced", date: "May 15, 2025", excerpt: "We are thrilled to announce our latest keynote speaker, a pioneer in quantum computing..." },
    { title: "Early Bird Registration Now Open", date: "April 30, 2025", excerpt: "Don't miss out on our limited early bird tickets! Register now to secure your spot..." },
    { title: "Call for Volunteers", date: "April 1, 2025", excerpt: "Be part of something extraordinary! We're looking for enthusiastic volunteers to help make Campus Expo 2025 a success..." },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-700">News and Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-xl text-gray-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <p className="text-gray-700">{item.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-gray-700 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
