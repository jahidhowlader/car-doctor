import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const HandlerSignout = () => {
        logout()
            .then(() => {
                
                localStorage.removeItem('Access-Token')

                toast.success('Signout Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
    }


    const ulList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
            user ?
                <>
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li onClick={HandlerSignout}><Link to="/auth/signin">Signout</Link></li>
                </>
                :
                <li><Link to="/auth/signin">Signin</Link></li>
        }
    </>
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {ulList}
                    </ul>
                </div>
                <Link to="/">
                    <img className="h-12 w-12 lg:h-20 lg:w-24" src={logo} alt={logo} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    {ulList}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="">
                    <button className="my-btn-outline">Appointment</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;