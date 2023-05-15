import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../context/AuthProvider";
import BookingsRow from './BookingsRow';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const URL = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
            })
    }, [])

    // console.log(bookings);

    // Update Booking Handler
    const handlerConfirm = _id => {
        console.log(_id);

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount === 1) {
                    const remaining = bookings.filter(booking => booking._id !== _id)
                    const updated = bookings.find(booking => booking._id === _id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
    }

    // Delete Bookings Handler
    const handlerDeleteBooking = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {

                        const remaining = bookings.filter(booking => booking._id !== _id)
                        setBookings(remaining);
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <section className=''>
            <div className="relative mt-12">
                <img className="w-full " src="https://i.ibb.co/FKsqmsm/checkout.png" alt="checkout" />
                {/* <div className="bg-black absolute w-ful"></div> */}
                <h3 className="font-bold text-2xl md:text-5xl text-white pl-5 md:pl-24 absolute top-1/3 md:top-1/2">Check out</h3>
            </div>
            <div className="overflow-x-auto w-full my-32">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> Remove
                            </th>
                            <th>Service Details</th>
                            <th>User Details</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                bookings={bookings}
                                handlerConfirm={handlerConfirm}
                                handlerDeleteBooking={handlerDeleteBooking}
                                setBookings={setBookings}
                            ></BookingsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default Bookings;