import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WriteForUs from "./pages/WriteForUs";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Destination from "./pages/Destination";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Tips from "./pages/Tips";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/writeforus" element={<WriteForUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
