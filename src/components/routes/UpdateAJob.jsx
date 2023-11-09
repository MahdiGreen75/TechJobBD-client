import { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { FaRegHandPeace } from 'react-icons/fa';
import { BsCalendar2Date } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { GoInfo } from 'react-icons/go';
//react datepicker
import { useState } from "react";
import DatePicker from "react-datepicker";
// import toast, { Toaster } from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAJob = () => {
    const navigate = useNavigate();
    const location1 = useLocation();
    const [skills, setSkills] = useState([1]);
    const [responses, setResponses] = useState([1]);
    const [skillsArr, setSkillsArr] = useState([]);
    const [responsesArr, setResponsesArr] = useState([]);
    const [benifits, setBenifits] = useState([1]);
    const [benifitsArr, setBenifitsArr] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const jobDescriptionRef = useRef();
    const companyNameRef = useRef();
    const radioRef1 = useRef();
    const radioRef2 = useRef();
    const radioRefWorkHour1 = useRef();
    const radioRefWorkHour2 = useRef();
    const reqSkillsRef = useRef();
    const benifitsRef = useRef();
    const responsesRef = useRef();
    const uniqueId = useRef(1017);
    const [jobPostingDate, setJobPostingDate] = useState(new Date());
    const [applyDeadline, setApplyDeadline] = useState(new Date());
    const { user } = useContext(AuthContext);

    //destructuring the default values
    const {
        company_history, description, education_requirements, experience_level
        , job_title, location, salary_range, team_size, _id,
    } = location1.state;

    useEffect(() => {
        uniqueId.current = 1017; // Initialize on the first render
    }, []);

    const onSubmitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName?.value;
        const jobTitle = form.jobTitle?.value;
        //job posting date
        const jobPostDate = `${+jobPostingDate.getFullYear()}-${+jobPostingDate.getMonth() + 1}-${+jobPostingDate.getDate()}`;

        //application deadline
        const jobApplyDate = `${+applyDeadline.getFullYear()}-${+applyDeadline.getMonth() + 1}-${+applyDeadline.getDate()}`;

        const sallery = form.sallery?.value;
        const teamSize = form.teamSize?.value;
        const location = form.location?.value;
        const eduDegree = form.eduDegree?.value;
        const experienceLevel = form.experienceLevel?.value;
        const jobDescription = jobDescriptionRef.current.value;
        const companyName = companyNameRef.current.value;
        const salleryIncrement = radioRef1.current.checked;
        const workHours = radioRefWorkHour1.current.checked ? "Full Time" : "Part Time";
        const requiredResponsibilities = responsesArr;
        const extraBenifits = benifitsArr;
        const requiredSkills = skillsArr;
        // console.log(userName, jobTitle,jobPostDate,jobApplyDate,teamSize, location, eduDegree, sallery,experienceLevel,jobDescription,companyName,salleryIncrement,workHours, requiredResponsibilities, requiredSkills, extraBenifits);
        const formData = {
            "job_setter_name": userName,
            "job_setter_email": user?.email,
            "job_poster_email": user?.displayName,
            "job_title": jobTitle,
            "job_post_id": uniqueId.current++,
            "job_posting_date": jobPostDate,
            "application_deadline": jobApplyDate,
            "salary_range": sallery,
            "description": jobDescription,
            "yearly_salary_increment": salleryIncrement,
            "location": location,
            "required_skills": purifyTheArray(requiredSkills),
            "experience_level": experienceLevel,
            "education_requirements": eduDegree,
            "benefits_package": purifyTheArray(extraBenifits),
            "work_hours": workHours,
            "responsibilities": purifyTheArray(requiredResponsibilities),
            "team_size": teamSize,
            "company_history": companyName
        }
        // console.log(formData);
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount) {
                    navigate("/myJobs")
                }
            })
        form.reset();
    }


    //utility functions
    function purifyTheArray(array) {
        return array.filter(item => item !== null && item !== undefined && item !== "");
    }

    //dynamic skills adding
    // console.log(skillsArr);
    const addSkills = () => {
        const value = reqSkillsRef.current?.value;
        setSkillsArr([...skillsArr, value]);
        setSkills([...skills, 1])
    }

    const doneAddingSkills = () => {
        const value = reqSkillsRef.current?.value;
        setSkillsArr([...skillsArr, value]);
        setSkills([1]);
    }
    // dynamic benifits adding
    // console.log(benifitsArr);
    const addBenifits = () => {
        const value = benifitsRef.current?.value;
        setBenifitsArr([...benifitsArr, value]);
        setBenifits([...benifits, 1])
    }

    const doneAddingBenifits = () => {
        const value = benifitsRef.current?.value;
        setBenifitsArr([...benifitsArr, value]);
        setBenifits([1]);
    }
    // dynamic responses adding
    // console.log(responsesArr);
    const addResponses = () => {
        const value = responsesRef.current?.value;
        setResponses([...responses, 1])
        setResponsesArr([...responsesArr, value]);
    }

    const doneAddingResponses = () => {
        const value = responsesRef.current?.value;
        setResponsesArr([...responsesArr, value]);
        setResponses([1]);
    }

    return (
        <div>
            <div className="border border-transparent my-5"></div>
            {/*SignUp Form  */}
            <div className="h-full w-min mx-auto p-5 bg-white border rounded-md space-y-5 shadow-xl">
                <h1 className="text-center font-semibold text-base flex flex-col items-center">
                    <span className="flex justify-center gap-1 ">
                        <FaRegHandPeace className="text-2xl text-orange-400"></FaRegHandPeace><span>
                            Hey, {user?.displayName}!
                        </span>
                    </span>
                    <span>Let's update this job post.</span>
                </h1>
                <form className="space-y-2 w-[800px] mx-auto" onSubmit={onSubmitHandler}>
                    <div className="flex flex-col gap-5">
                        {/* static portion of the form */}
                        <div className="space-y-3 p-5 border rounded-md shadow-xl">
                            <div>
                                <label htmlFor="jobCategory">
                                    <p className="text-xs font-semibold text-gray-800">Job Category</p>
                                    <input type="text" name="userName" id="jobCategory" placeholder="Enter the category of the job" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="jobTitle">
                                    <p className="text-xs font-semibold text-gray-800">Job Title</p>
                                    <input type="text" defaultValue={job_title} name="jobTitle" id="jobTitle" placeholder="Enter the job title. Like Web developer." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">Job Posting Date</p>
                                <div className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2">
                                    <span className="flex gap-1">
                                        <BsCalendar2Date className="text-xl"></BsCalendar2Date>
                                        <DatePicker
                                            selected={jobPostingDate}
                                            onChange={(date) => setJobPostingDate(date)}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">Application Deadline</p>
                                <div className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2">
                                    <span className="flex gap-1">
                                        <BsCalendar2Date className="text-xl"></BsCalendar2Date>
                                        <DatePicker
                                            selected={applyDeadline}
                                            onChange={(date) => setApplyDeadline(date)}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="sallery">
                                    <p className="text-xs font-semibold text-gray-800">Sallery</p>
                                    <input type="text" defaultValue={salary_range} name="sallery" id="sallery" placeholder="Enter the estimated sallery for the post." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="teamSize">
                                    <p className="text-xs font-semibold text-gray-800">Team Size</p>
                                    <input type="number" defaultValue={team_size} name="teamSize" id="teamSize" placeholder="Total Employee in the team" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="location">
                                    <p className="text-xs font-semibold text-gray-800">Office Location</p>
                                    <input type="text" defaultValue={location} name="location" id="location" placeholder="Enter the location of the company." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="eduDegree">
                                    <p className="text-xs font-semibold text-gray-800">Educational Requirements</p>
                                    <input defaultValue={education_requirements} type="text" name="eduDegree" id="eduDegree" placeholder="Enter educational degree" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="experienceLevel">
                                    <p className="text-xs font-semibold text-gray-800">Experience Level</p>
                                    <input defaultValue={experience_level} type="text" name="experienceLevel" id="experienceLevel" placeholder="Enter the location of the company." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">Yearly sallery increment?</p>
                                <div className="flex items-center gap-2">
                                    <label className="flex items-center">
                                        <input type="radio" ref={radioRef1} name="salleryIncrement" value="YES" />
                                        <span className="text-xs font-bold ml-1">YES</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" ref={radioRef2} name="salleryIncrement" value="NO" />
                                        <span className="text-xs font-bold ml-1">NO</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">What will be the work hours?</p>
                                <div className="flex items-center gap-2">
                                    <label className="flex items-center">
                                        <input type="radio" ref={radioRefWorkHour1} name="workHour" value="Full Time" />
                                        <span className="text-xs font-bold ml-1">Full Time</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" ref={radioRefWorkHour2} name="workHour" value="Part Time" />
                                        <span className="text-xs font-bold ml-1">Part Time</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="jobDescriptionRef">
                                    <p className="text-xs font-semibold text-gray-800">Write the job description</p>
                                    <textarea defaultValue={description} placeholder="Try to make 50 words here!" ref={jobDescriptionRef} className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" name="jobDescriptionRef" id="jobDescriptionRef"></textarea>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="companyNameRef">
                                    <p className="text-xs font-semibold text-gray-800">Write the Company name and history.</p>
                                    <textarea defaultValue={company_history} ref={companyNameRef} placeholder="Like this format: CompanyName, is the trusted brand for international servers..." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" name="companyNameRef" id="companyNameRef"></textarea>
                                </label>
                            </div>
                        </div>
                        {/* dynamic portion of the form */}
                        <div className=" space-y-5">
                            {/* Required skills section */}
                            <div className="p-5 border rounded-md shadow-lg ">
                                {
                                    skills.map((item, index) => <>
                                        <label key={index} htmlFor="reqSkills" onClick={() => { setShowInfo(true); }}>
                                            <p className="text-xs font-semibold text-gray-800">Required Skills</p>
                                            <div className="flex items-center gap-1">
                                                <input ref={reqSkillsRef} type="text" name="reqSkills" id="reqSkills" placeholder="Enter Required skills one by one." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                                <span onClick={addSkills} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><AiOutlinePlusCircle className="text-2xl"></AiOutlinePlusCircle></span>
                                                <span onClick={doneAddingSkills} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><IoCheckmarkDoneCircleOutline className="text-2xl"></IoCheckmarkDoneCircleOutline></span>
                                            </div>
                                            {showInfo && <>
                                                <p className="text-xs font-semibold text-gray-800 flex justify-start gap-1 my-1"><GoInfo className="text-lg text-blue-600"></GoInfo><span>Click on + sign to add more. After done, press on the tick sign.</span></p>
                                            </>}
                                        </label>
                                    </>)
                                }
                            </div>
                            {/* benifits package section */}
                            <div className="p-5 border rounded-md shadow-lg ">
                                {
                                    benifits.map((item, index) => <>
                                        <label key={index} htmlFor="reqSkills" onClick={() => { setShowInfo(true); }}>
                                            <p className="text-xs font-semibold text-gray-800">Set Extra Benifits</p>
                                            <div className="flex items-center gap-1">
                                                <input ref={benifitsRef} type="text" name="reqSkills" id="reqSkills" placeholder="Enter benifits packages one by one." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                                <span onClick={addBenifits} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><AiOutlinePlusCircle className="text-2xl"></AiOutlinePlusCircle></span>
                                                <span onClick={doneAddingBenifits} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><IoCheckmarkDoneCircleOutline className="text-2xl"></IoCheckmarkDoneCircleOutline></span>
                                            </div>
                                            {showInfo && <>
                                                <p className="text-xs font-semibold text-gray-800 flex justify-start gap-1 my-1"><GoInfo className="text-lg text-blue-600"></GoInfo><span>Click on + sign to add more. After done, press on the tick sign.</span></p>
                                            </>}
                                        </label>
                                    </>)
                                }
                            </div>
                            {/* job holder responsibilities section */}
                            <div className="p-5 border rounded-md shadow-lg ">
                                {
                                    responses.map((item, index) => <>
                                        <label key={index} htmlFor="reqSkills" onClick={() => { setShowInfo(true); }}>
                                            <p className="text-xs font-semibold text-gray-800">Add Responsibilities for the job post</p>
                                            <div className="flex items-center gap-1">
                                                <input ref={responsesRef} type="text" name="reqSkills" id="reqSkills" placeholder="Enter job responsibilities one by one." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                                <span onClick={addResponses} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><AiOutlinePlusCircle className="text-2xl"></AiOutlinePlusCircle></span>
                                                <span onClick={doneAddingResponses} className="flex items-center gap-1 p-2 bg-blue-500 rounded-md text-white text-xs hover:bg-blue-700 active:bg-blue-800 "><IoCheckmarkDoneCircleOutline className="text-2xl"></IoCheckmarkDoneCircleOutline></span>
                                            </div>
                                            {showInfo && <>
                                                <p className="text-xs font-semibold text-gray-800 flex justify-start gap-1 my-1"><GoInfo className="text-lg text-blue-600"></GoInfo><span>Click on + sign to add more. After done, press on the tick sign.</span></p>
                                            </>}
                                        </label>
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Update" className="px-4 py-2 
            bg-blue-500 hover:bg-blue-700 
            active:bg-blue-900 duration-500 rounded 
            text-white outline-none w-full "/>
                </form>
            </div>

            <div className="border border-transparent my-5"></div>
        </div>
    );
};

export default UpdateAJob;
