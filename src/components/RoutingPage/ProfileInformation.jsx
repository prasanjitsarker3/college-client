import React, { useContext } from 'react';
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const ProfileInformation = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className='text-center p-5 bg-base-200 m-12 text-xl space-y-3'>
            <h1>User Information Section</h1>
            <h1>Name:{user?.displayName}</h1>
            <h1>Email:{user?.email}</h1>
        </div>
    );
};

export default ProfileInformation;