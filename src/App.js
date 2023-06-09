import { useContext } from "react";
import "./App.css";
import Profile from './components/profile/Profile';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter,
  RouterProvider,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={user? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
