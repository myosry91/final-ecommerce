import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* main layout */}
        <Route path="/" element={<Layout />}>
          {/* pages */}
          <Route index element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/category" element={<CategoryPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
