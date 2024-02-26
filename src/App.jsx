import Well from "./components/Well"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Nav from "./sections/Nav"
import Projects from "./sections/Projects"


function App() {

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Well><h1 id='about' className="text-2xl md:text-4xl font-bold text-zinc-400">We Started The Fire Of INNOVATIONS</h1></Well>
    <About></About>
    <Well><h1 id='projects' className="text-2xl md:text-4xl font-bold text-zinc-400">We Are Destined For INNOVATIONS</h1></Well>
    <Projects></Projects>
    <Well><h1  className="text-2xl md:text-4xl font-bold text-zinc-400">We Are Born To Support Youths With INNOVATIONS</h1></Well>

    <Footer></Footer>
    </>
  )
}

export default App
