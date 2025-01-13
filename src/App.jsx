import Navbar from "./components/Navbar";
import TufHero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <TufHero />
      <AboutSection />
      <AchievementsSection />
      <Footer />  
    </main>
  );
};

export default App;
