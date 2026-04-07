import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningWorld from "@/components/LearningWorld";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import DayAtSchool from "@/components/DayAtSchool";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <LearningWorld />
    <Programs />
    <Gallery />
    <WhyChooseUs />
    <DayAtSchool />
    <Admission />
    <Contact />
    <Footer />
  </div>
);

export default Index;
