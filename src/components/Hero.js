import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaCode, FaCoffee, FaRocket } from "react-icons/fa";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create twinkling stars
    const newStars = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3
      });
    }
    setStars(newStars);

    // Track mouse position for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating shapes */}
        <div className="floating-shape shape-1">
          <FaHeart />
        </div>
        <div className="floating-shape shape-2">
          <FaStar />
        </div>
        <div className="floating-shape shape-3">
          <FaCode />
        </div>
        <div className="floating-shape shape-4">
          <FaCoffee />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="hero-content"
        style={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Badge */}
        <motion.div
          className="hero-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <FaRocket className="badge-icon" />
          <span>12 Days of MERN Magic</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Thank You, 
          <span className="hero-highlight"> Sister! ❤️</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          For being the best mentor anyone could ask for
        </motion.p>

        {/* Stats Cards */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat-card">
            <span className="stat-number">12</span>
            <span className="stat-label">Amazing Days</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">Memories</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Grateful</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>Scroll to explore</span>
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 20px 150px;
        }

        /* Background Effects */
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .floating-shape {
          position: absolute;
          font-size: 2rem;
          opacity: 0.15;
          color: white;
        }

        .shape-1 { top: 20%; left: 10%; animation: float 6s ease-in-out infinite; }
        .shape-2 { top: 30%; right: 15%; animation: float 8s ease-in-out infinite reverse; }
        .shape-3 { bottom: 30%; left: 20%; animation: float 7s ease-in-out infinite; }
        .shape-4 { bottom: 20%; right: 10%; animation: float 9s ease-in-out infinite reverse; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          transition: transform 0.1s ease-out;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 12px 25px;
          border-radius: 50px;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .hero-badge .badge-icon {
          color: #ff6b6b;
          font-size: 1.2rem;
        }

        .hero-badge span {
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Title */
        .hero h1 {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-highlight {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d, #ff6b6b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s linear infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        /* Stats */
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 25px 35px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 107, 107, 0.5);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }

        .scroll-arrow {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Wave */
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          overflow: hidden;
        }

        .hero-wave svg {
          width: 100%;
          height: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-stats {
            gap: 15px;
          }

          .stat-card {
            padding: 20px 25px;
            min-width: 100px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-badge {
            padding: 10px 18px;
            font-size: 0.85rem;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero-stats {
            gap: 10px;
          }

          .stat-card {
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
