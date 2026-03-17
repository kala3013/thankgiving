import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const quotes = [
  {
    id: 1,
    text: "The best teacher is not the one who knows everything, but the one who makes learning enjoyable. That's you! 💖",
    author: "Your Student",
    color: "#ff6b6b"
  },
  {
    id: 2,
    text: "Thank you for believing in me when I didn't believe in myself. You made the impossible possible! 🌟",
    author: "Your Student",
    color: "#4ecdc4"
  },
  {
    id: 3,
    text: "Those 12 days weren't just about learning code—they were about discovering my potential. You're amazing! 🚀",
    author: "Your Student",
    color: "#ffd93d"
  },
  {
    id: 4,
    text: "Patience, kindness, and expertise—you have it all. Thank you for being the best mentor ever! ❤️",
    author: "Your Student",
    color: "#a18cd1"
  },
  {
    id: 5,
    text: "You didn't just teach me MERN Stack; you taught me to never give up. Forever grateful! 💝",
    author: "Your Student",
    color: "#6bcb77"
  }
];

function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="quote-section">
      <motion.div
        className="quote-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="quote-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <h2>Words from My Heart 💬</h2>
          <p>What I want you to know</p>
        </motion.div>

        {/* Quote Carousel */}
        <div className="quote-carousel">
          <button className="quote-nav prev" onClick={goToPrev}>
            ‹
          </button>

          <div className="quote-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="quote-content"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ '--quote-color': quotes[currentIndex].color }}
              >
                <div className="quote-text">
                  <span className="quote-open">"</span>
                  {quotes[currentIndex].text}
                  <span className="quote-close">"</span>
                </div>
                <div className="quote-author">
                  <span className="author-line"></span>
                  <span className="author-name">— {quotes[currentIndex].author}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="quote-nav next" onClick={goToNext}>
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="quote-dots">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`quote-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              style={{
                '--dot-color': quotes[index].color,
                backgroundColor: index === currentIndex ? quotes[index].color : 'rgba(0,0,0,0.2)'
              }}
            />
          ))}
        </div>

        {/* Decorative stars */}
        <div className="quote-stars">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="star"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <FaStar />
            </motion.span>
          ))}
        </div>
      </motion.div>

      <style>{`
        .quote-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          position: relative;
          overflow: hidden;
        }

        .quote-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1), transparent 40%),
                      radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1), transparent 40%);
        }

        .quote-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .quote-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .quote-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        }

        .quote-header h2 {
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          color: white;
          margin-bottom: 10px;
        }

        .quote-header p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Carousel */
        .quote-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .quote-nav {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quote-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .quote-content-wrapper {
          flex: 1;
          max-width: 700px;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quote-content {
          text-align: center;
          padding: 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .quote-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--quote-color);
        }

        .quote-text {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: white;
          line-height: 1.8;
          margin-bottom: 25px;
          font-style: italic;
        }

        .quote-open,
        .quote-close {
          font-size: 3rem;
          color: var(--quote-color);
          opacity: 0.5;
          line-height: 0;
          vertical-align: middle;
        }

        .quote-open {
          margin-right: 10px;
        }

        .quote-close {
          margin-left: 10px;
        }

        .quote-author {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .author-line {
          width: 50px;
          height: 3px;
          background: var(--quote-color);
          border-radius: 2px;
        }

        .author-name {
          color: var(--quote-color);
          font-size: 1.1rem;
          font-weight: 600;
        }

        /* Dots */
        .quote-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .quote-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }

        .quote-dot:hover {
          transform: scale(1.3);
        }

        .quote-dot.active {
          transform: scale(1.3);
          box-shadow: 0 0 15px currentColor;
        }

        /* Stars */
        .quote-stars {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .quote-stars .star {
          color: #ffd93d;
          font-size: 1.2rem;
          animation: twinkle 2s ease-in-out infinite;
        }

        .quote-stars .star:nth-child(2) { animation-delay: 0.3s; }
        .quote-stars .star:nth-child(3) { animation-delay: 0.6s; }
        .quote-stars .star:nth-child(4) { animation-delay: 0.9s; }
        .quote-stars .star:nth-child(5) { animation-delay: 1.2s; }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .quote-carousel {
            flex-direction: column;
          }

          .quote-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
          }

          .quote-nav.prev {
            left: 0;
          }

          .quote-nav.next {
            right: 0;
          }

          .quote-content-wrapper {
            padding: 0 60px;
          }

          .quote-content {
            padding: 30px 20px;
          }
        }

        @media (max-width: 480px) {
          .quote-nav {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .quote-content-wrapper {
            padding: 0 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default QuoteCarousel;
