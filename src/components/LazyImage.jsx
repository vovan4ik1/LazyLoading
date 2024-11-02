import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


function LazyImage({ className, src, alt, lqip, aspectRatio = 2 / 3 }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={clsx("wrapper", className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      {lqip && <img src={lqip} alt="" aria-hidden="true" />}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx("source", loaded && "loaded")}
      />
    </div>
  );
}

LazyImage.propTypes = {
  className: PropTypes.string.isRequired, 
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  lqip: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string.isRequired,
};

export default LazyImage;