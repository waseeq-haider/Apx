import AnimatedHomeIcon from './AnimatedHomeIcon'

interface LoaderProps {
    isVisible: boolean
    message?: string
}

export default function Loader({ isVisible, message = 'Loading...' }: LoaderProps) {
    if (!isVisible) return null

    return (
        <div className="fixed inset-0 bg-white backdrop-blur-md z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <AnimatedHomeIcon isLoading={true} size={100} showProgress={true} />
            </div>
        </div>
    )
}
