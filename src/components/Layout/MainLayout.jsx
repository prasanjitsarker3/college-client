import { Outlet } from "react-router-dom";
import Navbar from "../FrontPage/Navbar";
import Footer from "../FrontPage/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;