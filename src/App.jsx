import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import Hero from "./components/Hero";
import MovingGrid from "./components/MovingGrid";
import MovingVideoGrid from "./components/MovingVideoGrid";
import StoryPanels from "./components/StoryPanels";
import BuildGuide from "./components/BuildGuide";
import FinalCTA from "./components/FinalCTA";
import Moving from "./components/Moving";
import GamesHub from "./components/games/GamesHub";

export default function App() {
  const [showGames, setShowGames] = useState(false);

  if (showGames) {
    return (
      <div className="relative min-h-screen bg-[#05070d] text-white">
        <button
          type="button"
          aria-label="Back to site"
          onClick={() => setShowGames(false)}
          className="fixed left-5 top-5 z-50 flex h-10 w-10 items-center justify-center text-white/60 transition hover:-translate-x-1 hover:text-blue-200"
        >
          <ArrowLeft size={26} strokeWidth={2.2} />
        </button>

        <GamesHub />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Hero onPlayGames={() => setShowGames(true)} />
      <StoryPanels />
      <MovingGrid />
      <FinalCTA />
      <MovingVideoGrid />
      <BuildGuide />
      <Moving />
    </main>
  );
}