import Image from 'next/image'

const images = [
  { src: '/images/gallery/kids-playing.jpg', alt: 'Kids Playing' },
  { src: '/images/gallery/reading-time.jpg', alt: 'Reading Time' },
  { src: '/images/gallery/lunch-break.jpg', alt: 'Lunch Break' },
  // Add more here
]

export default function GalleryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Daycare in Action</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
