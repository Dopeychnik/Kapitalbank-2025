import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-2 py-8">
                <button className="px-3 py-1 border rounded">‹</button>
                <button className="w-8 h-8 bg-pink-500 text-white rounded">1</button>
                <button className="w-8 h-8 border rounded">2</button>
                <span className="text-gray-500">…</span>
                <button className="w-8 h-8 border rounded">10</button>
                <button className="px-3 py-1 border rounded">›</button>
            </div>
        </>
    )
}

export default Pagination