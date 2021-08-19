import PropTypes from 'prop-types';
import { imageGalleryItem, imageGalleryItem_image } from './ImageGalleryItem.module.css';


export default function ImageGalleryItem ({ tags, webformatURL,  openModal  }) {
  return (
    <li  className={imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={imageGalleryItem_image}
        onClick={openModal} />
    </li>
  )
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
 
  webformatURL: PropTypes.string.isRequired
    
};





  