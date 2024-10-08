import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignupTopbar from "../ui/SignupTopbar";
const Layout = () => {
  return (
    <>
      <SignupTopbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
