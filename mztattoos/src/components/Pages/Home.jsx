/* eslint-disable react/no-unescaped-entities */
// Component imports
import Navigation from '../SharedComponents/Navigation'
import Header from '../SharedComponents/Header'

// Style import
import '../../assets/styles/Home.css'

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
      <section>
        <h3>Images Here</h3>
      </section>
      <section>
        <h2><span className="fancy-letter">A</span>bout <span className="fancy-letter">M</span>aks</h2>
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
        <h2><span className="fancy-letter">P</span>ortfolio</h2>
      </section>
      <section>
        <h2><span className="fancy-letter">C</span>ontact <span className="fancy-letter">M</span>e</h2>
        <p>You can reach me at...</p>
        <h4>Email: mzmtatoo7@gmail.com</h4>
        <h4>Instagram: @mzmtattoos_mw</h4>
        <h4>Booking: https://booking.mangomint.com/atomictattooscentralflorida/studio203</h4>
      </section>
    </div>
  );
};

export default HomePage;
