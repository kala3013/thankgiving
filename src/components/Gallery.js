import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <h2>📸 Memories</h2>

      <img src="https://source.unsplash.com/300x200/?coding" alt="memory" />
      <img src="https://source.unsplash.com/300x200/?computer" alt="memory" />
      <img src="https://source.unsplash.com/300x200/?developer" alt="memory" />

      <video controls width="300">
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Gallery;