import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import Header from './container/Header/Header';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
