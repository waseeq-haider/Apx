import { Star, Shield, Award, ThumbsUp } from 'lucide-react'

const reviews = [
    {
        name: 'Sarah Johnson',
        role: 'Homeowner in Detroit',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: "The AI quote was spot on. I uploaded photos of my drywall damage, got a quote in seconds, and the pro was here the next morning. Incredible service!",
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Homeowner in Chicago',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: "I've used Angi and Thumbtack before, but Apex is on another level. The quality of the contractors is just better, and the pricing is totally transparent.",
        rating: 5
    },
    {
        name: 'Emily Davis',
        role: 'Homeowner in Cleveland',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: "Finally, a home service app that feels modern. The chat assistant helped me figure out exactly what I needed, and the booking process was seamless.",
        rating: 5
    }
]

export default function Reviews() {
    return (
        <section className="section-padding-sm bg-white">
            <div className="container-custom">
                {/* Trust Badges */}
                <div className="reveal flex flex-wrap justify-center gap-8 md:gap-16 mb-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-purple-600" />
                        <span className="font-bold text-xl text-slate-800">Fully Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-8 h-8 text-purple-600" />
                        <span className="font-bold text-xl text-slate-800">Vetted Pros</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ThumbsUp className="w-8 h-8 text-purple-600" />
                        <span className="font-bold text-xl text-slate-800">Satisfaction Guaranteed</span>
                    </div>
                </div>

                <div className="reveal text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Loved by Homeowners</h2>
                    <p className="text-lg text-slate-500">
                        Join thousands of satisfied customers who trust Apex for their home repair needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className={`reveal delay-${index * 100} bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300`}>
                            <div className="flex items-center gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">
                                "{review.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-sm text-slate-500">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
