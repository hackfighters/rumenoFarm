
import React, { useEffect, useState } from 'react';
import '../../../assets/css/test.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const ImageGallery = ({ img = [], alt, video = null }) => {




  const [selectedMedia, setSelectedMedia] = useState({ type: 'image', url: img[0] || '' });
  useEffect(() => {
    setSelectedMedia({ type: 'image', url: img[0] })
  }, [img])



  const handleSelectMedia = (url, mediaType) => {

    setSelectedMedia({ type: mediaType, url });
  };

  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /^(?:https?:)?\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:embed|v)/i;
    return youtubeRegex.test(url);
  };

  return (
    <div className="gallery-container">
      <div className="big-image">
        {selectedMedia.type === 'image' ? (
          <img src={selectedMedia.url} alt={alt} className="selected-media" />
        ) : (
          <iframe
            src={isValidYouTubeUrl(selectedMedia.url) ? selectedMedia.url : ''}
            title="Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className=""
          ></iframe>
        )}
      </div>
      <div className="thumbnail-container">
        {img?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            className="thumbnail m-1 border"
            onClick={() => { handleSelectMedia(image, 'image'); }}

          />
        ))}
        {
          isValidYouTubeUrl(video) && (
            <>
              {video && (
                <button
                  onClick={() => handleSelectMedia(video, 'video')}
                  title="Play Video"
                  className="m-1 border thumbnail"
                >
                  <FontAwesomeIcon icon={faYoutube} className='fs-1 px-4 text-danger' />
                </button>
              )}
            </>
          )
        }
      </div>
    </div>
  );
};

export default ImageGallery;
