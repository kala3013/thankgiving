import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypingMessage() {
  return (
    <h2 style={{color:"white"}}>
      <Typewriter
        words={[
          "Thank you for teaching me MERN Stack 💻",
          "Thank you for believing in me ❤️",
          "These 12 days changed my journey 🚀"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </h2>
  );
}

export default TypingMessage;