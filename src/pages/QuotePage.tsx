import React from 'react';
import {
    ArrowLeft, Calendar, Clock, UploadCloud,
    MapPin, AlertCircle, Check, Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuotePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-12 px-4 sm:px-6">

            <div className="max-w-6xl mx-auto mb-8 reveal active">
                <button onClick={() => navigate('/')} className="flex items-center text-purple-600 hover:text-purple-900 font-bold transition-colors">
                    <ArrowLeft className="mr-2" /> Back to Services
                </button>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Form */}
                <div className="reveal active delay-100 lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-sm border border-purple-100 p-8 md:p-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-extrabold text-purple-900 mb-2">Get your instant quote</h1>
                        <p className="text-purple-600/80">Fill in the details below. Our AI will analyze your request and provide 3 tier pricing options instantly.</p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-purple-900">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white border border-purple-200 rounded-xl p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-purple-900">Phone Number</label>
                                <input type="tel" placeholder="(555) 000-0000" className="w-full bg-white border border-purple-200 rounded-xl p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-purple-900">Service Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
                                    <input type="text" placeholder="123 Main St, Apt 4B" className="w-full bg-white border border-purple-200 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Job Details */}
                        <div className="space-y-6 pt-4 border-t border-purple-100">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-purple-900">Job Type</label>
                                <div className="relative">
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
                                    <select className="w-full bg-white border border-purple-200 rounded-xl p-4 pl-12 appearance-none focus:ring-2 focus:ring-purple-500 focus:outline-none text-purple-900">
                                        <option>Plumbing Repair</option>
                                        <option>Electrical Work</option>
                                        <option>Drywall & Paint</option>
                                        <option>General Handyman</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-purple-900">Upload Photos (Required for AI Estimate)</label>
                                <div className="border-2 border-dashed border-purple-200 rounded-2xl p-8 text-center bg-purple-50/50 hover:bg-purple-50 transition-colors cursor-pointer group">
                                    <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                        <UploadCloud className="text-purple-600 w-6 h-6" />
                                    </div>
                                    <p className="font-bold text-purple-900">Click to upload or drag and drop</p>
                                    <p className="text-sm text-purple-500 mt-1">PNG, JPG up to 10MB</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between bg-orange-50 p-4 rounded-xl border border-orange-100">
                                <div className="flex items-center">
                                    <AlertCircle className="text-orange-600 w-5 h-5 mr-3" />
                                    <span className="font-bold text-orange-900">Is this an emergency?</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                                </label>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-purple-900">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
                                        <input type="date" className="w-full bg-white border border-purple-200 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-purple-500 outline-none text-purple-900" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-purple-900">Preferred Time</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
                                        <select className="w-full bg-white border border-purple-200 rounded-xl p-4 pl-12 appearance-none focus:ring-2 focus:ring-purple-500 outline-none text-purple-900">
                                            <option>Morning (8am - 12pm)</option>
                                            <option>Afternoon (12pm - 4pm)</option>
                                            <option>Evening (4pm - 8pm)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg py-5 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1">
                                Analyze & Get Quote
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Sidebar Info */}
                <div className="reveal active delay-200 lg:col-span-1 space-y-6">
                    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden flex flex-col justify-between h-[500px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">What happens next?</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center font-bold text-sm">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">AI Analysis</h4>
                                        <p className="text-purple-200 text-sm leading-relaxed">Our AI scans your description and photos.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center font-bold text-sm">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Tiered Pricing</h4>
                                        <p className="text-purple-200 text-sm leading-relaxed">Get Good, Better, and Best options instantly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center font-bold text-sm">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Pro Matching</h4>
                                        <p className="text-purple-200 text-sm leading-relaxed">We dispatch a vetted pro in your area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Image - Professional Worker */}
                        <div className="relative z-10 mt-4 flex justify-end h-32">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-2 border-purple-500/30">
                                <img
                                    src="https://images.unsplash.com/photo-1507537297725-24a1c434c6a9?auto=format&fit=crop&q=80&w=600"
                                    alt="Ready to help"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 border border-purple-100 shadow-sm">
                        <h4 className="font-bold text-purple-900 mb-4 flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            Apex Guarantee
                        </h4>
                        <p className="text-purple-600/80 text-sm leading-relaxed">
                            All jobs booked through Apex are insured up to $1M. If you aren't satisfied, we make it right.
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-purple-100 bg-purple-50" alt="Customer" />
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-purple-100 -ml-3 bg-purple-50" alt="Customer" />
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-purple-100 -ml-3 bg-purple-50" alt="Customer" />
                            <span className="text-xs font-bold text-purple-500 ml-2">10k+ Happy Customers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuotePage;
