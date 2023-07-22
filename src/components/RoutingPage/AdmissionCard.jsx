
const AdmissionCard = ({ college,setAdmission }) => {
    const { college_image, college_name, admission_dates } = college;

    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title md:text-2xl text-3xl text-teal-500">{college_name}</h2>
                <div>
                    <h1 className="text-center text-2xl ">Admission</h1>
                    <h1 className="md:text-lg text-xl"> Fall: {admission_dates?.fall}</h1>
                    <h1 className="md:text-lg text-xl"> Spring: {admission_dates?.spring}</h1>
                </div>
                <div className="card-actions w-full justify-center">
                    <label htmlFor="booking-modal" onClick={() => setAdmission(college)} className="btn btn-primary w-full">Admission</label>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCard;