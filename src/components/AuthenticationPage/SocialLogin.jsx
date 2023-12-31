import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from './AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignUp } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleGoogleSignUp = () => {
        console.log("Clicked");
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
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