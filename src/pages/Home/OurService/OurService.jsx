import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurService = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="text-center md:w-7/12 mx-5 md:mx-auto">
                <p className="text-root font-bold md:pb-5">About Us</p>
                <h1 className="text-3xl lg:text-5xl font-bold md:pb-7 ">Our Service Area</h1>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-5 md:my-12 mx-5 md:mx-0">
                {
                    services && services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="mb-12 flex justify-center">
                <button className="my-btn-outline mx-auto">More Services</button>

            </div>
        </div>
    );
};

export default OurService;