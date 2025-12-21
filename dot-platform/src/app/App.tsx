import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <Router>
      {/* <AuthProvider> */}
      {/* <ThemeProvider> */}
      <Routes>
        {/* import landing page here */}
        <Route path="/" element={<div>Landing Page</div>}/>
        <Route path="/dashboard" element={<div>Dashboard</div>}/>
      </Routes>
      {/* </ThemeProvider> */}
      {/* </AuthProvider> */}
    </Router>
  )
}

export default App
