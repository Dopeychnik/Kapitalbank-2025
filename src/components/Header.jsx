import React from 'react'

const Header = () => {
    return (
        <>
            <header className="border-b bg-white sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="font-semibold text-xl">Logo</h1>
                    <input type="text" placeholder="Поиск" className="w-64 bg-gray-100 rounded-xl py-2 px-4 focus:outline-none" />
                    <button className="text-pink-500 font-medium">Посты</button>
                </div>
            </header>
        </>
    );
}

export default Header