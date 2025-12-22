import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
      {/* <ThemeProvider> */}
      <AppRoutes />
      {/* </ThemeProvider> */}
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
