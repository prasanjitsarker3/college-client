import React from 'react';
import useUsers from '../../hooks/useUsers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [UserInfo, refetch] = useUsers();
    const navigate=useNavigate();
    const id = UserInfo._id;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const upDateInfo = { college: data.college, address: data.address }
        fetch(`http://localhost:5000/updateData/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upDateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    navigate("/profile")
                }

            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:px-12 mx-auto border shadow-lg grid md:grid-cols-2 gap-5 m-12">

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-serif">Email</span>
                </label>
                <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-serif">Name</span>
                </label>
                <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Name" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-serif">University</span>
                </label>
                <input type="text" name="college" {...register("college", { required: true })} placeholder="Enter University" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg font-serif">Address</span>
                </label>
                <input type="text" name="address" {...register("address", { required: true })} placeholder="Enter Address" className="input input-bordered" />

            </div>
            <div className="form-control mt-4 flex justify-center">
                <button type="submit" className="btn btn-primary">Update Information</button>
            </div>
        </form>

    );
};

export default UpdateProfile;