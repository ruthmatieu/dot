import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/LandingPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/dashboard" element={<>Dashboard</>} />
        </Routes>
    )
}

export default AppRoutes;