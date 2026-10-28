import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header.jsx'
import ProductList from './pages/ProductList.jsx'
import Notice from './pages/Notice.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </main>
    </>
  )
}
