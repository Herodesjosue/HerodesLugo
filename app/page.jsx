import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function homePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
