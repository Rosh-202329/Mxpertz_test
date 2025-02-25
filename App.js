import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import StoryDetails from "./StoryDetails";
import Header from "./Header";  
import "./styles.css"; 

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
