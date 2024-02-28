import React, { useState } from 'react';
import '../styles/Gallery.css';
import ImageModal from './ImageModal';
import Tabs from "./Tabs";

const Gallery = ({ images }) => {
  const [data, setData] = useState(images);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const categoryData = images.map((value) => {
    return value.category
  });

  // Filter tabs 
  const tabsData = ["All", ...new Set(categoryData)];
  const filterCategory = (category) => {
    if (category === "All") {
      setData(images);
      return;
    }
    const filteredData = images.filter((value) => {
      return value.category === category;
    })
    setData(filteredData);
  }

  // Open and close modal events
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="gallery-container">
      {data.length < 0 && <h1> "loading"</h1>}
      <Tabs filterCategory={filterCategory} tabsData={tabsData} />
      <div className="thumbnail-grid">
        {data.map((image) => (
          <div key={image.id} className="thumbnail" onClick={() => openModal(image)}>
            <img src={image.thumbnail} alt={image.caption} />
          </div>
        ))}
      </div>
      {modalOpen && <ImageModal image={selectedImage} closeModal={closeModal} allImages={images} />}
    </div>
  );
};

export default Gallery;
