import { Outlet } from "react-router-dom";
import { NavBar, Header, NewsLetterFooter, Footer } from "../../components";

export default function MainLayout(props) {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <NewsLetterFooter />
      <Footer />
    </>
  );
}
