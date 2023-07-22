import { useLoaderData } from "react-router-dom";

const PopularCollegeDetails = () => {
    const colleges = useLoaderData();
    const { college_image, college_name, research_history, admission_process, admission_dates, research_works, events, sports_categories } = colleges;
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 p-5">
                <img src={college_image} alt="" className="md:w-[500px]" />
                <div className="px-5">
                    <h1 className="text-3xl text-center">{college_name}</h1>
                    <h1 className="text-lg font-sans py-2">{research_history}</h1>
                    <h1> <span className="text-teal-500 text-xl">Research Work</span>:{research_works}</h1>
                    <h1> <span className="text-teal-500 text-xl">Admission Process</span>:{admission_process}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 py-5">
                <div className="border bg-base-200 p-5 shadow-md">
                    <h1 className="text-2xl text-teal-500">Admission Opening:</h1>
                    <li className="text-xl">Fall: {admission_dates?.fall}</li>
                    <li className="text-xl">Spring: {admission_dates?.spring}</li>
                </div>
                <div className="grid ">
                    {
                        events.map(event => <div className="border bg-base-200 p-5 shadow-md" key={event}>
                            <p className="text-2xl text-teal-500">Event Name: {event.event_name}</p>
                            <p>Event Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                        </div>)
                    }
                </div>
                <div className="border bg-base-200 p-5 shadow-md">
                    <h1 className="text-center text-2xl text-teal-500">Sports:</h1>
                    <div>
                        {
                            sports_categories.map(sport => <li className="text-xl" key={sport}>{sport}</li>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularCollegeDetails;