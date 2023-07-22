import PopularCollege from "./PopularCollege";

const Home = () => {
    return (
        <div className='px-3'>
            <div className="carousel w-full py-2 md:h-[500px] h-[700px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/premium-photo/view-metcalfe-park-sydney_261932-2159.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-4 pl-12 w-1/2 '>
                            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif w-full'>University of Science and Technology</h2>
                            <p className='font-serif'>The University of Science and Technology is a premier institution dedicated to providing cutting-edge education and research in the fields of science and technology. With state-of-the-art facilities and renowned faculty, we strive to nurture the next generation of innovators and leaders.</p>
                            <p>123 Main Street, Cityville, State, Country</p>
                            <div className="flex">
                                <button className="btn btn-warning mr-4">Admission</button>
                                <button className="btn btn-outline btn-success">Campus</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/large-building-with-sign-that-says-university-arts-it_912113-25581.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-4 pl-12 w-1/2 '>
                            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif w-full'>Arts and Humanities College</h2>
                            <p className='font-serif'>The Arts and Humanities College is committed to fostering creativity and critical thinking in the arts, literature, history, and culture. Our diverse curriculum encourages students to explore their passions and develop a deeper understanding of the human experience.</p>
                            <p>456 Park Avenue, Townsville, State, Country</p>
                            <div className="flex">
                                <button className="btn btn-warning mr-4">Admission</button>
                                <button className="btn btn-outline btn-success">Campus</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-4 pl-12 w-1/2 '>
                            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif w-full'>Business and Economics Institute</h2>
                            <p className='font-serif'>The Business and Economics Institute offers comprehensive programs in business administration, finance, economics, and entrepreneurship. Our graduates are equipped with the skills and knowledge to excel in the global business landscape..</p>
                            <p>456 Park Avenue, Townsville, State, Country</p>
                            <div className="flex">
                                <button className="btn btn-warning mr-4">Admission</button>
                                <button className="btn btn-outline btn-success">Campus</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/new-house-with-garden-rural-area_1127-11115.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-4 pl-12 w-1/2 '>
                            <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif w-full'>Business and Economics Institute</h2>
                            <p className='font-serif'>The Business and Economics Institute offers comprehensive programs in business administration, finance, economics, and entrepreneurship. Our graduates are equipped with the skills and knowledge to excel in the global business landscape..</p>
                            <p>456 Park Avenue, Townsville, State, Country</p>
                            <div className="flex">
                                <button className="btn btn-warning mr-4">Admission</button>
                                <button className="btn btn-outline btn-success">Campus</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <PopularCollege></PopularCollege>
            </div>
        </div>
    );
};

export default Home;