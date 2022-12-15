import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.scss";
import Success from "./components/Success";
import { email, password } from "./utils/constants/Generic";
import Dashboard from "./views/dashboard/Dashboard";
import FormPage from "./views/FormPage";
import Profile from "./views/Profile";
import SignIn from "./views/signin/SignIn";
import SignUp from "./views/signup/SignUp";
import TestUI from "./views/TestUI";

const App = () => {
  const authToken = useSelector((state) => state.authToken.token);

  // useEffect(() => {
  //   if (authToken.length === 0) LogIn(email, password, navigate, dispatch);
  // }, []);

  return (
    <div className="App">
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<TestUI />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
