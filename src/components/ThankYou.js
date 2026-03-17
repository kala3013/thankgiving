import React, { useState } from "react";
import Confetti from "react-confetti";

function ThankYou() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div className="thanks">
      {celebrate && <Confetti />}

      <button onClick={() => setCelebrate(true)}>
      </button>
    </div>
  );
}

export default ThankYou;