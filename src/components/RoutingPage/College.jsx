import { useState } from "react";
import useCollege from "../../hooks/useCollege";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const College = () => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [allCollege, isLoading] = useCollege();

    const showModal = (college) => {
        setSelectedCollege(college);
        const modal = document.getElementById("my_modal_4");
        if (modal) {
            modal.showModal();
        }
    };

    const hideModal = () => {
        setSelectedCollege(null);
        const modal = document.getElementById("my_modal_4");
        if (modal) {
            modal.close();
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center py-3">
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
            </div>
        );
    }

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                {allCollege.map((college) => (
                    <div key={college.id}>
                        <div className="card shadow-md mx-auto">
                            <figure className="px-5 pt-5">
                                <img
                                    src={college.college_image}
                                    alt="Shoes"
                                    className="rounded-xl h-[200px]"
                                />
                            </figure>
                            <div className="">
                                <h2 className="text-2xl text-center p-0 m-0">
                                    {college.college_name}
                                </h2>
                                <div>
                                    <p className="text-xl pl-3 text-center">
                                        Research Of College: 4 Paper
                                    </p>
                                    {college.research_works.slice(0, 1).map((research) => (
                                        <div key={research}>
                                            <li className="text-left pl-3 text-lg">
                                                {research}...
                                            </li>
                                        </div>
                                    ))}
                                    <h1 className="tex-left pl-3 text-lg">
                                        Admission: {college.admission_dates?.fall}
                                    </h1>
                                    <div className="flex justify-center">
                                        <Rating
                                            className="text-center"
                                            style={{ maxWidth: 120 }}
                                            value={college.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="card-actions w-full md:px-4 py-3 px-7">
                                    <button
                                        onClick={() => showModal(college)}
                                        className="btn btn-primary w-full"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* The modal component */}
            {selectedCollege && (
                <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-3xl text-teal-500 py-5 text-center">
                            {selectedCollege.college_name}
                        </h3>
                        <div>
                            <div className="grid md:grid-cols-2">
                                {
                                    selectedCollege.events.map(event => <div className="border bg-base-200 p-5 shadow-md" key={event}>
                                        <p className="text-2xl text-teal-500">Event Name: {event.event_name}</p>
                                        <p className="text-xl">Event Date: {event.date}</p>
                                        <p className="text-xl">Location: {event.location}</p>
                                    </div>)
                                }
                            </div>
                            <div className="border bg-base-200 p-5 shadow-md">
                                <h1 className="text-center text-2xl text-teal-500">Sports:</h1>
                                <div className="md:flex justify-center">
                                    {
                                        selectedCollege.sports_categories.map(sport => <li className="text-xl text-left" key={sport}>{sport}  </li>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn" onClick={hideModal}>
                                Close
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default College;
