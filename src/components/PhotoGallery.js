import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Coding Session",
    caption: "Learning Together 💻"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    alt: "Team Work",
    caption: "Building Projects 🚀"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    alt: "Development",
    caption: "Debugging Adventures 🐛"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    alt: "Coding",
    caption: "First Successful Run 🎉"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    alt: "Laptop Work",
    caption: "MERN Stack Mastery 📚"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    alt: "Programming",
    caption: "Code Reviews 👀"
  }
];

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(photos[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % photos.length;
    setCurrentIndex(next);
    setSelectedImage(photos[next]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prev);
    setSelectedImage(photos[prev]);
  };

  return (
    <div className="photo-gallery" id="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        📸 Our Precious Memories
      </motion.h2>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(index)}
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="gallery-overlay">
              <FaExpand className="expand-icon" />
              <span>{photo.caption}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p className="lightbox-caption">{selectedImage.caption}</p>
            </motion.div>

            <button className="lightbox-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="lightbox-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .photo-gallery {
          padding: 60px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .photo-gallery h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 40px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .expand-icon {
          font-size: 2rem;
          color: white;
          margin-bottom: 10px;
        }

        .gallery-overlay span {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 80%;
          text-align: center;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .lightbox-caption {
          color: white;
          font-size: 1.5rem;
          margin-top: 20px;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 10000;
          padding: 10px;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          font-size: 1.5rem;
          padding: 15px 20px;
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.3s;
        }

        .lightbox-nav:hover {
          background: rgba(255,255,255,0.3);
        }

        .lightbox-nav.prev {
          left: 20px;
        }

        .lightbox-nav.next {
          right: 20px;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          
          .lightbox-nav {
            padding: 10px 15px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default PhotoGallery;
