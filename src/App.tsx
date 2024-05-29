import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias'

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
            <div className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categorias" element={<ListarCategorias />} />
                <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
