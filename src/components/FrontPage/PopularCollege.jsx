import { Link } from "react-router-dom";
import useCollege from "../../hooks/useCollege";

const PopularCollege = () => {
    const [allCollege, isLoading] = useCollege();
    if (isLoading) {
        return <div className="flex justify-center py-3">
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
        </div>
    }
    return (
        <div>
            <h1 className="text-3xl text-center text-teal-500 py-7">Popular College </h1>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    allCollege.slice(0, 3).map(college => <div key={college._id}>
                        <div className="card shadow-md mx-auto">
                            <figure className="px-5 pt-5">
                                <img src={college.college_image} alt="Shoes" className="rounded-xl h-[200px]" />
                            </figure>
                            <div className="">
                                <h2 className="text-2xl text-center font-serif p-0 m-0">{college.college_name}</h2>
                                <p className=" text-lg text-center py-1">Admission:{college.admission_dates.fall}</p>
                                <p className="px-5 "><span className="text-teal-500">Research</span>: {college.research_history.slice(0, 100)}</p>
                                <div className="flex justify-around gap-3 py-1">
                                    <div>
                                        <p className="text-xl">Events:</p>
                                        <div className="text-left">
                                            {
                                                college.events.slice(0, 2).map(event => <li className="text-left" key={event}>{event.event_name}</li>)
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-2xl">Sports:</p>
                                        <div className="text-left">
                                            {
                                                college.sports_categories.slice(0, 2).map(event => <li className="text-left" key={event}>{event}</li>)
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/collegeDetails/${college._id}`} className="card-actions pb-3 w-full md:px-4 px-7">
                                    <button className="btn btn-primary w-full">Details Info</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularCollege;