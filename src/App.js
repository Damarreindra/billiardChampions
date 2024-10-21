import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import SelectPlayer from './pages/SelectPlayer';
import Match from './pages/Match';
import AddPlayer from './pages/AddPlayer';
import Podium from './pages/Podium';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/select-player' element={<SelectPlayer/>}/>
      <Route path='/match/:id' element={<Match/>}/>
      <Route path='/add-player' element={<AddPlayer/>}/>
      <Route path='/podium' element={<Podium/>}/>

    </Routes>
   </Router>
   </>
  );
}

export default App;
