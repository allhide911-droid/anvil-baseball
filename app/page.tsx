import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Philosophy from "./components/Philosophy";
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
        <Philosophy />
        <Features />
        <Coaches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
