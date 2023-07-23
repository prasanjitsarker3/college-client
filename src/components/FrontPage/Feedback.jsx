import React, { useEffect, useState } from 'react';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = () => {
    const [feedbacks, setFeedback] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/feedback")
            .then(res => res.json())
            .then(data => {
                setFeedback(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-teal-500 font-semibold py-7 mt-7 text-center'>Feedback from Our Valued Users</h1>
            <div className='grid md:grid-cols-3 gap-5 py-7'>
                {
                    feedbacks.slice(0, 3).map(feedback => <div key={feedback} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="avatar flex justify-center pt-4">
                            <div className="w-24 rounded-full">
                                <img className='mx-auto flex justify-center' src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" />
                            </div>
                        </div>
                        {/* <img className="w-full h-32 object-cover" src="" alt="Feedback" /> */}
                        <div className="p-4 text-center">
                            <p className="text-gray-800 text-base">{feedback.message}</p>
                        </div>
                        <div className='flex justify-center pb-3'>
                            <Rating
                                className=" text-center" 
                                style={{ maxWidth: 120 }}
                                value={feedback.rating}
                                readOnly
                            />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;