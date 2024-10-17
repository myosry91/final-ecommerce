import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import { Provider, useSelector } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from "react-toastify"
import LoginPage from "./pages/LoginPage";
import UserOrders from "./pages/UserOrders";
import AdminDashboard from "./pages/AdminDashboard";
import BestOffers from "./pages/BestOffers";
import ProtectedRouting from "./authorization/ProtectedRouting";

function App() {

  const role = useSelector((store) => store.login)
  
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
              <Route path="/products" element={<ProtectedRouting><DetailsPage /></ProtectedRouting>}>
                <Route path="/products/:id" element={<DetailsPage/>} />
              </Route>
              <Route path="/category" element={<ProtectedRouting><CategoryPage /></ProtectedRouting>} >
                <Route path="/category/:id" element={<CategoryPage />} />
              </Route>
              <Route path="/orders" element={<ProtectedRouting><UserOrders /></ProtectedRouting>} />
              <Route path="/cart" element={<ProtectedRouting><CartPage /></ProtectedRouting>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
               <Route path="/admin" element={<ProtectedRouting><AdminDashboard /></ProtectedRouting>} />
              <Route path="/offer" element={<ProtectedRouting><BestOffers /></ProtectedRouting>} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
