import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from "react-toastify"
import LoginPage from "./pages/LoginPage";
import UserOrders from "./pages/UserOrders";
import AdminDashboard from "./pages/AdminDashboard";
import BestOffers from "./pages/BestOffers";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Provider store={store}>
        <Router>
          <Routes>
            {/* main layout */}
            <Route path="/" element={<Layout />}>
              {/* pages */}
              <Route index element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/orders" element={<UserOrders />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/offer" element={<BestOffers />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
