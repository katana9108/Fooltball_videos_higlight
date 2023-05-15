import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import PlayVideos from './Pages/PlayVideos';

function App() {
  return (
    <div>
      <Header/>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="play-video/:url" element={<PlayVideos/>}></Route>
          {/* <Route path="/" element={Home}></Route> */}
          {/* <Route path="/" element={Home}></Route> */}
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
