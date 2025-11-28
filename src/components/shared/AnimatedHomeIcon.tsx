import { useEffect, useState } from 'react'

interface AnimatedHomeIconProps {
    isLoading?: boolean
    className?: string
    size?: number
    showProgress?: boolean
}

export default function AnimatedHomeIcon({ isLoading = false, className = '', size = 60, showProgress = false }: AnimatedHomeIconProps) {
    const [buildProgress, setBuildProgress] = useState(0)

    useEffect(() => {
        if (isLoading) {
            setBuildProgress(0)
            const interval = setInterval(() => {
                setBuildProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval)
                        return 100
                    }
                    return prev + 1
                })
            }, 10)
            return () => clearInterval(interval)
        } else {
            setBuildProgress(100)
        }
    }, [isLoading])

    // Calculate individual path lengths for sequential drawing
    const roofLength = 180
    const wallsLength = 160
    const doorLength = 52
    const windowLength = 40
    const totalLength = roofLength + wallsLength + doorLength + windowLength * 2

    const getPathProgress = (start: number, length: number) => {
        const currentPos = (buildProgress / 100) * totalLength
        if (currentPos < start) return length // Not started, fully hidden
        if (currentPos > start + length) return 0 // Complete, fully visible
        return length - (currentPos - start) // Drawing in progress
    }

    return (
        <div className={`relative flex flex-col items-center gap-3 ${className}`}>
            <div style={{ width: size, height: size }} className="relative">
                <svg
                    viewBox="12 12 40 40"
                    className="w-full h-full"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Roof - draws first */}
                    <path
                        d="M 32 12 L 52 28 L 48 28"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeDasharray={roofLength}
                        strokeDashoffset={getPathProgress(0, roofLength)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />
                    <path
                        d="M 32 12 L 12 28 L 16 28"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeDasharray={roofLength}
                        strokeDashoffset={getPathProgress(0, roofLength)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />

                    {/* Walls - draws second */}
                    <path
                        d="M 16 28 L 16 52 L 48 52 L 48 28"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeDasharray={wallsLength}
                        strokeDashoffset={getPathProgress(roofLength, wallsLength)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />

                    {/* Door - draws third */}
                    <path
                        d="M 28 52 L 28 38 L 36 38 L 36 52"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeDasharray={doorLength}
                        strokeDashoffset={getPathProgress(roofLength + wallsLength, doorLength)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />

                    {/* Door knob */}
                    {buildProgress > 75 && (
                        <circle
                            cx="34"
                            cy="45"
                            r="1.5"
                            fill="#6366F1"
                            opacity={Math.min((buildProgress - 75) / 25, 1)}
                        />
                    )}

                    {/* Window - draws fourth */}
                    <rect
                        x="20"
                        y="34"
                        width="6"
                        height="6"
                        stroke="#6366F1"
                        strokeWidth="2.5"
                        strokeDasharray={windowLength}
                        strokeDashoffset={getPathProgress(roofLength + wallsLength + doorLength, windowLength)}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />

                    {/* Window cross */}
                    {buildProgress > 85 && (
                        <>
                            <line x1="23" y1="34" x2="23" y2="40" stroke="#6366F1" strokeWidth="1.5" opacity={Math.min((buildProgress - 85) / 15, 1)} />
                            <line x1="20" y1="37" x2="26" y2="37" stroke="#6366F1" strokeWidth="1.5" opacity={Math.min((buildProgress - 85) / 15, 1)} />
                        </>
                    )}

                    {/* Chimney - draws last */}
                    {buildProgress > 90 && (
                        <>
                            <path
                                d="M 38 20 L 38 16 L 44 16 L 44 22"
                                stroke="#6366F1"
                                strokeWidth="2.5"
                                opacity={Math.min((buildProgress - 90) / 10, 1)}
                            />
                            {/* Smoke dots */}
                            {buildProgress === 100 && !isLoading && (
                                <>
                                    <circle cx="41" cy="12" r="1.5" fill="#6366F1" opacity="0.6" className="animate-ping" style={{ animationDuration: '2s' }} />
                                    <circle cx="41" cy="8" r="1.5" fill="#6366F1" opacity="0.4" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                                </>
                            )}
                        </>
                    )}
                </svg>

                {/* Floating animation when complete */}
                {!isLoading && buildProgress === 100 && (
                    <div className="absolute inset-0 animate-float" />
                )}
            </div>

            {/* Progress percentage */}
            {showProgress && (
                <div className="text-2xl font-bold text-slate-400">
                    {Math.round(buildProgress)}%
                </div>
            )}
        </div>
    )
}
