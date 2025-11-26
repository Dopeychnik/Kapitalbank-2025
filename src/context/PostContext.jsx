import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        // Загружаем посты из localStorage при инициализации
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    return (
        <PostsContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => useContext(PostsContext);