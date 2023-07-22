import React from 'react';

const BookedAdmission = ({ admission, setAdmission }) => {
    const handleBooking=()=>{

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="py-3 text-center font-serif text-2xl">Name</h3>
                    <form onSubmit={handleBooking} method="get">
                        <input name="date" type="text"  className="input input-bordered input-info w-full " />
                        {/* <select name="slot" className="select select-info w-full my-3">
                            {
                                specialties.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select> */}

                        <input name="name" required  type="text" placeholder="Your Name" className="input input-bordered input-info w-full " />
                        <input name="email" required  disabled type="email" placeholder="Your Email" className="input input-bordered input-info w-full my-3" />
                        <input name="phone" required type="text" placeholder="Phone Number" className="input input-bordered input-info w-full " />
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white w-full mx-auto my-3">Appointment</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookedAdmission;