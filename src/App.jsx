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
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;
