import { Check } from 'lucide-react'

const tiers = [
    {
        name: 'Good',
        price: '$',
        description: 'Essential repairs at a great value.',
        features: [
            'Standard materials',
            'Vetted professional',
            '30-day warranty',
            'Standard scheduling'
        ],
        highlight: false
    },
    {
        name: 'Better',
        price: '$$',
        description: 'Premium materials and priority service.',
        features: [
            'Premium materials',
            'Top-rated professional',
            '1-year warranty',
            'Priority scheduling',
            'Site cleanup included'
        ],
        highlight: true
    },
    {
        name: 'Best',
        price: '$$$',
        description: 'Top-tier quality with lifetime guarantees.',
        features: [
            'Luxury materials',
            'Master craftsman',
            'Lifetime warranty',
            'Same-day scheduling',
            'White-glove service'
        ],
        highlight: false
    }
]

export default function PricingPreview() {
    return (
        <section className="section-padding-sm bg-stone-50 overflow-hidden">
            <div className="container-custom">
                <div className="reveal text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Transparent Pricing</h2>
                    <p className="text-lg text-slate-500">
                        We give you options. Choose the level of service and materials that fits your budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`reveal delay-${index * 100} relative rounded-[2rem] p-8 transition-all duration-300 ${tier.highlight
                                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                                : 'bg-white text-slate-900 border border-stone-100 hover:border-purple-200 hover:shadow-lg'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                                    {tier.name}
                                </h3>
                                <div className={`text-4xl font-bold mb-2 ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' : 'text-purple-600'}`}>
                                    {tier.price}
                                </div>
                                <p className={`text-sm ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${tier.highlight ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${tier.highlight
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 text-white'
                                : 'bg-stone-50 hover:bg-stone-100 text-slate-900'
                                }`}>
                                Select {tier.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
