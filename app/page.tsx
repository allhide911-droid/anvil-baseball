import Header from "./components/Header";
import Hero from "./components/Hero";
import ParentConcerns from "./components/ParentConcerns";
import ByNumbers from "./components/ByNumbers";
import BeginnerWelcome from "./components/BeginnerWelcome";
import Programs from "./components/Programs";
import CourseByAge from "./components/CourseByAge";
import DayInPractice from "./components/DayInPractice";
import Philosophy from "./components/Philosophy";
import CoachMessage from "./components/CoachMessage";
import GrowthStory from "./components/GrowthStory";
import Coaches from "./components/Coaches";
import Features from "./components/Features";
import ParentVoices from "./components/ParentVoices";
import Alumni from "./components/Alumni";
import PhotoGallery from "./components/PhotoGallery";
import AnnualEvents from "./components/AnnualEvents";
import FAQ from "./components/FAQ";
import ParentColumn from "./components/ParentColumn";
import HowToStart from "./components/HowToStart";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ParentConcerns />
        <ByNumbers />
        <BeginnerWelcome />
        <Programs />
        <CourseByAge />
        <DayInPractice />
        <Philosophy />
        <CoachMessage />
        <GrowthStory />
        <Coaches />
        <Features />
        <ParentVoices />
        <Alumni />
        <PhotoGallery />
        <AnnualEvents />
        <FAQ />
        <ParentColumn />
        <HowToStart />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
