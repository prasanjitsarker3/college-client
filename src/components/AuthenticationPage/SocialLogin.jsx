import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from './AuthProvider';

const SocialLogin = () => { 
    const { googleSignUp } = useContext(AuthContext)
    const handleGoogleSignUp = () => {
        console.log("Clicked");
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex justify-center border py-2">
            <FaGoogle onClick={handleGoogleSignUp} className="w-[50px] h-[30px] cursor-pointer"></FaGoogle>
        </div>
    );
};

export default SocialLogin;