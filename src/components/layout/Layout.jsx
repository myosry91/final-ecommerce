import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignupTopbar from "../ui/SignupTopbar";

const Layout = () => {
  const isUserExist = !!localStorage.getItem("role")
  return (
    <>
      {!isUserExist && <SignupTopbar /> }
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
