import React, { useState } from "react";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import Gallery from "./components/Gallery";
import  Intro from "./components/Intro";
import ThankYou from "./components/ThankYou";
import FloatingHearts from "./components/FloatingHearts";
import TypingMessage from "./components/TypingMessage";
import MusicPlayer from "./components/MusicPlayer";
function App() {

  const [enter, setEnter] = useState(false);

  if(!enter){
    return <Intro enterSite={() => setEnter(true)} />;
  }

  return (
    <div>

      <MusicPlayer />
      <FloatingHearts />
      <Hero />
      <TypingMessage />
      <Memories />
      <Gallery />
      <ThankYou />

    </div>
  );
}

export default App;