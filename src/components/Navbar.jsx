import React from 'react'

const navbar = () => {
    return (
        <>
            <header className="w-full flex items-center justify-between py-4 px-8 border-b bg-white">
                <div className="text-xl font-semibold">Logo</div>

                <input
                    type="text"
                    placeholder="Поиск"
                    className="w-96 px-4 py-2 bg-gray-100 rounded-lg outline-none 
                   focus:ring-2 focus:ring-gray-300"
                />

                <button className="text-pink-500 font-medium hover:text-pink-600">
                    Посты
                </button>
            </header>
        </>
    )
}

export default navbar