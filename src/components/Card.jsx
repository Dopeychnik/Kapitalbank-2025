import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, body }) => {
  return (
    <Link
      to={`/post/${id}`}
      state={{ id, image, title, body }}
      className="block transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden h-full transition-transform hover:shadow-2xl">
        {/* Картинка */}
        <div className="h-56 overflow-hidden">
          {image && (
            <img
              src={image}
              alt="Post"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          )}
        </div>

        {/* Контент карточки */}
        <div className="flex flex-col p-4 h-full">
          <h2 className="font-semibold text-lg text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-4 truncate">{body}</p>
          <div className="mt-auto flex items-center justify-between text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              12
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
