import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
export default function MainRoot() {
  const location = useLocation();
  useEffect(() => {
      console.log(window.scrollY);
    if (window.scrollY > 100) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
