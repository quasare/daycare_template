export default function LocationPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Find Us</h1>
        <p className="mb-4">1234 Cozy Lane, Hometown, USA</p>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_EMBED_CODE_HERE"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    )
  }
  