import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="text-2xl font-bold">Apex</span>
                        </div>
                        <p className="text-neutral-400 mb-6">
                            AI-powered home services. Fast, professional, and tech-driven repair solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/chat" className="text-neutral-400 hover:text-white transition-colors">
                                    AI Assistant
                                </Link>
                            </li>
                            <li>
                                <Link to="/quote" className="text-neutral-400 hover:text-white transition-colors">
                                    Get Quote
                                </Link>
                            </li>
                            <li>
                                <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-neutral-400">
                                <MapPin size={16} className="text-primary-500" />
                                <span>Detroit, MI</span>
                            </li>
                            <li className="flex items-center space-x-2 text-neutral-400">
                                <MapPin size={16} className="text-primary-500" />
                                <span>Chicago, IL</span>
                            </li>
                            <li className="flex items-center space-x-2 text-neutral-400">
                                <MapPin size={16} className="text-primary-500" />
                                <span>Cleveland, OH</span>
                            </li>
                        </ul>
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-6 h-6 bg-accent-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <span className="text-neutral-400">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="w-6 h-6 bg-accent-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                                <span className="text-neutral-400">Vetted Contractors</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2 text-neutral-400">
                                <Phone size={16} className="text-primary-500 mt-1" />
                                <div>
                                    <p className="font-medium text-white">Call Us</p>
                                    <p>(555) 123-4567</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2 text-neutral-400">
                                <Mail size={16} className="text-primary-500 mt-1" />
                                <div>
                                    <p className="font-medium text-white">Email Us</p>
                                    <p>hello@apexhome.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-neutral-400 text-sm">
                        © 2024 Apex Home Services. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
