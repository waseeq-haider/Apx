import { useEffect } from 'react'

export function useScrollAnimation() {
    useEffect(() => {
        // Small delay to ensure DOM is ready after loader
        const activationTimer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active')
                        }
                    })
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px' // More lenient for initial load
                }
            )

            // Observe all elements with 'reveal' class
            const elements = document.querySelectorAll('.reveal')

            // Immediately activate elements that are already in view
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect()
                const isInView = rect.top < window.innerHeight && rect.bottom > 0

                if (isInView) {
                    // Add slight stagger for elements already visible
                    const delay = Array.from(elements).indexOf(el) * 50
                    setTimeout(() => {
                        el.classList.add('active')
                    }, delay)
                }

                observer.observe(el)
            })

            return () => {
                elements.forEach((el) => observer.unobserve(el))
            }
        }, 100) // Small delay after loader completes

        return () => clearTimeout(activationTimer)
    }, [])
}
