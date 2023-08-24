import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

// views
import HomePage from './views/Homepage';
import DetailPage from './views/DetailPage';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ButtonScrollTop from './components/buttonScrollTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:giftId" element={<DetailPage />} />
      </Routes>
      <ButtonScrollTop/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
