import { useState, useEffect } from 'react'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import Hero from '../components/homepage/Hero'
import ServicesGrid from '../components/homepage/ServicesGrid'
import ServiceAreas from '../components/homepage/ServiceAreas'
import Reviews from '../components/homepage/Reviews'
import WhyApex from '../components/homepage/WhyApex'
import PricingPreview from '../components/homepage/PricingPreview'
import FloatingChatBubble from '../components/homepage/FloatingChatBubble'
import Gallery from '../components/homepage/Gallery'
import Loader from '../components/shared/Loader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(() => {
        // Check if page is being reloaded/refreshed
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        return performance.navigation?.type === 1 || navEntry?.type === 'reload'
    })

    // Enable scroll-triggered animations
    useScrollAnimation()

    useEffect(() => {
        if (isLoading) {
            // Scroll to top
            window.scrollTo(0, 0)

            // Force re-render of all images and assets
            const images = document.querySelectorAll('img')
            images.forEach((img) => {
                img.loading = 'eager'
                // Force reload image
                img.src = img.src
            })

            // Clear any cached styles
            const sheets = document.styleSheets
            for (let i = 0; i < sheets.length; i++) {
                try {
                    sheets[i].disabled = true
                    sheets[i].disabled = false
                } catch (e) {
                    // Skip cross-origin stylesheets
                }
            }

            // Hide loader after assets are reloaded
            const loaderTimer = setTimeout(() => {
                setIsLoading(false)
            }, 1000)

            return () => clearTimeout(loaderTimer)
        }
    }, [isLoading])

    return (
        <div className="min-h-screen">
            <Loader isVisible={isLoading} message="Loading home page..." />
            <Navigation />
            <Hero />
            <ServicesGrid />
            <ServiceAreas />
            <Gallery />
            <Reviews />
            <WhyApex />
            <PricingPreview />
            <Footer />
            <FloatingChatBubble />
        </div>
    )
}
