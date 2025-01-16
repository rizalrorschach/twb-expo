export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-700">Contact and Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Contact Information</h3>
            <p className="mb-4">
              <strong className="text-gray-700">Email:</strong> info@campusexpo2025.com
            </p>
            <p className="mb-4">
              <strong className="text-gray-700">Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="mb-4">
              <strong className="text-gray-700">Address:</strong> 123 University Ave, Cityville, State 12345
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Event Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814510955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
