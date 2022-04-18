import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import PackageDetail from "./components/PackageDetail/PackageDetail";
import Packages from "./components/Packages/Packages";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Register from "./components/Register/Register";
import Testimonial from "./components/Testimonial/Testimonial";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/packages" element={<Packages></Packages>}></Route>
        <Route
          path="/package/:packageId"
          element={<PackageDetail></PackageDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/testimonial" element={<Testimonial></Testimonial>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
