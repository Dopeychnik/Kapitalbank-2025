import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="flex justify-center py-6 gap-2 text-sm">
                <button className="border rounded px-3 py-1 text-gray-600">&lt;</button>
                <button className="border rounded px-3 py-1 bg-pink-500 text-white">1</button>
                <button className="border rounded px-3 py-1">2</button>
                <button className="border rounded px-3 py-1">...</button>
                <button className="border rounded px-3 py-1">9</button>
                <button className="border rounded px-3 py-1">10</button>
                <button className="border rounded px-3 py-1 text-gray-600">&gt;</button>
            </div>
        </>
    )
}

export default Pagination