import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

const cards = [
  {
    id: 1,
    front: "React",
    back: "You taught me to build dynamic UIs with components, props, and state. Now I can create amazing user interfaces!",
    icon: <FaReact />,
    color: "#61dafb"
  },
  {
    id: 2,
    front: "Node.js",
    back: "The power of server-side JavaScript! You made me understand how to build fast and scalable backends.",
    icon: <FaNodeJs />,
    color: "#68a063"
  },
  {
    id: 3,
    front: "MongoDB",
    back: "NoSQL databases became fun! Learning to structure data efficiently was a game changer.",
    icon: <FaDatabase />,
    color: "#4db33d"
  },
  {
    id: 4,
    front: "JavaScript",
    back: "The heart of web development. From variables to async/await, you made it all click!",
    icon: <FaJs />,
    color: "#f7df1e"
  },
  {
    id: 5,
    front: "HTML5",
    back: "The building blocks of the web. Semantic HTML gave meaning to my structure.",
    icon: <FaHtml5 />,
    color: "#e34f26"
  },
  {
    id: 6,
    front: "CSS3",
    back: "Making things beautiful! Animations, flexbox, grid - you made design fun!",
    icon: <FaCss3 />,
    color: "#264de4"
  }
];

function MemoryCards() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="memory-cards-section" id="memory-cards">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🃏 What I Learned
      </motion.h2>
      
      <p className="memory-cards-subtitle">Click on each card to reveal what you taught me!</p>

      <div className="cards-container">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`card ${flippedCards[card.id] ? "flipped" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => toggleCard(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-inner">
              <div className="card-front" style={{ borderColor: card.color }}>
                <div className="card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3>{card.front}</h3>
                <span className="click-hint">Click to flip!</span>
              </div>
              <div className="card-back" style={{ background: `linear-gradient(135deg, ${card.color}22, ${card.color}44)` }}>
                <p>{card.back}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .memory-cards-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          position: relative;
        }

        .memory-cards-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2), transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15), transparent 50%);
        }

        .memory-cards-section h2 {
          color: white;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .memory-cards-subtitle {
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: 50px;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .card {
          height: 300px;
          perspective: 1000px;
          cursor: pointer;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .card-front {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid;
        }

        .card-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .card-front h3 {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .click-hint {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          margin-top: 15px;
        }

        .card-back {
          transform: rotateY(180deg);
          text-align: center;
        }

        .card-back p {
          color: white;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .card {
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
}

export default MemoryCards;
