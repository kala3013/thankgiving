import React from "react";
import { motion } from "framer-motion";
import { FaPen, FaHeart, FaStar } from "react-icons/fa";

function HandwrittenSignature() {
  return (
    <div className="signature-section">
      <motion.div
        className="signature-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="signature-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="header-icon">
            <FaPen />
          </div>
          <h2>A Personal Message ✍️</h2>
          <p>Straight from my heart to yours</p>
        </motion.div>

        {/* Handwritten Card */}
        <motion.div
          className="signature-card"
          initial={{ rotate: -2, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <div className="card-bg">
            {/* Notebook lines */}
            <div className="notebook-lines">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="line"></div>
              ))}
            </div>
          </div>
          
          <div className="card-content">
            <motion.div
              className="handwritten-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="greeting">Dear Sister,</p>
              
              <p className="main-message">
                These 12 days with you have been nothing short of magical. 
                You took a nervous beginner and transformed them into someone 
                who now believes in themselves.
              </p>
              
              <p className="main-message">
                You didn't just teach me code — you taught me that anything 
                is possible with patience and dedication.
              </p>
              
              <p className="main-message">
                Thank you for your endless patience, your wise guidance, 
                and your kind heart. I'll carry these lessons forever.
              </p>
              
              <div className="signature">
                <span className="with-love">With all my love,</span>
                <motion.span
                  className="name"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Your Student 💖
                </motion.span>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="card-decorations">
              <span className="deco">💕</span>
              <span className="deco">⭐</span>
              <span className="deco">💖</span>
              <span className="deco">🌟</span>
              <span className="deco">💕</span>
            </div>
          </div>

          {/* Stamp */}
          <motion.div
            className="signature-stamp"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <div className="stamp-content">
              <FaStar className="stamp-icon" />
              <span>Best Sister</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="signature-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <FaHeart className="heart" />
          <span>Made with love and gratitude</span>
          <FaHeart className="heart" />
        </motion.div>
      </motion.div>

      <style>{`
        .signature-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }

        .signature-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 10% 90%, rgba(255, 107, 107, 0.1), transparent 40%),
                      radial-gradient(circle at 90% 10%, rgba(161, 140, 209, 0.1), transparent 40%);
        }

        .signature-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .signature-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #a18cd1, #fbc2eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.5rem;
          color: white;
          box-shadow: 0 10px 30px rgba(161, 140, 209, 0.4);
        }

        .signature-header h2 {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          color: #333;
          margin-bottom: 10px;
        }

        .signature-header p {
          font-size: 1.1rem;
          color: #666;
        }

        /* Handwritten Card */
        .signature-card {
          background: #fffef5;
          border-radius: 10px;
          padding: 40px;
          position: relative;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
          transform-origin: center center;
          transition: transform 0.3s;
        }

        /* Notebook lines */
        .card-bg {
          position: absolute;
          top: 0;
          left: 40px;
          right: 0;
          bottom: 0;
          overflow: hidden;
          border-radius: 10px;
        }

        .notebook-lines {
          position: relative;
          height: 100%;
          margin-top: 60px;
        }

        .line {
          height: 30px;
          border-bottom: 1px solid #e8e8e8;
          width: 100%;
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        .handwritten-text {
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif;
          color: #333;
        }

        .greeting {
          font-size: 1.8rem;
          font-weight: bold;
          color: #ff6b6b;
          margin-bottom: 20px;
          transform: rotate(-2deg);
        }

        .main-message {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #444;
        }

        .signature {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .with-love {
          font-size: 1rem;
          color: #666;
          font-style: italic;
          margin-bottom: 10px;
        }

        .name {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b6b, #a18cd1, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: rotate(-3deg);
        }

        .card-decorations {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .deco {
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .deco:nth-child(2) { animation-delay: 0.5s; }
        .deco:nth-child(3) { animation-delay: 1s; }
        .deco:nth-child(4) { animation-delay: 1.5s; }
        .deco:nth-child(5) { animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Stamp */
        .signature-stamp {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          border: 3px solid #ffd93d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(15deg);
          opacity: 0.8;
          background: rgba(255, 217, 61, 0.1);
        }

        .stamp-content {
          text-align: center;
          color: #ffd93d;
        }

        .stamp-icon {
          font-size: 1.8rem;
          margin-bottom: 5px;
        }

        .stamp-content span {
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Footer */
        .signature-footer {
          text-align: center;
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #666;
          font-size: 1rem;
        }

        .signature-footer .heart {
          color: #ff6b6b;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .signature-footer .heart:last-child {
          animation-delay: 0.5s;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .signature-card {
            padding: 30px 20px;
          }

          .notebook-lines {
            left: 20px;
          }

          .greeting {
            font-size: 1.5rem;
          }

          .main-message {
            font-size: 1rem;
          }

          .signature-stamp {
            width: 80px;
            height: 80px;
            top: 10px;
            right: 10px;
          }

          .stamp-icon {
            font-size: 1.3rem;
          }

          .stamp-content span {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .signature-card {
            padding: 25px 15px;
          }

          .signature-stamp {
            display: none;
          }

          .greeting {
            font-size: 1.3rem;
          }

          .name {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default HandwrittenSignature;
