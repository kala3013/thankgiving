import React, { useState } from "react";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import Gallery from "./components/Gallery";
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
      <TypingMessage />
      <Timeline />
      <MemoryCards />
      <PhotoGallery />
      <ReasonsWhy />
      <WishWall />
      <ThankYou />
      <FinalReveal />
    </div>
  );
}

export default App;
