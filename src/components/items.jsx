import { images } from '../utils/images.js';

const Items = () => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.image1} alt="image1" className="img" />
          <img src={image.image2} alt="image2" className="img" />
          <img src={image.image3} alt="image3" className="img" />
          <img src={image.image4} alt="image4" className="img" />
          <img src={image.image5} alt="image5" className="img" />
          <img src={image.image6} alt="image6" className="img" />
          <img src={image.image7} alt="image7" className="img" />
          <img src={image.image8} alt="image8" className="img" />
          <img src={image.image9} alt="image9" className="img" />
          <img src={image.image10} alt="image10" className="img" />
          <img src={image.image11} alt="image11" className="img" />
          <img src={image.image12} alt="image12" className="img" />
          <img src={image.image13} alt="image13" className="img" />
        </div>
      ))}
    </div>
  );
};

export default Items;
