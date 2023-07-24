import React, { useContext } from 'react';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useUsers from '../../hooks/useUsers';
import { Link } from 'react-router-dom';

const ProfileInformation = () => {
    const [UserInfo, refetch] = useUsers();
    console.log("UserInformation", UserInfo);
    return (
        <div className='text-left p-5 bg-base-200 m-12 text-xl space-y-3'>
            <h1 className='text-center text-3xl text-emerald-500'>User Information Section</h1>
            <h1>Name:   {UserInfo?.name}</h1>
            <h1>Email:   {UserInfo?.email}</h1>
            {
                UserInfo.college && <h1>University:   {UserInfo?.college}</h1>
            }
            {
                UserInfo.address && <h1>Address:   {UserInfo?.address}</h1>
            }
            <Link to="/update" className='btn btn-primary'>Update Information</Link>
        </div>
    );
};

export default ProfileInformation;