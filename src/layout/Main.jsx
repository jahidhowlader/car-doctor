import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;