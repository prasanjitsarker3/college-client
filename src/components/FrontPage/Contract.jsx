import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthenticationPage/AuthProvider';

const Contract = () => {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState('');

    const handleSubmitFeedBack = (event) => {
        event.preventDefault();
        setEmail('');
        setSubject('');
        setMessage('');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You,For Your Feedback',
            showConfirmButton: false,
            timer: 1500
        })
    };
    return (
        <div className='bg-base-200 py-8 overflow-hidden'>
            <div className='text-center'>
                <h1 className='textColor text-3xl font-serif py-5'>Reviews and feedback about specific Colleges.</h1>
            </div>
            <div className='flex justify-center items-center '>
                <form className='flex-col justify-center items-center md:px-1 px-10 w-full md:w-1/2 mx-auto'>
                    <input


                        type='email'
                        placeholder='Email...'
                        className='input input-bordered w-full mt-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        required
                        type='text'
                        placeholder='College Name'
                        className='input input-bordered w-full my-5'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <br />
                    <textarea
                        required
                        placeholder='Feedback Message...'
                        className='textarea textarea-bordered w-full'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <br />
                    <button onClick={handleSubmitFeedBack} type='submit' className='btn bg-[#19D3AE] hover:bg-[#34bea3] w-full'>
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contract;