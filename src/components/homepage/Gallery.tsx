import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

// Import service images
import paintingImg from '../../assets/service-painting.png'
import plumbingImg from '../../assets/service-plumbing.png'
import cleaningImg from '../../assets/service-cleaning.png'
import handymanImg from '../../assets/service-handyman.png'
import electricalImg from '../../assets/service-electrical.png'
import hvacImg from '../../assets/service-hvac-new.jpg'

interface GalleryItem {
    id: number
    title: string
    category: string
    image: string
}

const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Professional Painting', category: 'Painting', image: paintingImg },
    { id: 2, title: 'Plumbing Services', category: 'Plumbing', image: plumbingImg },
    { id: 3, title: 'Cleaning Services', category: 'Cleaning', image: cleaningImg },
    { id: 4, title: 'Handyman Services', category: 'Handyman', image: handymanImg },
    { id: 5, title: 'Electrical Work', category: 'Electrical', image: electricalImg },
    { id: 6, title: 'HVAC Systems', category: 'HVAC', image: hvacImg },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

    return (
        <section className="section-padding-sm bg-stone-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="reveal text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Gallery</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Explore our portfolio of completed projects and see the quality we deliver
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            onClick={() => setSelectedImage(item)}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    >
                        <X size={24} />
                    </button>

                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                            <p className="text-stone-300">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

interface GalleryCardProps {
    item: GalleryItem
    onClick: () => void
    delay: number
}

function GalleryCard({ item, onClick, delay }: GalleryCardProps) {
    return (
        <div
            className={`reveal delay-${Math.min(delay, 500)} cursor-pointer group`}
            onClick={onClick}
        >
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-stone-300 text-sm">{item.category}</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <ZoomIn size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
