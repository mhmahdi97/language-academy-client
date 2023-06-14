import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: "", role: "user" }
                fetch('https://b712-summer-camp-server-side-mhmahdi97.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'User Login Successfull!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;