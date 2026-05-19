import NavBar from '@/components/navbar'
import Hero from '@/components/home/hero'
import Services from '@/components/home/services'
import WorkExperience from '@/components/home/work-experience'
import Hiring from '@/components/home/hiring'
import Portfolio from '@/components/home/portfolio'
import Blog from '@/components/home/blog'
import Footer from '@/components/home/footer'

export default function Home() {
  return (
    <>
      <NavBar />
      {/* No top padding needed — Hero section handles it with pt-24 */}
      <main className="bg-zinc-950 min-h-screen">
        <Hero />
        <Services />
        <WorkExperience />
        <Hiring />
        <Portfolio />
        <Blog />
        <Footer />
      </main>
    </>
  )
}
