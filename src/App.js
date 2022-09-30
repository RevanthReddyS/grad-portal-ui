import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Success from "./components/Success";
import { SignIn } from "./services/Authentication";
import { email, password } from "./utils/constants/Generic";
import FormPage from "./views/FormPage";

const App = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.authToken.token);

  useEffect(() => {
    if (authToken.length === 0) SignIn(email, password, dispatch);
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/form" />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
