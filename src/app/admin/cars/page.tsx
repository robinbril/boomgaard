export default function AdminCarsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-serif font-bold text-gray-900">Auto's</h1>
                    <p className="text-gray-600 mt-2">Beheer je auto inventory</p>
                </div>
            </div>

            {/* Placeholder for cars list */}
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                <p className="text-gray-500 text-lg">
                    Auto's lijst komt hier. Eerst Supabase configureren!
                </p>
            </div>
        </div>
    )
}
