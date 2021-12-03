import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Todos from './pages/Todos'
import Navbar from './Navbar'
import TaskDetails from './pages/TaskDetails'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/todos" element={<Todos/>} />
        <Route path="/todos/:taskid" element={<TaskDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
