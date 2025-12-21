import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        {/* import landing page here */}
        <Route path="/" element={<div>Landing Page</div>}/>
        <Route path="/dashboard" element={<div>Dashboard</div>}/>
      </Routes>
    </Router>
  )
}

export default App
