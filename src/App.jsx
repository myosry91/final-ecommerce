import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CategoryPage from "./pages/CategoryPage";

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
