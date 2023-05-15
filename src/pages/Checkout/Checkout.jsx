import { useLoaderData } from "react-router-dom";
import FormCheckout from "./FormCheckout";

const Checkout = () => {

    const serviceData = useLoaderData()

    return (
        <>
            <section className="py-8 md:py-12 mx-2 md:mx-0">
                <div className="relative">
                    <img className="w-full " src="https://i.ibb.co/FKsqmsm/checkout.png" alt="checkout" />
                    {/* <div className="bg-black absolute w-ful"></div> */}
                    <h3 className="font-bold text-2xl md:text-5xl text-white pl-5 md:pl-24 absolute top-1/3 md:top-1/2">Check out</h3>
                </div>

                <h3 className="text-center text-3xl font-bold mt-5 md:mt-32 md:mb-12">Book Service: {serviceData.title}</h3>
                <FormCheckout serviceData={serviceData}></FormCheckout>
            </section>
        </>
    );
};

export default Checkout;