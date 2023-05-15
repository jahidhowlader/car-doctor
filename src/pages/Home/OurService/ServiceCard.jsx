import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const {_id, img, title, price } = service

    return (
        <div data-aos="zoom-in" data-aos-duration="1500" className="border border-black border-opacity-20 p-6 rounded">
            <img className="h-[250px] w-full rounded" src={img} alt={title} />
            <h3 className="font-bold text-2xl pt-3 pb-1">{title}</h3>
            <div className="flex justify-between text-root">
                <p className="font-bold">Price : ${price}</p>
                <Link to={`/services/${_id}`}>
                    <FaArrowRight className="cursor-pointer"></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;