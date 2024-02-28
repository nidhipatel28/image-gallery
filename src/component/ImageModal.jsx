import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/ImageModal.css';

const ImageModal = ({ image, closeModal, allImages }) => {
  const [currentIndex, setCurrentIndex] = useState(allImages.findIndex(img => img.id === image.id));

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="arrow prev" onClick={onClick}>&#8249;</div>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="arrow next" onClick={onClick}>&#8250;</div>;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: false,
    verticalSwiping: false
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">

          <img src={allImages[currentIndex].url} alt={allImages[currentIndex].caption} />
          <span className="close-btn" onClick={closeModal}>&times;</span>
        </div>

        <div className="slider-container">

          <Slider {...settings} initialSlide={currentIndex}>
            {allImages.map((img, index) => (

              <div key={img.id} className="slider-thumbnail" onClick={() => handleThumbnailClick(index)}>
                <img src={img.thumbnail} alt={img.caption} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
