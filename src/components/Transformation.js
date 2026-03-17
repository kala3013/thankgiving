import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaLightbulb, FaTrophy, FaRocket, FaBrain, FaCheck } from "react-icons/fa";

const transformations = [
  {
    id: 1,
    before: "Didn't know what MERN meant",
    after: "Built full-stack apps with MERN!",
    icon: <FaCode />,
    color: "#61dafb"
  },
  {
    id: 2,
    before: "Scared of errors and bugs",
    after: "Debug like a pro!",
    icon: <FaBrain />,
    color: "#ffd93d"
  },
  {
    id: 3,
    before: "Thought coding was hard",
    after: "Code is my superpower now!",
    icon: <FaLightbulb />,
    color: "#6bcb77"
  },
  {
    id: 4,
    before: "No confidence in programming",
    after: "Proud MERN Developer!",
    icon: <FaTrophy />,
    color: "#ff6b6b"
  }
];

function Transformation() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="transformation-section">
      <motion.div
        className="transformation-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="transformation-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="header-icon">
            <FaRocket />
          </div>
          <h2>My Transformation 🚀</h2>
          <p>Thanks to you, I went from this...</p>
        </motion.div>

        {/* Main Comparison */}
        <div className="transformation-comparison">
          <motion.div
            className="before-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-label before-label">BEFORE</div>
            <div className="card-content">
              <div className="emoji">😰</div>
              <h3>Nervous Beginner</h3>
              <p>Had zero confidence in coding</p>
              <p>Thought programming was too hard</p>
              <p>Didn't know where to start</p>
            </div>
          </motion.div>

          <motion.div
            className="arrow-container"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="arrow">
              <FaArrowRight />
            </div>
          </motion.div>

          <motion.div
            className="after-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-label after-label">AFTER</div>
            <div className="card-content">
              <div className="emoji">🔥</div>
              <h3>Confident Developer</h3>
              <p>Can build full MERN applications</p>
              <p>Love debugging and solving problems</p>
              <p>Ready to take on any challenge!</p>
            </div>
          </motion.div>
        </div>

        {/* Transformation Timeline */}
        <motion.div
          className="transformation-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3>What Changed in 12 Days:</h3>
          
          <div className="details-grid">
            {transformations.map((item, index) => (
              <motion.div
                key={item.id}
                className={`detail-card ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="detail-icon" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <div className="detail-text">
                  <p className="before-text">❌ {item.before}</p>
                  <p className="arrow-text">↓</p>
                  <p className="after-text">✅ {item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="transformation-footer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="footer-content">
            <span className="trophy">🏆</span>
            <h3>And it was ALL because of YOU!</h3>
            <p>Thank you for believing in me when I didn't believe in myself.</p>
            <p className="final-note">You're the BEST! 💖</p>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .transformation-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fbc2eb 100%);
          position: relative;
          overflow: hidden;
        }

        .transformation-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3), transparent 50%);
        }

        .transformation-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .transformation-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .transformation-header h2 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: #333;
          margin-bottom: 10px;
        }

        .transformation-header p {
          font-size: 1.2rem;
          color: #666;
        }

        /* Comparison Cards */
        .transformation-comparison {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .before-card,
        .after-card {
          background: white;
          border-radius: 25px;
          padding: 30px;
          width: 320px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .before-card {
          border: 3px solid #ff6b6b;
        }

        .after-card {
          border: 3px solid #6bcb77;
        }

        .card-label {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .before-label {
          background: #ff6b6b;
          color: white;
        }

        .after-label {
          background: #6bcb77;
          color: white;
        }

        .card-content .emoji {
          font-size: 4rem;
          margin-bottom: 15px;
        }

        .card-content h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 15px;
        }

        .card-content p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        /* Arrow */
        .arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
          animation: arrowPulse 1.5s ease-in-out infinite;
        }

        @keyframes arrowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Details Grid */
        .transformation-details {
          margin-bottom: 50px;
        }

        .transformation-details h3 {
          text-align: center;
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 30px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .detail-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .detail-card:hover,
        .detail-card.active {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .detail-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          flex-shrink: 0;
        }

        .detail-text {
          flex: 1;
        }

        .before-text {
          color: #ff6b6b;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .arrow-text {
          color: #ccc;
          font-size: 0.8rem;
          margin: 2px 0;
        }

        .after-text {
          color: #6bcb77;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Footer */
        .transformation-footer {
          text-align: center;
        }

        .footer-content {
          background: white;
          border-radius: 30px;
          padding: 40px;
          display: inline-block;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .trophy {
          font-size: 4rem;
          display: block;
          margin-bottom: 15px;
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        .footer-content h3 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 15px;
        }

        .footer-content p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .final-note {
          color: #ff6b6b !important;
          font-size: 1.3rem !important;
          font-weight: bold !important;
          margin-top: 15px !important;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .transformation-comparison {
            flex-direction: column;
          }

          .arrow-container {
            transform: rotate(90deg);
          }

          .arrow {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .before-card,
          .after-card {
            width: 100%;
            max-width: 320px;
          }

          .footer-content {
            padding: 30px 20px;
          }

          .footer-content h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Transformation;
