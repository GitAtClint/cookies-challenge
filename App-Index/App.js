import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../Login/Login";
import Hello from "../Hello/Hello";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hello" element={<Hello />} />
      </Routes>
    </Router>
  );
}


export default App;