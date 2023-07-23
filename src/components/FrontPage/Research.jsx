import React, { useEffect, useState } from 'react';

const Research = () => {
    const [research, setResearch] = useState([])
    useEffect(() => {
        fetch("research.json")
            .then(res => res.json())
            .then(data => setResearch(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-12'>Research Paper</h1>
            <div className='grid md:grid-cols-3 gap-3 py-10'>
                {
                    research.map(res => <div key={res} className="bg-white shadow-lg rounded-lg overflow-hidden p-5">

                        <div className=" text-center">
                            <p className="text-2xl">{res.paper_name}</p>
                        </div>
                        <h1 className='text-2xl text-teal-500 text-center py-2'>Research: {res.research_student}</h1>
                        <p className='text-center '>{res.research_about}</p>
                        <div className='flex justify-center gap-5 py-3'>
                            <button className='btn btn-primary'>
                                <a href={res.paper_link}>Paper Link</a>
                            </button>
                            <button className='btn btn-primary'>
                                <a href={res.research_web_site_link}>Paper Web Site</a>
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Research;