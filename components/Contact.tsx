export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-700">Kontak dan Lokasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Informasi Kontak</h3>
            <p className="mb-4">
              <strong className="text-gray-700">Whatsapp:</strong> +62 823-1534-8593
            </p>
            <p className="mb-4">
              <strong className="text-gray-700">Telpon:</strong> +62 823-1534-8593
            </p>
            <p className="mb-4">
              <strong className="text-gray-700">Alamat:</strong> Kantor Desa Tawangbanteng, Jl. Tawang Banteng - Cipanas Galunggung No.16, Tawangbanteng, Kec. Sukaratu, Kabupaten Tasikmalaya, Jawa Barat 46415
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Lokasi</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.4040878353228!2d108.14442491915575!3d-7.314195819653777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f515675244b43%3A0xcd5f14c13c93f288!2sKantor%20Desa%20Tawangbanteng!5e1!3m2!1sid!2sid!4v1737546931711!5m2!1sid!2sid"
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
