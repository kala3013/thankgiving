import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaHeart, FaRocket, FaCode, FaTrophy } from "react-icons/fa";

const timelineEvents = [
  {
    day: "Day 1",
    title: "The Beginning",
    description: "We started our MERN journey together. Your encouragement made me believe I could do it!",
    icon: <FaRocket />,
    color: "#ff6b6b"
  },
  {
    day: "Day 2-3",
    title: "HTML & CSS Magic",
    description: "You taught me how to create beautiful web pages. Every tag and style became meaningful.",
    icon: <FaCode />,
    color: "#4ecdc4"
  },
  {
    day: "Day 4-5",
    title: "JavaScript Journey",
    description: "The logic of programming started making sense. You were so patient with my questions!",
    icon: <FaStar />,
    color: "#ffe66d"
  },
  {
    day: "Day 6-7",
    title: "React Revolution",
    description: "Components, props, state - everything became clear with your explanations.",
    icon: <FaHeart />,
    color: "#ff4081"
  },
  {
    day: "Day 8-10",
    title: "Backend Adventures",
    description: "Node.js and Express opened a new world. You made it feel like an adventure!",
    icon: <FaCode />,
    color: "#a18cd1"
  },
  {
    day: "Day 11-12",
    title: "Final Masterpiece",
    description: "We built something amazing together! A complete MERN application from scratch.",
    icon: <FaTrophy />,
    color: "#ffd700"
  }
];

function Timeline() {
  return (
    <div className="timeline-section" id="timeline">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ⏰ Our 12-Day Journey
      </motion.h2>

      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="timeline-content">
              <div 
                className="timeline-icon"
                style={{ backgroundColor: event.color }}
              >
                {event.icon}
              </div>
              <div className="timeline-date">
                <FaCalendarAlt /> {event.day}
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
        
        <div className="timeline-line"></div>
      </div>

      <style>{`
        .timeline-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .timeline-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .timeline-section h2 {
          color: white;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #ff4081, #a18cd1, #4ecdc4);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-item.left {
          justify-content: flex-start;
          padding-right: calc(50% + 30px);
        }

        .timeline-item.right {
          justify-content: flex-end;
          padding-left: calc(50% + 30px);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 25px;
          max-width: 400px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .timeline-icon {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: white;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }

        .timeline-item.right .timeline-icon {
          left: -25px;
          transform: none;
        }

        .timeline-item.left .timeline-icon {
          right: -25px;
          transform: none;
        }

        .timeline-date {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .timeline-content h3 {
          color: white;
          font-size: 1.4rem;
          margin-bottom: 12px;
        }

        .timeline-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-item.left,
          .timeline-item.right {
            padding-left: 60px;
            padding-right: 0;
            justify-content: flex-start;
          }

          .timeline-item.left .timeline-icon,
          .timeline-item.right .timeline-icon {
            left: -25px;
            transform: none;
          }

          .timeline-content {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Timeline;
