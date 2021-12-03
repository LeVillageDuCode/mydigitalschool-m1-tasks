import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Todos from './pages/Todos'
import Navbar from './Navbar'
import TaskDetails from './pages/TaskDetails'

import Users from './pages/Users'
import UserDetails from './pages/UserDetails'

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

        <Route path="/users" element={<Users/>} />
        <Route path="/users/:userid" element={<UserDetails/>} />

      </Routes>
    </div>
  );
}

export default App;
