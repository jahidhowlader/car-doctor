import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const FormCheckout = ({serviceData}) => {

    // User Information
    const {user} = useContext(AuthContext)
    console.log(serviceData);

    // handlerBookService
    const handlerBookService = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const date = form.date.value
        const booking = {
            username: name,
            phone,
            email,
            date,
            serviceName: serviceData.title,
            service_id: serviceData._id,
            img: serviceData.img,
            price: serviceData.price
        }

        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })

    }
    return (
        <form onSubmit={handlerBookService} className="bg-form-bg p-5 md:p-24 rounded-lg md:space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
                <input type="text" name="name" placeholder="Name" className="input w-full" defaultValue={user?.displayName} required/>
                <input type="date" name="date" id="" className="px-3 rounded-lg w-full" required/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
                <input type="text" name="phone" placeholder="Phone Number" className="input w-full" required/>
                <input type="email" name="email" defaultValue={user.email} placeholder="Email" className="w-full py-3 px-4 border border-border-clr border-opacity-20 rounded-lg" disabled/>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
                <input type="text" name="service" defaultValue={serviceData.title} placeholder="Service Name" className="w-full py-3 px-4 border border-border-clr border-opacity-20 rounded-lg" disabled/>
                <input type="text" name="price" defaultValue={`$ ${serviceData.price}`} placeholder="Price" className="w-full py-3 px-4 border border-border-clr border-opacity-20 rounded-lg" disabled/>
            </div>
            
            {/* <div>
                <textarea name="message" className="w-full mt-6 md:mt-0 rounded-lg p-10" rows="10" ></textarea>
            </div> */}

            <input type="submit" value="Order Confirm" className="form-submit-btn mt-6 md:mt-0" />
        </form>
    );
};

export default FormCheckout;