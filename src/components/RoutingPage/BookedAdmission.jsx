import React, { useContext } from 'react';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const BookedAdmission = ({ admission, setAdmission }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const userData = { name: data.name, email: data.email, subject: data.subject, date: data.date, phone: data.phone, photo: data.photo, college: admission.college_name, admissionDate: admission.admission_dates.fall }
        fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setAdmission(null);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Successfully Added College',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="py-3 text-center font-serif text-2xl">{admission.college_name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} method="get">
                        <input type="text" name="name" {...register("name", { required: true })} defaultValue={user?.displayName || user?.name} placeholder="Enter name" className="input input-bordered input-info w-full" />
                        <input type="email" name="email" {...register("email", { required: true })} defaultValue={user?.email} placeholder="Enter Email" className="input input-bordered input-info w-full" />
                        <select className="input input-bordered input-info w-full" {...register("subject", { required: true })}>
                            <option value="Computer">Computer</option>
                            <option value="Civil">Civil</option>
                            <option value="Electrical">Electrical</option>
                        </select>
                        <input type="text" name="phone" {...register("phone", { required: true })} placeholder="Enter Phone Number" className="input input-bordered input-info w-full" />
                        <input type="date" name="date" {...register("date", { required: true })} placeholder="Enter Date" className="input input-bordered input-info w-full" />
                        <input type="photo" name="photo" {...register("photo", { required: true })} placeholder="Enter Photo URL" className="input input-bordered input-info w-full" />
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white w-full mx-auto my-3">Appointment</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookedAdmission;