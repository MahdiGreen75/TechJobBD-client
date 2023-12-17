import { useLocation } from "react-router-dom";
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineProject } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { FcOvertime } from 'react-icons/fc';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { BiSolidInstitution } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { AiFillExperiment } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const ViewDetails = () => {
    const [clickOnce, setClickOnce] = useState(true);
    const { user } = useContext(AuthContext);
    const dataFromLink = useLocation();
    const { job_post_id, job_category, company_history,
        project_scope,
        team_size, responsibilities, work_hours,
        benefits_package,
        education_requirements, experience_level,
        required_skills, salary_range,
        description, job_role, yearly_salary_increment,
        location, application_deadline } = dataFromLink.state;

    const handleApply = () => {
        if (clickOnce) {
            fetch("https://badluck-server.vercel.app/applied-jobs", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ [user.email]: job_post_id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Congratulaions, you have successfully applied to the job.")
                    }
                });
            setClickOnce(false);
        } else {
            toast.error("Hey, you have already applied to the job.")
        }
    }

    return (
        <>
            <div>
                <div className="p-5 border rounded m-5 md:my-5 md:mx-0 shadow-md relative">
                    <div>
                        <p className="font-bold text-xl text-blue-400">{job_category}</p>
                        <h1 className="font-bold text-2xl">{job_role}</h1>
                        <p className="font-light text-sm">{description}</p>
                        <p className="font-light text-sm">{company_history}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-10 mb-4">
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><FcOvertime className="text-xl"></FcOvertime>{work_hours}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><CiLocationOn className="text-xl"></CiLocationOn>{location}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center">You get - {salary_range}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><SlCalender className="text-xl"></SlCalender>Deadline - {application_deadline}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><AiOutlineProject className="text-xl"></AiOutlineProject>{project_scope}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><RiTeamLine className="text-xl"></RiTeamLine> {team_size}</span>
                        <span className="flex text-sm gap-1 bg-blue-500 text-white w-fit px-3 py-1 rounded-md items-center"><FaCircleDollarToSlot className="text-xl"></FaCircleDollarToSlot>Yearly Sallery Increment - {yearly_salary_increment ? "YES" : "NO"}</span>
                    </div>
                    {/* Apply button */}
                    <div className="absolute  left-1/2 transform translate-x-[-50%]">
                        <button onClick={handleApply} className="durantion-300 outline-none flex gap-1 items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-white font-bold text-sm  hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 rounded-md drop-shadow-2xl">
                            <RiHomeOfficeLine className="font-bold text-2xl"></RiHomeOfficeLine><span>Apply</span>
                        </button>
                    </div>
                </div>
                <div className="border border-transparent"></div>
                <div className="flex flex-col sm:flex-row gap-5 m-5 md:my-5 md:mx-0">
                    <div className="flex-1 p-5 border rounded shadow-lg">
                        <h1 className="font-bold text-2xl">Education Requirements & Skills</h1>
                        <span className="flex items-start gap-1 text-sm"><BiSolidInstitution className="text-blue-400 text-2xl"></BiSolidInstitution>{education_requirements}</span>
                        <div className="border w-full my-2"></div>
                        <h1 className="font-bold text-xl">Required Skills</h1>
                        {required_skills.map((skill, index) => <div key={index}>
                            <span className="flex items-center gap-1 text-sm"><TiTick className="text-blue-400 text-2xl"></TiTick>{skill}</span>
                        </div>)}
                        <div className="border w-full my-2"></div>
                        <h1 className="font-bold text-xl">Experience Level</h1>
                        <span className="flex items-center gap-1 text-sm"><AiFillExperiment className="text-blue-400 text-2xl"></AiFillExperiment>{experience_level}</span>
                    </div>
                    <div className="flex-1 p-5 border rounded shadow-lg">
                        <h1 className="font-bold text-xl">Responsibilities</h1>
                        <div className="border w-full my-2"></div>
                        {responsibilities.map((skill, index) => <div key={index}>
                            <span className="flex items-start justify-start gap-1 text-sm"><TiTick className="text-blue-400 text-2xl"></TiTick>{skill}</span>
                        </div>)}
                        <div className="border w-full my-2"></div>
                        <h1 className="font-bold text-xl">Benifits Package</h1>
                        {benefits_package.map((skill, index) => <div key={index}>
                            <span className="flex items-start justify-start gap-1 text-sm"><TiTick className="text-blue-400 text-2xl"></TiTick>{skill}</span>
                        </div>)}
                    </div>
                </div>
                <div className="border border-transparent"></div>
            </div>
            <Toaster />
        </>
    );
};

export default ViewDetails;

