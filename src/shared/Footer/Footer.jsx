import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logoFooter from '../../assets/logoFooter.png';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div className='space-y-2'>
                <img className='h-12 lg:h-16 lg:w-20' src={logoFooter} alt={logo} />
                <p className='leading-7'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>

                <div className='flex gap-4'>
                    <Link>
                        <FaFacebookF className='bg-white bg-opacity-20 p-2 rounded-full text-3xl'></FaFacebookF>
                    </Link>
                    <Link>
                        <FaTwitter className='bg-white bg-opacity-20 p-2 rounded-full text-3xl'></FaTwitter>
                    </Link>
                    <Link>
                        <FaInstagram className='bg-white bg-opacity-20 p-2 rounded-full text-3xl'></FaInstagram>
                    </Link>
                    <Link>
                        <FaLinkedin className='bg-white bg-opacity-20 p-2 rounded-full text-3xl'></FaLinkedin>
                    </Link>
                    
                </div>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link className="link link-hover">Home</Link>
                <Link className="link link-hover">Service</Link>
                <Link className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">Why Car Doctor</Link>
                <Link className="link link-hover">About</Link>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <Link className="link link-hover">Support Center</Link>
                <Link className="link link-hover">Feedback</Link>
                <Link className="link link-hover">Accesbility</Link>
            </div>
        </footer>
    );
};

export default Footer;