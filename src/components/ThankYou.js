import React, { useState } from "react";
import Confetti from "react-confetti";

function ThankYou() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div className="thanks">
      {celebrate && <Confetti />}

      <h2>💝 A Message For You</h2>

      <p>
        Dear Sister, thank you for guiding me, motivating me and believing in me.
        These 12 days helped me grow so much.
        I will always remember your support.
      </p>
<button onClick={() => alert("You are the best mentor and sister ❤️")}>
Click for a Surprise
</button>
      <button onClick={() => setCelebrate(true)}>
        🎉 Celebrate Our Journey
      </button>
    </div>
  );
}

export default ThankYou;