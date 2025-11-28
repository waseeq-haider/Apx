import { Search, FileText, Calendar, CheckCircle } from 'lucide-react'

export default function ProcessExplainer() {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold mb-6">What happens next?</h3>

            <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50" />
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <Search size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">AI Analysis</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Our AI analyzes your request and photos to understand the scope of work instantly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200" />
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Receive Quote</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                You'll get a transparent Good / Better / Best quote with guaranteed pricing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200" />
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Schedule Service</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Pick a time that works for you. Our vetted pros are available as soon as tomorrow.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-8 border-l-2 border-transparent">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200" />
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                            <CheckCircle size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Job Done</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Relax while we handle the work. Satisfaction guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500">
                        <span className="font-bold text-gray-900">10,000+</span> homeowners trust Apex
                    </p>
                </div>
            </div>
        </div>
    )
}
