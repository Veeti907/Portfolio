import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Contact from './Contact'
import Taidot from './Taidot'
import Projektit from './Projektit'


export default function AppRoutes() {
  return (
    <>

      <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/taidot" element={<Taidot />} />
      <Route path="/projektit" element={<Projektit />} />
      </Route>
    </Routes>
    </>
  )
}
