import React from 'react'

const Card = ({ img }) => {
    return (
        <>
            <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white">
                <img src="/vite.svg" alt="img" className="rounded-xl w-full h-52 object-cover" />
                <h2 className="font-bold text-lg mt-4">Lorem ipsum dolor sit amet</h2>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>12
                    </span>
                    <span className="flex items-center gap-1">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-16H3z" /></svg>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card