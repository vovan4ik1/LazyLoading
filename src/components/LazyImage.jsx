import PropTypes from 'prop-types';
import { useLazyImageLoader } from './LoaderImage';


const LazyImage = ({ placeholder, src, alt, className }) => {
  const { imgRef, imageSrc } = useLazyImageLoader(placeholder, src);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        transition: 'opacity 0.3s ease',
        opacity: imageSrc === placeholder ? 0.5 : 1,
      }}
    />
  );
};


LazyImage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired, 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;