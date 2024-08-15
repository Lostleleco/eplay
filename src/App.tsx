import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './style'

import Home from './pages/Home'
import Categories from './pages/categories/index'
import Footer from './components/Footer'

const rotas = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      {rotas}
      <Footer />
    </BrowserRouter>
  )
}

export default App
