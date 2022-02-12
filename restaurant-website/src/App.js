import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import Header from './container/Header/Header';
import SpecialMenu from './container/Menu/SpecialMenu';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
