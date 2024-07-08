import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Footer from "./components/Footer";
import Assignment from "./components/Assignment";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Assignment />}/>
        <Route path="/task1"element={<Task1 />}/>
        <Route path="/task2"element={<Task2 />}/>
        <Route path="/task3"element={<Task3 />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
