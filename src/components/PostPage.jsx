import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContext";

const PostPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { posts, setPosts } = usePosts();
  const navigate = useNavigate();

  if (!state) {
    return (
      <>
        <header className="border-b bg-white sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="font-semibold text-xl">Logo</h1>
            <input
              type="text"
              placeholder="Поиск"
              className="w-64 bg-gray-100 rounded-xl py-2 px-4 focus:outline-none"
            />
            <button className="text-pink-500 font-medium" onClick={() => navigate("/")}>
              Посты
            </button>
          </div>
        </header>
        <p className="text-center mt-10 text-xl">Данные поста не переданы 😕</p>
      </>
    );
  }

  const currentPost = posts.find((p) => p.id === Number(id));
  const [title, setTitle] = useState(currentPost?.title || state.title);
  const [image] = useState(currentPost?.image || state.image);
  const [body, setBody] = useState(currentPost?.body || state.body);
  const [editing, setEditing] = useState(false);

  const handleSave = async () => {
    const updatedData = { title, body };

    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      // Локально обновляем пост
      setPosts((prev) => {
        const updatedPosts = prev.map((post) =>
          post.id === Number(id)
            ? { ...post, title, body, image }
            : post
        );
        localStorage.setItem("posts", JSON.stringify(updatedPosts)); // сохраняем в localStorage
        return updatedPosts;
      });

      setEditing(false);
      navigate("/"); // После сохранения редиректим на главную страницу
    } catch (e) {
      console.error("Ошибка обновления:", e);
    }
  };

  return (
    <>
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-semibold text-xl">Logo</h1>
          <input
            type="text"
            placeholder="Поиск"
            className="w-64 bg-gray-100 rounded-xl py-2 px-4 focus:outline-none"
          />
          <button className="text-pink-500 font-medium" onClick={() => navigate("/")}>
            Посты
          </button>
        </div>
      </header>

      <div className="min-h-screen bg-white flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-1">
          {image && (
            <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
              <img src={image} alt="post" className="w-full h-full object-cover" />
            </div>
          )}

          {editing ? (
            <>
              <input
                className="border p-2 rounded w-full mb-4 text-lg font-bold"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                className="border p-2 rounded w-full h-40"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />

              <button
                onClick={handleSave}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{body}</p>

              <button onClick={() => setEditing(true)} className="text-pink-500 underline">
                Редактировать текст
              </button>
            </>
          )}

          <hr className="mb-6 mt-6" />

          <h2 className="text-xl font-semibold mb-4">Комментарии</h2>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">🙂</div>
              <div>
                <p className="font-semibold">Пользователь</p>
                <p className="text-gray-700 text-sm">Коммент</p>
              </div>
            </div>
          ))}
        </main>

        <footer className="text-center py-4 text-gray-500 border-t">
          2021 copyright all rights reserved
        </footer>
      </div>
    </>
  );
};

export default PostPage;