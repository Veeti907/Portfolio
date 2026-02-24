import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './EtusivuFooter'
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



export default function Layout() {
  return (
    <div className="page home-body">

      {/* Navbar aina ylimpänä */}
      <Navbar />

      {/* Sivun sisältö wrapperissa */}
      <main className="container mt-5 pt-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
