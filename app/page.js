
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import MapSection from "@/sections/MapSection";
import TeacherSections from "@/sections/TeacherSections";
import UpComingRaces from "@/sections/UpComingRaces";
import VideoSections from "@/sections/VideoSections";
import ShopSection from "@/sections/ShopSection";

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <HeroSection />
      <MapSection />
      <UpComingRaces />
      <TeacherSections />
      <ShopSection />
      <VideoSections />
      <Footer />
    </main>
  );
}
