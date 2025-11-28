import { MapPin } from 'lucide-react'

const cities = [
    {
        name: 'Detroit',
        state: 'MI',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        status: 'Available Now'
    },
    {
        name: 'Chicago',
        state: 'IL',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        status: 'Available Now'
    },
    {
        name: 'Cleveland',
        state: 'OH',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        status: 'Available Now'
    }
]

export default function ServiceAreas() {
    return (
        <section className="section-padding-sm bg-white">
            <div className="container-custom">
                <div className="reveal flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Proudly Serving the Midwest</h2>
                        <p className="text-lg text-slate-500">
                            We're currently operating in three major metropolitan areas, with more cities coming soon.
                        </p>
                    </div>
                    <button className="bg-white border-2 border-slate-200 hover:border-purple-500 text-slate-700 hover:text-purple-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300">
                        <MapPin size={18} />
                        <span>Check Your Zip Code</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cities.map((city, index) => (
                        <div key={index} className={`reveal delay-${index * 100} group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
                            <img
                                src={city.image}
                                alt={city.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-3xl font-bold text-white">{city.name}</h3>
                                    <span className="text-white/80 font-medium">{city.state}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm text-green-400 font-bold">{city.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
