import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Banner = () => {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1500" className="carousel w-full  text-white ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/8N6g7LG/1.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide2" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/V3KkB7h/2.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide3" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/948wqfz/3.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide4" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/b3f63CG/4.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide5" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/bRWs0cH/5.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide6" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/7v0rybL/6.jpg" className="w-full h-[400px] lg:h-[600px] rounded lg:rounded-lg" alt="banner" />
                <div className="absolute bg-gradient-to-r from-[#151515] flex items-center rounded lg:rounded-lg h-full w-full text-center md:text-left">
                    <div className=" md:w-5/12 bottom-0 space-y-3 lg:space-y-7 lg:pl-28 mx-5 lg:mx-0">
                        <h2 className="text-3xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="btn-group space-x-5 ">
                            <button className="bg-root border border-root px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-transparent hover:border hover:text-root">Discover More</button>
                            <button className="border px-3 lg:px-5 py-2 lg:py-4 rounded font-semibold hover:bg-root hover:border-root">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" ><FaArrowLeft className="bg-black bg-opacity-60 p-2.5 text-4xl text-white rounded-full"></FaArrowLeft></a>
                    <a href="#slide1" ><FaArrowRight className="bg-root p-2.5 text-4xl text-white rounded-full"></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;