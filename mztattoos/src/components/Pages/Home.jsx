/* eslint-disable react/no-unescaped-entities */
// Component imports
import Navigation from '../SharedComponents/Navigation'
import Header from '../SharedComponents/Header'
import Carousel from '../SharedComponents/Carousel'
import ExpandableListItem from '../SharedComponents/ExpandableListItem'

// Style import
import '../../assets/styles/Home.css'
import '../../assets/images/carousel/collage1.png'

// Icon imports
import { FiBookOpen, FiInstagram } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'

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

const HomePage = () => {
  return (
    <div>
      <Navigation  />
      <Header />
      <div className="top-span">
        <span>Tattooing</span>
        <span>Since 2010</span>
        <span>Atomic Tattoos | Doctor Phillips, FL</span>
      </div>
      <section className="top-carousel">
        <Carousel images={images}/>
      </section>
      <section>
        <h2><span className="fancy-letter">A</span>BOUT <span className="fancy-letter">M</span>AKS</h2>
        <p>Hello, I'm Maks, a passionate tattoo artist with over 10 years of experience in the industry. 
        Currently, you can find me showcasing my skills and creating stunning body art at Atomic Tattoos in Doctor Phillips, FL.</p>
        <p>Tattooing has been my lifelong passion, and I feel privileged to transform people's ideas and stories into beautiful and meaningful artworks on their skin. 
        Over the years, I have honed my skills, exploring various tattoo styles and techniques to offer my clients a diverse range of artistic expressions. 
        From intricate black and gray designs to vibrant color pieces, I strive to deliver exceptional quality and exceed my clients' expectations.</p>
        <p>Beyond the tattoo studio, I have another thrilling interest that fuels my adventurous spirit - riding motorcycles. There's something liberating about the open road and the rumble of a 
        powerful machine beneath me. Motorcycles have always been a source of inspiration and a means to explore new horizons.</p>
        <p>My journey as a tattoo artist has been incredibly rewarding. I cherish the connections I've formed with clients, listening to their stories, and collaborating to bring their visions to life.
         Each tattoo I create is a unique piece of art, crafted with meticulous attention to detail and a deep appreciation for the individual's story it represents.</p>
         <p>If you're looking for a skilled and dedicated tattoo artist who is committed to providing an exceptional experience, I would be honored to help you bring your tattoo ideas to reality. 
         Let's embark on a creative journey together, where your story becomes a timeless work of art.</p>
      </section>
      <section>
        <h2><span className="fancy-letter">P</span>ORT<span className="fancy-letter">F</span>OLIO</h2>
      </section>
      <section>
        <h1>FA<span className="fancy-letter">Q</span>S</h1>
        <p>Clients regularly have questions about their Tattoos or booking an appointment.</p>
        <p>Here are some of the most frequently asked questions. If you have any other questions please feel free to <a>contact me</a>.</p>
        <div className="expandableList">
        <ExpandableListItem
        question="What is your deposit policy?"
        answer="I require a $150 deposit + tax to make an appointment. This depost is non-refundable, and will be subtracted from the final price of your tattoo."
        />
        <ExpandableListItem
        question="Where are you located?"
        answer="I am currently working at Atomic Tattoos in Doctor Phillips. Address: A-300, 8972 Turkey Lake Rd suite A-300 suite, Orlando, FL 32819"
        />
        <ExpandableListItem
        question="How do I book an appointment?"
        answer="For info or appointments, pleaase feel free to reach out to me via email at mzmtatoo7@gmail.com or direct message me on instagram @mzmtattoos_mw with a description of your idea and reference photos if possible."
        />
        <ExpandableListItem
        question="Do you take walk-ins?"
        answer="Yes. I am currently open and available for walk-ins, but we do have a rotation system in our shop so I am not garunteed to be your artist."
        />
        </div>
      </section>
      <section>
        <h2><span className="fancy-letter">C</span>ONT<span className="fancy-letter">A</span>CT</h2>
        <p>You can reach me at...</p>
        <h4><MdOutlineMailOutline />: <a href = "mailto: mzmtatoo7@gmail.com">mzmtatoo7@gmail.com</a></h4>
        <h4><FiInstagram />: <a href="https://www.instagram.com/mzmtattoos_mw/" target='_blank' rel="noopener noreferrer">@mzmtattoos_mw</a></h4>
        <h4><FiBookOpen />: <a href="https://booking.mangomint.com/atomictattooscentralflorida/studio203" target='_blank' rel="noopener noreferrer">Book Now</a></h4>
      </section>
    </div>
  );
};

export default HomePage;
