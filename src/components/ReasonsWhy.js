import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar, FaHandHoldingHeart, FaLightbulb, FaUsers, FaClock } from "react-icons/fa";

const reasons = [
  {
    id: 1,
    title: "Your Patience",
    description: "You never got frustrated when I asked the same questions multiple times. Your patience taught me that learning is a journey, not a destination.",
    icon: <FaClock />,
    color: "#ff6b6b"
  },
  {
    id: 2,
    title: "Your Knowledge",
    description: "The depth of your MERN stack knowledge is incredible. You made complex concepts seem simple and achievable.",
    icon: <FaLightbulb />,
    color: "#ffd93d"
  },
  {
    id: 3,
    title: "Your Encouragement",
    description: "Every time I felt stuck, your words lifted me up. 'You've got this!' became my favorite phrase.",
    icon: <FaStar />,
    color: "#6bcb77"
  },
  {
    id: 4,
    title: "Your Care",
    description: "You genuinely cared about my progress and success. That showed me the kind of mentor and person you are.",
    icon: <FaHandHoldingHeart />,
    color: "#4d96ff"
  },
  {
    id: 5,
    title: "Your Leadership",
    description: "The way you guided our learning sessions showed true leadership. You knew exactly when to push and when to support.",
    icon: <FaUsers />,
    color: "#a55eea"
  },
  {
    id: 6,
    title: "Your Love",
    description: "Above all, you taught with love. That made all the difference in my learning journey.",
    icon: <FaHeart />,
    color: "#ff4081"
  }
];

function ReasonsWhy() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReason = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="reasons-section" id="reasons">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        💖 Reasons Why You're Amazing 💖
      </motion.h2>

      <p className="reasons-subtitle">Click on each reason to see what it means to me</p>

      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            className={`reason-card ${expandedId === reason.id ? "expanded" : ""}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => toggleReason(reason.id)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="reason-header" style={{ backgroundColor: reason.color }}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
            </div>
            <AnimatePresence>
              {expandedId === reason.id && (
                <motion.div
                  className="reason-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{reason.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="final-message"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span className="heart-beat">❤️</span>
        Thank you for being the BEST sister and mentor ever!
        <span className="heart-beat">❤️</span>
      </motion.div>

      <style>{`
        .reasons-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%);
          position: relative;
        }

        .reasons-section h2 {
          color: #333;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 10px;
        }

        .reasons-subtitle {
          color: #666;
          text-align: center;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }

        .reasons-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .reason-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reason-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .reason-header {
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .reason-card.expanded .reason-header {
          border-radius: 20px 20px 0 0;
        }

        .reason-icon {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .reason-header h3 {
          color: white;
          font-size: 1.3rem;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .reason-body {
          padding: 0 25px 25px;
          overflow: hidden;
        }

        .reason-body p {
          color: #555;
          line-height: 1.7;
          font-size: 1rem;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 2px solid #f0f0f0;
        }

        .final-message {
          text-align: center;
          margin-top: 50px;
          font-size: 1.5rem;
          color: #333;
          font-weight: 600;
        }

        .heart-beat {
          display: inline-block;
          animation: heartbeat 1s ease-in-out infinite;
        }

        .heart-beat:nth-child(2) {
          animation-delay: 0.5s;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .reasons-container {
            grid-template-columns: 1fr;
          }

          .reasons-section h2 {
            font-size: 2rem;
          }

          .final-message {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ReasonsWhy;
