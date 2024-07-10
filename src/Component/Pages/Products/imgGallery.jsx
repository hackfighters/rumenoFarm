import React, { useState } from 'react';
import '../../../assets/css/test.css';



const ImageGallery = ({img}) => {
  const [selectedImage, setSelectedImage] = useState(img[0]);

  return (
    <div className="gallery-container">
      <div className="big-image">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="thumbnail-container">
        {img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail m-1 border"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
