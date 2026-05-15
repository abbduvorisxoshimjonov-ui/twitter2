import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Twitter from "./Components/Twitter/Twitter";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Twitter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
