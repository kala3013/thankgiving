import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaHeart } from "react-icons/fa";

const initialWishes = [
  { id: 1, name: "Your Student", message: "Thank you for being the best teacher ever! 🎉", color: "#ff6b6b" },
  { id: 2, name: "A Lucky Learner", message: "You're amazing! Keep inspiring others! ✨", color: "#4ecdc4" },
  { id: 3, name: "Grateful Heart", message: "Those 12 days changed my life! 💖", color: "#ffe66d" },
];

function WishWall() {
  const [wishes, setWishes] = useState(initialWishes);
  const [newWish, setNewWish] = useState({ name: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWish.name.trim() && newWish.message.trim()) {
      const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#a18cd1", "#ff4081", "#6bcb77"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      setWishes([
        { ...newWish, id: Date.now(), color: randomColor },
        ...wishes
      ]);
      setNewWish({ name: "", message: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="wish-wall-section" id="wishes">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        💌 Wishes & Messages 💌
      </motion.h2>

      <p className="wish-subtitle">Leave your wishes for the best sister ever!</p>

      <motion.button
        className="add-wish-btn"
        onClick={() => setShowForm(!showForm)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPaperPlane /> {showForm ? "Cancel" : "Add Your Wish"}
      </motion.button>

      <AnimatePresence>
        {showForm && (
          <motion.form
            className="wish-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={newWish.name}
              onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Sweet Message..."
              value={newWish.message}
              onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane /> Send Wish
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="wishes-container">
        <AnimatePresence>
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="wish-card"
              initial={{ opacity: 0, scale: 0, rotate: Math.random() * 20 - 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ backgroundColor: wish.color }}
            >
              <div className="wish-heart">
                <FaHeart />
              </div>
              <p className="wish-message">{wish.message}</p>
              <span className="wish-name">— {wish.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        .wish-wall-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          min-height: 600px;
        }

        .wish-wall-section h2 {
          color: #333;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 10px;
        }

        .wish-subtitle {
          color: #666;
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .add-wish-btn {
          display: block;
          margin: 0 auto 30px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
          transition: all 0.3s;
        }

        .add-wish-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
        }

        .wish-form {
          max-width: 500px;
          margin: 0 auto 40px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .wish-form input,
        .wish-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 15px;
          border: 2px solid #eee;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .wish-form input:focus,
        .wish-form textarea:focus {
          outline: none;
          border-color: #ff6b6b;
        }

        .wish-form textarea {
          height: 100px;
          resize: none;
        }

        .wish-form button {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .wishes-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .wish-card {
          width: 280px;
          min-height: 180px;
          padding: 25px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transform: rotate(-2deg);
          transition: transform 0.3s;
        }

        .wish-card:nth-child(even) {
          transform: rotate(2deg);
        }

        .wish-card:hover {
          transform: rotate(0deg) scale(1.05);
          z-index: 10;
        }

        .wish-heart {
          position: absolute;
          top: 15px;
          right: 15px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.5rem;
        }

        .wish-message {
          color: white;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 15px;
          font-weight: 500;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .wish-name {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .wishes-container {
            flex-direction: column;
            align-items: center;
          }

          .wish-card {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
}

export default WishWall;
