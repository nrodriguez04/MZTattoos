import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Component imports
import Home from './components/Pages/Home'
import Portfolio from './components/Pages/Portfolio';

//Style import
import './App.css'


const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        {/* other routes go here */}
    </Routes>
    </Router>
  );
};

export default App;
