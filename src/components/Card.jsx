import React from 'react'

const Card = ({ img }) => {
    return (
        <>
            <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-3">
                <img
                    src={img}
                    alt="preview"
                    className="bg-white shadow rounded-xl p-4 flex flex-col gap-3 max-w-sm"
                />

                <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h3>

                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>

                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                        <span>□</span>
                        <span>12</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>✎</span>
                        <span>12</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card