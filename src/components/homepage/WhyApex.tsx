import { Sparkles, Clock, Shield, DollarSign, Users, Zap } from 'lucide-react'

const features = [
    {
        icon: Sparkles,
        title: 'AI-Powered Quotes',
        description: 'Get instant, accurate quotes powered by advanced AI technology',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: Clock,
        title: 'Fast Response',
        description: 'Same-day service available. Most jobs quoted within minutes',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Shield,
        title: 'Insured & Vetted',
        description: 'All contractors are licensed, insured, and background-checked',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: DollarSign,
        title: 'Transparent Pricing',
        description: 'No hidden fees. Choose from Good, Better, or Best options',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        icon: Users,
        title: 'Expert Contractors',
        description: 'Top-rated professionals with years of experience',
        color: 'from-red-500 to-red-600'
    },
    {
        icon: Zap,
        title: 'Tech-Driven',
        description: 'Modern platform for seamless booking and communication',
        color: 'from-cyan-500 to-cyan-600'
    }
]

export default function WhyApex() {
    return (
        <section className="section-padding-sm bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="reveal text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Apex</span>?
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        We're revolutionizing home services with AI-powered efficiency and human expertise
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className={`reveal delay-${index * 100} bg-stone-50 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                    <Icon className="text-white" size={28} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
