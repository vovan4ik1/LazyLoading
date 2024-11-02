import { LazyImage } from './components/LazyImage';
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <figure>
        <LazyImage
          className="demo"
          aspectRatio={16 / 9}
          lqip="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACYDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwEF/8QALhAAAgEDAgQEBAcAAAAAAAAAAQIDAAQRBRIGITFBBxMikTJRgbEVFkJhYnGh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAHhEAAgICAgMAAAAAAAAAAAAAAAIBAxESITEyM1H/2gAMAwEAAhEDEQA/AKdpOiaOHUvYzs2wJkZwB860Dg/QbKxvIntLZkLyB2Dsctjn3qPZ6JqDoRHPatjphtpHuKi8TaxJwzabblliunOEO4MCRjv9aKuWbECZ1WMlz8QdJGu2MrpBDaX1uoeKbzAQe+04+/Y1n35cW5tUubGdkWT48+rDd/8Aar3F3G9xqkCx2mYIgm2RlyDI3T2PXlUHw/1S/E2oWspmWJlEkLHKq20AMA3TuOVVsqbTJiHSW1JGqcIzysQ1yylXOCUxkUr0bi6uJG3Sv8PpCh8/WlRiW+mtENe06OMBB5antzH7VmvjnaRbbaQAq8YAUj+XI/YUpSa/Ii/RXNI0Kxn8Fte1x4z+J2N5EkMwPRSUBGOn6z7D5VbdFUbEhb1RhgmG59uZ/ulKdVyjg7vZWdvNJtJcF4+eTzHKlKUAcf/Z"
          src="https://picsum.photos/id/37/200/300"
          alt="a woman covering face with frosted glass"
        />
      </figure>
    </div>
  );
};

