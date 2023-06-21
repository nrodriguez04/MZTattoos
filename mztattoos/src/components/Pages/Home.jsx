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
      <section>
        <h2>About Me</h2>
        <p>I am a professional tattoo artist with X years of experience...</p>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>You can reach me at...</p>
      </section>
    </div>
  );
};

export default HomePage;
