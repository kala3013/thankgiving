import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FaGift, FaHeart, FaStar, FaTrophy } from "react-icons/fa";

function FinalReveal() {
  const [showReveal, setShowReveal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const revealMessages = [
    "🎉 Get Ready for Something Special! 🎉",
    "💖 You are the BEST Sister Ever! 💖",
    "🌟 Thank You for 12 Amazing Days! 🌟",
    "🏆 I'm Proud to be Your Student! 🏆"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReveal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCelebrate = () => {
    setShowConfetti(true);
    // Show messages in sequence
    let msgIndex = 0;
    const messageTimer = setInterval(() => {
      msgIndex++;
      if (msgIndex < revealMessages.length) {
        setCurrentMessage(msgIndex);
      } else {
        clearInterval(messageTimer);
      }
    }, 1500);
  };

  return (
    <div className="final-reveal-section" id="celebrate">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
      <motion.div
        className="reveal-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {!showReveal ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-hearts">
                <span>💖</span>
                <span>💖</span>
                <span>💖</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="gift-box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCelebrate}
              >
                <FaGift className="gift-icon" />
              </motion.div>

              <motion.h2
                key={currentMessage}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="reveal-message"
              >
                {revealMessages[currentMessage]}
              </motion.h2>

              <motion.button
                className="celebrate-btn"
                onClick={handleCelebrate}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaStar /> Click to Celebrate! <FaStar />
              </motion.button>

              <div className="achievement-badges">
                <motion.div
                  className="badge"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <FaTrophy />
                  <span>MERN Master</span>
                </motion.div>
                <motion.div
                  className="badge"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <FaHeart />
                  <span>Best Sister</span>
                </motion.div>
                <motion.div
                  className="badge"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <FaStar />
                  <span>12 Days Hero</span>
                </motion.div>
              </div>

              <motion.div
                className="final-thanks"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p>
                  Dear Sister,
                </p>
                <p>
                  These 12 days with you have been the most transformative experience of my life.
                  You didn't just teach me MERN Stack – you taught me to believe in myself.
                </p>
                <p>
                  Thank you for your patience, your wisdom, and your love.
                  I promise to make you proud!
                </p>
                <p className="signature">With all my love 💖</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .final-reveal-section {
          min-height: 100vh;
          padding: 80px 20px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .final-reveal-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.1), transparent 50%);
        }

        .reveal-container {
          max-width: 800px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .loading-hearts {
          font-size: 3rem;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .loading-hearts span {
          animation: pulse 1s ease-in-out infinite;
        }

        .loading-hearts span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-hearts span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .gift-box {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          cursor: pointer;
          box-shadow: 0 20px 40px rgba(255, 107, 107, 0.4);
        }

        .gift-icon {
          font-size: 3.5rem;
          color: white;
        }

        .reveal-message {
          color: white;
          font-size: 2.2rem;
          margin-bottom: 30px;
          min-height: 60px;
        }

        .celebrate-btn {
          padding: 18px 40px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1.3rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
          transition: all 0.3s;
        }

        .celebrate-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5);
        }

        .achievement-badges {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 20px 25px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .badge svg {
          font-size: 2rem;
          color: #ffd700;
        }

        .badge span {
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .final-thanks {
          margin-top: 60px;
          padding: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .final-thanks p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .final-thanks p:first-child {
          font-size: 1.5rem;
          color: #ff6b6b;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .signature {
          margin-top: 25px !important;
          font-size: 1.3rem !important;
          color: #ff4081 !important;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .reveal-message {
            font-size: 1.6rem;
          }

          .achievement-badges {
            gap: 15px;
          }

          .badge {
            padding: 15px 20px;
          }

          .final-thanks {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
}

export default FinalReveal;
