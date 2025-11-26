import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { usePosts } from "./context/PostContext";

const App = () => {
  const { posts, setPosts } = usePosts();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для поиска
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const postsPerPage = 6; // Количество постов на одной странице

  // Фильтруем посты по названию
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Пагинация - вычисление постов для текущей страницы
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Обновление постов
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");

    if (savedPosts.length > 0) {
      setPosts(savedPosts);
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9");
          const postsData = await response.json();

          const updatedPosts = postsData.map((post, index) => ({
            ...post,
            image: `https://via.placeholder.com/150?text=Post+${index + 1}`,
          }));

          setPosts(updatedPosts);
          localStorage.setItem("posts", JSON.stringify(updatedPosts));
        } catch (error) {
          console.error("Ошибка при загрузке данных:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [setPosts]);

  // Обработчик перехода на другую страницу
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Заголовок с полем поиска */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Контент: карточки */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-lg">Загружается...</p>
          ) : (
            currentPosts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                body={post.body}
              />
            ))
          )}
        </div>

        {/* Пагинация */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Назад
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={currentPage * postsPerPage >= filteredPosts.length}
          >
            Вперёд
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
