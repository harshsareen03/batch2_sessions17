import logo from './logo.svg';
import './App.css';
import Crousels from './Components/Crousels';
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
function App() {
  return (
    <>
    <Crousels/>
    </>
  );
}

export default App;
