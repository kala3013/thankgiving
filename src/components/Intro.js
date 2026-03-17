import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Intro({ enterSite }) {
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 8 + Math.random() * 12,
        emoji: ["✨", "💖", "🌟", "❤️", "🎉", "💫", "⭐", "🎊"][Math.floor(Math.random() * 8)]
      });
    }
    setParticles(newParticles);

    // Show content after a short delay
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro">
      {/* Animated Background */}
      <div className="intro-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ 
            x: `${particle.x}vw`, 
            y: "100vh",
            opacity: 0 
          }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{ 
            duration: particle.duration, 
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            fontSize: particle.size,
            position: "absolute"
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Animated Badge */}
            <motion.div
              className="intro-badge"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="badge-icon">🎁</span>
              <span className="badge-text">A Special Surprise</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="title-highlight">For My</span>
              <br />
              <span className="title-main">Amazing Sister</span>
              <span className="title-heart">❤️</span>
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="intro-subtitle"
            >
              This website is dedicated to the person who guided me for 12 days 💖
              <br />
              <span className="intro-tagline">The best MERN mentor ever!</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="intro-decorations"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="decoration">🌸</span>
              <span className="decoration">💝</span>
              <span className="decoration">🌺</span>
              <span className="decoration">💖</span>
              <span className="decoration">🌷</span>
            </motion.div>

            {/* Enter Button */}
            <motion.button
              onClick={enterSite}
              className="enter-button"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 20px 60px rgba(255, 64, 129, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-icon">💖</span>
              <span className="button-text">Enter the Memory Website</span>
              <span className="button-arrow">→</span>
              <div className="button-shine"></div>
            </motion.button>

            {/* Bottom hint */}
            <motion.p
              className="intro-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.5 }}
            >
              Click to begin this magical journey ✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .intro {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow: hidden;
        }

        /* Animated Background */
        .intro-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
        }

        .circle-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
          top: -200px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #ffd93d, #ff6b6b);
          bottom: -100px;
          left: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #6bcb77, #4ecdc4);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
        }

        /* Particle Styles */
        .particle {
          pointer-events: none;
          z-index: 1;
        }

        /* Content Container */
        .intro-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 20px;
          max-width: 800px;
        }

        /* Badge */
        .intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 12px 25px;
          border-radius: 50px;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .badge-icon {
          font-size: 1.5rem;
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .badge-text {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Title */
        .intro h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .title-highlight {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.5em;
          display: block;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .title-main {
          background: linear-gradient(45deg, #fff, #ffd1dc, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .title-heart {
          display: inline-block;
          animation: heartbeat 1s ease-in-out infinite;
          margin-left: 10px;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* Subtitle */
        .intro-subtitle {
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(1rem, 3vw, 1.4rem);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .intro-tagline {
          display: block;
          margin-top: 10px;
          font-size: 1.1em;
          color: #ffd1dc;
          font-weight: 500;
        }

        /* Decorations */
        .intro-decorations {
          margin-bottom: 2.5rem;
        }

        .decoration {
          font-size: 2rem;
          margin: 0 8px;
          display: inline-block;
          animation: wiggle 2s ease-in-out infinite;
        }

        .decoration:nth-child(odd) {
          animation-delay: 0.5s;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        /* Enter Button */
        .enter-button {
          position: relative;
          padding: 20px 50px;
          font-size: 1.3rem;
          font-weight: 700;
          border: none;
          border-radius: 60px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b6b);
          background-size: 200% 200%;
          color: white;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 10px 40px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          overflow: hidden;
          animation: gradientMove 3s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .button-icon {
          font-size: 1.5rem;
        }

        .button-text {
          letter-spacing: 0.5px;
        }

        .button-arrow {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .enter-button:hover .button-arrow {
          transform: translateX(5px);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s ease;
        }

        .enter-button:hover .button-shine {
          left: 100%;
        }

        /* Hint */
        .intro-hint {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          margin-top: 1.5rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .intro-content {
            padding: 15px;
          }

          .enter-button {
            padding: 16px 35px;
            font-size: 1.1rem;
          }

          .intro-badge {
            padding: 10px 20px;
          }

          .decoration {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .title-highlight {
            font-size: 0.6em;
          }

          .intro h1 {
            font-size: 2.2rem;
          }

          .enter-button {
            padding: 14px 28px;
            font-size: 1rem;
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default Intro;
