import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <h1>I am Home Section</h1>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
