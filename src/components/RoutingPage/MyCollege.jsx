import React, { useContext, useState } from 'react';
import useMyCollege from '../../hooks/useMyCollege';
import { Controller, useForm } from 'react-hook-form';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import Swal from 'sweetalert2';

const MyCollege = () => {
    const [myColleges, refetch, isLoading] = useMyCollege();
    const { user } = useContext(AuthContext)

    const handleCloseModal = () => {
        const modal = document.getElementById('my_modal_1');
        modal.close();
    };
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            rating: 0,
        },
    });

    function onSubmit(data) {
        const feedbackData = { name: data.name, message: data.message, rating: data.rating }
        fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    const modal = document.getElementById('my_modal_1');
                    modal.close();
                    Swal.fire({
                        title: 'Thank You For Your Feedback !',
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
        <div>
            <h1 className='text-center py-5 text-3xl font-sans text-teal-500'>My College Section</h1>
            <div>
                {myColleges.map((college, index) => (
                    <div key={college._id}>
                        <div className='grid md:grid-cols-5 gap-3 bg-base-200 font-semibold  m-3 p-5'>
                            <div className='flex gap-3'>
                                {index + 1}
                                <h1>{college.name}</h1>
                            </div>
                            <h1>{college.college}</h1>
                            <p>{college.subject}</p>
                            <p>{college.admissionDate}</p>
                            <button onClick={() => window.my_modal_1.showModal()} className='btn btn-primary'>review</button>
                        </div>
                    </div>
                ))}
            </div>
            <>
                <dialog id="my_modal_1" className="modal">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog get" className="modal-box" >
                        <input type="text" id="name" {...register("name", { required: true })} required defaultValue={user?.displayName || user?.name} placeholder="Enter name" className="input input-bordered input-info w-full " />
                        <textarea {...register("message")} placeholder="Your Feedback" required className="input input-bordered input-info w-full my-3" />


                        <div className='flex justify-between gap-5'>
                            <div className='text-2xl ' id="rating_label">Rating</div>
                            <Controller
                                control={control}
                                name="rating"
                                rules={{
                                    validate: (rating) => rating > 0,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={value}
                                        isRequired
                                        onChange={onChange}
                                        visibleLabelId="rating_label"
                                        onBlur={onBlur}
                                    />
                                )}
                            />
                            {errors.rating && <div>Rating is required.</div>}
                        </div>

                        <div className="mt-3 flex justify-center gap-5">
                            <button type='submit' className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-primary" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </form>
                </dialog>
            </>
        </div>
    );
};

export default MyCollege;
