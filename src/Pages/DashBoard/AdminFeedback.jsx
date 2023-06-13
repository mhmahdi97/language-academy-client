import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminFeedback = () => {
    const courseData = useLoaderData();
    const {slogan, _id} = courseData;
    

    const handleFeedback = (event) =>{
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        const sendFeedback = {
            feedback: feedback
        }

        fetch(`http://localhost:5000/courses/feedback/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendFeedback)
        } )
        .then(res =>  res.json())
        .then (data => {
            console.log(data)
            if (data.modifiedCount) {
                Swal.fire({
                    title: 'Succes!',
                    text: 'Feedback Sent Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className='flex w-full h-screen items-center justify-center' >
            <form onSubmit={handleFeedback}>
                <div className='border'>
                    <h1 className='text-4xl mb-4'>Give Feedback to {slogan} course:</h1>
                    <div className=' border'>
                        <textarea name='feedback' placeholder="Feedback" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                    <button className='btn bg-gray-200 text-center'>Give Feedback</button>
                </div>
            </form>
        </div>
    );
};

export default AdminFeedback;