import Hero from "./components/Hero";
import MovingGrid from "./components/MovingGrid";
import MovingVideoGrid from "./components/MovingVideoGrid";
import StoryPanels from "./components/StoryPanels";
import BuildGuide from "./components/BuildGuide";
import FinalCTA from "./components/FinalCTA";
import Moving from "./components/Moving";

export default function App() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Hero />
      <StoryPanels />
      <MovingGrid />
      <FinalCTA />
      
      <MovingVideoGrid />      
      <BuildGuide />
      
      <Moving />
    </main>
  );
}