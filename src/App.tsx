import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// EXTERNAL COMPONENTS
// main_components 
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'

// pages_components
import Home from '@pages/Home'
import Projects from '@pages/Projects'
import About from '@pages/About'

import '@styles/index.css'


export default function App() {
  return (
    <main>
        <Router>
          
          <Navbar />

          <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about' element={<About />}/>

          </Routes>

          <Footer />

        </Router>
    </main>
  )
}
