import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from "react-toastify"
import LoginPage from "./pages/LoginPage";
import UserOrders from "./pages/UserOrders";
import AdminDashboard from "./pages/AdminDashboard";

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
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/category" element={<CategoryPage />} >
                <Route path="/category/:id" element={<CategoryPage />} />
              </Route>
              <Route path="/orders" element={<UserOrders/>} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminDashboard/>} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
