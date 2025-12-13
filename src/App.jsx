import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Blog from './components/pages/Blog'

function App() {
  

  return (
   <>
   <Routes>
    <Route path='/' element={<RootLayout/>}>
     <Route index element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/blog' element={<Blog/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
