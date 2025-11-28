import { ArrowRight, Phone, Camera, Search, MapPin, CheckCircle2, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

            <div className="reveal active bg-white/80 backdrop-blur-xl rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-sm border border-purple-100 relative overflow-hidden">

                <div className="relative z-10 max-w-3xl">
                    <div className="reveal active delay-100 inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wide mb-6 border border-purple-100">
                        <Sparkles size={14} className="mr-1" />
                        AI-Powered Home Care
                    </div>
                    <h1 className="reveal active delay-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                        Home Experts at <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Your Door.</span>
                    </h1>
                    <p className="reveal active delay-300 text-base sm:text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
                        Expert home services, delivered to your doorstep. Get reliable handyman solutions with instant AI estimates. Fast, professional, and tailored to your needs.
                    </p>

                    <div className="reveal active delay-500 flex flex-col sm:flex-row gap-4">
                        <Link to="/quote" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center transition-transform hover:-translate-y-1 shadow-xl shadow-slate-900/10">
                            Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <button onClick={() => navigate('/chat')} className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center transition-colors">
                            <Phone className="mr-2 w-5 h-5" /> Request a Call
                        </button>
                        <button onClick={() => navigate('/chat')} className="w-full sm:w-auto bg-purple-50 hover:bg-purple-100 text-purple-700 px-6 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center transition-colors">
                            <Camera className="mr-2 w-5 h-5" /> Send Photos
                        </button>
                    </div>

                    {/* Search Bar Visual */}
                    <div className="reveal active delay-700 mt-12 bg-white shadow-xl shadow-purple-100/50 rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center max-w-2xl border border-slate-100 gap-2">
                        <div className="flex items-center pl-4 pr-2 text-slate-400">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <input type="text" placeholder="Detroit, MI" className="w-full sm:w-32 bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 font-medium outline-none" />
                        <div className="hidden sm:block h-6 w-px bg-slate-200 mx-2"></div>
                        <input type="text" placeholder="What services are you looking for?" className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 outline-none w-full" />
                        <button className="w-full sm:w-auto bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Hero Image Collage */}
                <div className="reveal active delay-500 hidden xl:block absolute top-1/2 right-16 -translate-y-1/2 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            {/* Team / Worker Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg h-48 bg-white relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    alt="Smiling Service Pro"
                                />
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-700">
                                <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={20} /></div>
                                <div>
                                    <p className="text-xs text-slate-400">Satisfaction</p>
                                    <p className="font-bold text-slate-800">98% Positive</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg transform transition hover:-translate-y-1">
                                <p className="text-3xl font-bold mb-1">2k+</p>
                                <p className="text-sm opacity-90">Homes Revitalized</p>
                            </div>
                            {/* Task / Action Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg h-56 bg-white relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    alt="Painter working"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
