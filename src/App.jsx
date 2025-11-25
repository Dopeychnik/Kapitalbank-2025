import './App.css'
import Navbar from "./components/navbar"
import Card from './components/Card'
import Pagination from './components/Pagination'
import imgPreview from "./assets/Saly-9.png"

function App() {

  const items = Array(9).fill(0)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
          {items.map((_, i) => (
            <Card key={i} img={imgPreview} />
          ))}
        </div>

        <Pagination />
      </div>
    </>
  )
}

export default App
