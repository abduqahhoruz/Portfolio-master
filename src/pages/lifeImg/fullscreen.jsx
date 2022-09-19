import React from 'react'
import Gallery from "react-image-gallery";
// import "../../components/ImageGallery/image-gallery.css";
// import "../../components/ImageGallery/ImageGallery.scss";
const fullscreen = (props) => {
    const imageList = props?.images?.map((image) => {
        return {
          original: image,
          thumbnail: image,
        };
      });
    
      return (
        <div>
          <Gallery  items={imageList} showBullets    />
        </div>
      );
    };

export default fullscreen