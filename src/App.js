import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Nav from './pages/Nav/Nav'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
