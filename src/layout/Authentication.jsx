import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Authentication = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>

        </>
    );
};

export default Authentication;