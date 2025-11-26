import { useEffect, useState } from "react";
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Pagination from './components/Pagination'
import imgPreview from "./assets/Saly-9.png"

function App() {

  const cards = Array.from({ length: 9 }).map((_, i) => <Card key={i} />);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
        );
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("API error: ", e);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);



  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        <div className="max-w-7xl mx-auto p-6">
          {loading ? (
            <p className="text-center text-xl font-semibold mt-10">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.map((item) => (
                <Card key={item.id} image={item.thumbnailUrl} title={item.title} />
              ))}
            </div>
          )}

          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
}

export default App
