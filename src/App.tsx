import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// EXTERNAL COMPONENTS
// main_components 
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'

// home_components
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Stacks from './components/StacksThatIUse'

import '@styles/index.css'


export default function App() {
  return (
    <main>
        <Router>
          
          <Navbar />

          <Routes>

            <Route path='/' element={
              <>
                <Introduction />  
                <Projects />
                <Stacks />
              </>
            }/>

          </Routes>

          <Footer />

        </Router>
    </main>
  )
}
