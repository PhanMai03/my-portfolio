import { BackgroundAnimations } from "../components/Background"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { MainSection } from "../components/MainSection"
import { AboutSection } from "../components/About"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Contact } from "../components/Contact"

export const Home = () =>{
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <BackgroundAnimations />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <MainSection />
        {/* <AboutSection /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}