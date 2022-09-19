import React from "react";
import Gallery from "react-image-gallery";

import "./image-gallery.css";
import "./ImageGallery.scss";

const ImageGallery = (props) => {
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div>
      <Gallery  items={imageList} showBullets showThumbnails={false} />
    </div>
  );
};

export default ImageGallery;
