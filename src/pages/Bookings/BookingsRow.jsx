
const BookingsRow = ({ booking, setBookings, bookings, handlerDeleteBooking, handlerConfirm }) => {

    const { _id, username, phone, email, serviceName, img, price, status } = booking

    // handlerDeleteBooking Alternative System
    // const handlerDeleteBooking = _id => {
    //     console.log(_id);

    //     fetch(`http://localhost:5000/bookings/${_id}`, {
    //         method: "DELETE",
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             const remaining = bookings.filter(booking => booking._id !== _id)
    //             setBookings(remaining);
    //         })
    // }

    return (
        <tr>
            <th>
                <button onClick={() => handlerDeleteBooking(_id)} className="btn btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded">
                            <img src={img} alt={serviceName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="font-bold">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {/* {Booking} */}
                {username}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td >{phone}</td>
            <th>
                {
                    status === 'confirm' ? <button className="btn btn-ghost btn-xs text-green">Confirm</button>
                        : <button onClick={() => handlerConfirm(_id)} className="btn btn-ghost btn-xs text-root">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;