import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Features from "./components/Features";
import Coaches from "./components/Coaches";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Features />
        <Coaches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
