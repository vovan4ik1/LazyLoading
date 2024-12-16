import LazyImage from './components/LazyImage';
import './App.css'

export const App = () => {
  const images = [
    {
      src: 'https://picsum.photos/200/300.webp',
      placeholder: 'https://via.placeholder.com/30x20/cccccc/ffffff?text=Loading...',
      alt: 'Image 1',
    }
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <LazyImage
          key={index}
          placeholder={image.placeholder}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

