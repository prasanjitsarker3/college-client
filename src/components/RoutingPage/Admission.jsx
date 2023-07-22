import { useState } from "react";
import useCollege from "../../hooks/useCollege";
import AdmissionCard from "./AdmissionCard";
import BookedAdmission from "./BookedAdmission";

const Admission = () => {
    const [allCollege, isLoading] = useCollege();
    const [admission, setAdmission]=useState(null)

    if (isLoading) {
        return <div className="flex justify-center py-3">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 py-5">
                {
                    allCollege.map(college => <AdmissionCard key={college._id}
                        college={college} setAdmission={setAdmission}
                    ></AdmissionCard>)
                }
            </div>
            {
                admission && <BookedAdmission admission={admission} setAdmission={setAdmission}></BookedAdmission>
            }
        </div>
    );
};

export default Admission;