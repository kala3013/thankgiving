import React, { useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ThankYou from "./components/ThankYou";
import FloatingHearts from "./components/FloatingHearts";
import TypingMessage from "./components/TypingMessage";
import MusicPlayer from "./components/MusicPlayer";
import PhotoGallery from "./components/PhotoGallery";
import Timeline from "./components/Timeline";
import MemoryCards from "./components/MemoryCards";
import ReasonsWhy from "./components/ReasonsWhy";
import WishWall from "./components/WishWall";
import FinalReveal from "./components/FinalReveal";

// New enhanced components
import CountdownTimer from "./components/CountdownTimer";
import QuoteCarousel from "./components/QuoteCarousel";
import HandwrittenSignature from "./components/HandwrittenSignature";
import Transformation from "./components/Transformation";

function App() {
  const [enter, setEnter] = useState(false);

  if (!enter) {
    return <Intro enterSite={() => setEnter(true)} />;
  }

  return (
    <div className="App">
      <MusicPlayer />
      <FloatingHearts />
      <Hero />
      <CountdownTimer />
      <TypingMessage />
      <Transformation />
      <Timeline />
      <MemoryCards />
      <QuoteCarousel />
      <PhotoGallery />
      <HandwrittenSignature />
      <ReasonsWhy />
      <WishWall />
      <ThankYou />
      <FinalReveal />
    </div>
  );
}

export default App;
