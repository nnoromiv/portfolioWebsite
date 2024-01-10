import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import WorkExperience from "../components/Home/WorkExperience"
import Hiring from "../components/Home/Hiring"
import Portfolio from "../components/Home/Portfolio"
import Blog from "../components/Home/Blog"
import Footer from "../components/Home/Footer"
import NavBar from "../components/NavBar"


const HomePage = () => {
  return (
    <>
        <NavBar active="/" />
        <Hero />
        <Services />
        <WorkExperience />
        <Hiring />
        <Portfolio />
        <Blog />
        <Footer />
    </>
  )
}

export default HomePage