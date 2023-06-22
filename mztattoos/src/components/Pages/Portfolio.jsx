// Component imports
import Header from '../SharedComponents/Header'
import Navigation from '../SharedComponents/Navigation'

// Style import
import '../../assets/styles/Portfolio.css'

// Image imports
import image1 from '../../assets/images/carousel/collage1.png'
import image2 from '../../assets/images/carousel/collage2.png'
import image3 from '../../assets/images/carousel/collage3.png'
import image4 from '../../assets/images/carousel/collage4.png'
import image5 from '../../assets/images/carousel/collage5.png'
import image6 from '../../assets/images/carousel/collage6.png'
import image7 from '../../assets/images/carousel/collage7.png'
import image8 from '../../assets/images/carousel/collage8.png'
import image9 from '../../assets/images/carousel/collage9.png'
import image10 from '../../assets/images/carousel/collage10.png'
import image11 from '../../assets/images/carousel/collage11.png'
import image12 from '../../assets/images/carousel/collage12.png'
import image13 from '../../assets/images/carousel/collage13.png'
import image14 from '../../assets/images/carousel/collage14.png'
import image15 from '../../assets/images/carousel/collage15.png'
import image16 from '../../assets/images/carousel/collage16.png'
import image17 from '../../assets/images/carousel/collage17.png'
import image18 from '../../assets/images/carousel/collage18.png'


// You can replace these with the URLs of your images
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  // add more images as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio">
    <Navigation />
    <Header />
    <div className="collage">
      {images.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </div>
    <section className="imageDivider">
        <h2>Hello.</h2>
    </section>
    </div>
  );
};

export default Portfolio;
