import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaClock, FaHeart, FaStar, FaMagic } from "react-icons/fa";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set target date to represent the 12-day journey completion
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // Just for demo, show counting

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days", icon: "🌅" },
    { value: timeLeft.hours, label: "Hours", icon: "⏰" },
    { value: timeLeft.minutes, label: "Minutes", icon: "✨" },
    { value: timeLeft.seconds, label: "Seconds", icon: "⚡" }
  ];

  return (
    <div className="countdown-section">
      <motion.div
        className="countdown-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="countdown-header"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="header-icon">
            <FaMagic />
          </div>
          <h2>Time Since Our Journey Began</h2>
          <p>Every second has been precious 💖</p>
        </motion.div>

        {/* Timer */}
        <div className="countdown-timer">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="time-unit"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            >
              <div className="time-value">
                <span className="time-number">{String(unit.value).padStart(2, '0')}</span>
                <span className="time-icon">{unit.icon}</span>
              </div>
              <span className="time-label">{unit.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="countdown-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <FaHeart className="heart-icon" />
          <span>12 days that changed everything</span>
          <FaStar className="star-icon" />
        </motion.div>
      </motion.div>

      <style>{`
        .countdown-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
          position: relative;
          overflow: hidden;
        }

        .countdown-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.1), transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(161, 140, 209, 0.1), transparent 50%);
        }

        .countdown-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .countdown-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .countdown-header h2 {
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          color: #333;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .countdown-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .countdown-timer {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .time-unit {
          background: white;
          border-radius: 20px;
          padding: 25px 30px;
          text-align: center;
          min-width: 140px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }

        .time-unit::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d, #ff6b6b);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .time-unit:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .time-value {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .time-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .time-icon {
          font-size: 1.5rem;
        }

        .time-label {
          color: #666;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .countdown-message {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          font-size: 1.3rem;
          color: #555;
          font-weight: 500;
        }

        .heart-icon {
          color: #ff6b6b;
          animation: heartbeat 1s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .star-icon {
          color: #ffd93d;
          animation: twinkle 1.5s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @media (max-width: 768px) {
          .countdown-timer {
            gap: 15px;
          }

          .time-unit {
            min-width: 100px;
            padding: 20px;
          }

          .time-number {
            font-size: 2rem;
          }

          .time-icon {
            font-size: 1rem;
          }

          .countdown-message {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .time-unit {
            min-width: 80px;
            padding: 15px;
          }

          .time-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default CountdownTimer;
