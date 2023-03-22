import "./App.css";
import Nav from "./components/Nav.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import PrivateComponent from "./components/PrivateComponent.js";
import AddProduct from "./components/AddProduct.js";
import ProductList from "./components/ProductList.js";
import UpdateProduct from "./components/UpdateProduct.js";

function App() {
  return (
    <div className="App my-bg">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/Update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
