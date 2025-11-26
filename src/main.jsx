import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostsProvider } from "./context/PostContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PostsProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </PostsProvider>

  </BrowserRouter>
)
