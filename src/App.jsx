import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import CategoryCard from './components/CategoryCard'
import Card from './pages/Card'
import Details from './pages/Details'
import Registation from './pages/Registation'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cards from './pages/Cards'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
       <Route path='/About' element={<About/>}> </Route>
       <Route path='/Card' element={<Card/>}></Route>
       <Route path='/Details' element={<Details/>}></Route>
       <Route path='/Registation' element={<Registation/>}></Route>
       <Route path='/products' element={<Products/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Category' element={<Category/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Cards' element={<Cards/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
