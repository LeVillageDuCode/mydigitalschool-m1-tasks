import './App.css'
import Tasks from './Tasks'

import Home from './pages/Home'
import Contact from './pages/Contact'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Tasks /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
