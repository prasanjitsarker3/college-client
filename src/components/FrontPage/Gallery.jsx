import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import useCollege from '../../hooks/useCollege';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-teal-500 py-10'>Graduation Gallery </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'>University of Science and Technology</h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/premium-psd/graduates-holding-proudly-mock-up-diploma_23-2148770839.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'>Business and Economics Institute</h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/free-photo/group-students-taking-selfie_23-2148522300.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'>Media and Communication College</h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/premium-photo/working-world-here-we-come-shot-group-students-taking-selfies-with-mobile-phone-graduation-day_590464-12122.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'>Engineering and Technology College
                        </h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/free-photo/graduate-students-wearing-cap-gown_23-2148950539.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'>Law and Justice School</h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative transition duration-200 transform hover:-translate-y-2'>
                    <img src="https://img.freepik.com/free-photo/low-angle-graduated-students_23-2148522181.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                    <div className='bg bg-black bg-opacity-75 px-6 py-4 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity text-center'>
                        <h1 className='mt-12 text-2xl'> Health Sciences University</h1>
                        <p>Congratulations on successfully completing your academic journey! </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;