import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoTour from "@/components/VideoTour";
import LearningWorld from "@/components/LearningWorld";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Announcements from "@/components/Announcements";
import WhyChooseUs from "@/components/WhyChooseUs";
import DayAtSchool from "@/components/DayAtSchool";
import SocialHub from "@/components/SocialHub";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <VideoTour />
    <LearningWorld />
    <Programs />
    <Gallery />
    <Announcements />
    <WhyChooseUs />
    <DayAtSchool />
    <SocialHub />
    <Admission />
    <Contact />
    <Footer />
  </div>
);

export default Index;
