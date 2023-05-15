import { Link, useLoaderData } from "react-router-dom";
import Facility from "./Facility";
import ReactPlayer from "react-player";
import { createRef, useEffect, useState } from "react";
import { FaArrowRight, FaRegFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
import logoFooter from '../../assets/logoFooter.png'

const ref = createRef()


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const serviceDetails = useLoaderData()
    const {_id, img, title, description, facility, price } = serviceDetails

    // const {} = serviceDetails

    return (
        <section ref={ref} className="py-8 md:py-12 mx-2 md:mx-0">
            <div className="relative">
                <img className="w-full " src="https://i.ibb.co/FKsqmsm/checkout.png" alt="checkout" />
                {/* <div className="bg-black absolute w-ful"></div> */}
                <h3 className="font-bold text-2xl md:text-5xl text-white pl-5 md:pl-24 absolute top-1/3 md:top-1/2">Service Details</h3>
            </div>

            <div className="grid grid-cols-3 gap-6 py-32 ">
                <div className="col-span-2 space-y-7">
                    <img className="rounded-lg w-full" src={img} alt={title} />
                    <h3 className="font-bold text-4xl">{title}</h3>
                    <p className="leading-8 opacity-80">{description}</p>

                    <div className="grid grid-cols-2 gap-5">
                        {
                            facility.map((service, idx) => <Facility
                                key={idx}
                                service={service}
                            ></Facility>)
                        }
                    </div>

                    <p className="leading-8 opacity-80">{description}</p>

                    <div>
                        <h3 className="font-bold text-4xl">3 Simple Steps to Process</h3>
                        <p className="leading-8 opacity-80">{description}</p>

                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="px-10 py-12 border border-black border-opacity-10 rounded-lg text-center">
                            <div className="">
                                <h5 className="font-bold text-2xl bg-root p-3 text-white mx-auto rounded-full border-8 border-root-border inline">01</h5>
                            </div>
                            <h6 className="font-bold text-2xl mt-7">STEP ONE</h6>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className="px-10 py-12 border border-black border-opacity-10 rounded-lg text-center">
                            <div className="">
                                <h5 className="font-bold text-2xl bg-root p-3 text-white mx-auto rounded-full border-8 border-root-border inline">02</h5>
                            </div>
                            <h6 className="font-bold text-2xl mt-7">STEP TWO</h6>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className="px-10 py-12 border border-black border-opacity-10 rounded-lg text-center">
                            <div className="">
                                <h5 className="font-bold text-2xl bg-root p-3 text-white mx-auto rounded-full border-8 border-root-border inline">03</h5>
                            </div>
                            <h6 className="font-bold text-2xl mt-7">STEP THREE</h6>
                            <p>It uses a dictionary of over 200 .</p>
                        </div>
                    </div>

                    <ReactPlayer url="https://youtu.be/VnwXFEO4JHY" width="100%"></ReactPlayer>
                </div>

                <div>
                    {/* Service titles */}
                    <div className="bg-form-bg p-10 rounded-lg">
                        <h3 className="text-2xl font-bold">Services</h3>
                        {
                            services && services.map(service => <div
                                key={service._id}
                            >
                                <div className={`${service.title === title ? 'bg-root text-white' : 'bg-white'}  my-5 p-4 rounded-lg font-bold flex  items-center justify-between`}>
                                    <h6>{service.title}</h6>
                                    <FaArrowRight className="cursor-pointer"></FaArrowRight>
                                </div>
                            </div>)
                        }
                    </div>

                    {/* Dowload Brochure */}
                    <div className="my-8 p-10 bg-black rounded-lg text-white">
                        <h3 className="text-2xl font-bold">Download</h3>
                        <div className="flex items-center my-5">
                            <FaRegFilePdf className="text-3xl"></FaRegFilePdf>
                            <div className="flex-grow pl-4">
                                <h6 className="font-semibold text-lg">Our Brosure</h6>
                                <p className="font-thin">Download</p>
                            </div>
                            <div>
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className='text-pink'>  <FaArrowRight className="text-5xl bg-root p-3 rounded-lg"></FaArrowRight> </button>}
                                </Pdf>
                            </div>
                        </div>

                        <div className="flex items-center my-5">
                            <FaRegFilePdf className="text-3xl"></FaRegFilePdf>
                            <div className="flex-grow pl-4">
                                <h6 className="font-semibold text-lg">Company Details</h6>
                                <p className="font-thin">Download</p>
                            </div>
                            <div>
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className='text-pink'>  <FaArrowRight className="text-5xl bg-root p-3 rounded-lg"></FaArrowRight> </button>}
                                </Pdf>
                            </div>
                        </div>
                    </div>

                    {/* Checkout */}
                    <div className="my-8 p-12 bg-black rounded-lg text-white text-center">
                        <img src={logoFooter} alt={logoFooter} className="mx-auto" />
                        <h5 className="font-semibold text-lg">Need Help? We Are Here To Help You</h5>

                        <div className="relative">
                            <div className="bg-white rounded-lg pt-5 px-10 pb-10 text-black">
                                <h6 className="font-bold text-xl"><span className="text-root">Car Doctor</span> Special <br /> <small>Save up to <span className="text-root">60% off</span></small> </h6>
                            </div>

                            <div className="-mt-7"><button className="bg-root py-4 px-7 rounded-lg">Get A Quote</button></div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold">Price : ${price}</h2>

                    <Link to={`/checkout/${_id}`}>
                        <button className="form-submit-btn mt-8 font-bold text-lg">Proceed Checkout</button>
                    </Link>
                </div>


            </div>
        </section>
    );
};

export default Services;