import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegHandPeace } from 'react-icons/fa';
import { BsCalendar2Date } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { GoInfo } from 'react-icons/go';
//react datepicker
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddAJob = () => {
    const [skills, setSkills] = useState([1]);
    const [showInfo, setShowInfo] = useState(false);
    const jobDescriptionRef = useRef();
    const companyNameRef = useRef();
    const radioRef1 = useRef();
    const radioRef2 = useRef();
    const radioRefWorkHour1 = useRef();
    const radioRefWorkHour2 = useRef();
    const reqSkillsRef = useRef();
    const [jobPostingDate, setJobPostingDate] = useState(new Date());
    const [applyDeadline, setApplyDeadline] = useState(new Date());
    const { user } = useContext(AuthContext);

    const onSubmitHandler = e => {

        e.preventDefault();
        console.log(jobDescriptionRef.current.value);
        console.log(companyNameRef.current.value);
        console.log(radioRef1.current.checked, radioRef2.current.checked);
        console.log(radioRefWorkHour1.current.checked, radioRefWorkHour2.current.checked);
    }

    //dynamic skills adding
    const skillsArr = [];
    console.log(skillsArr);
    const addSkills = () => {
        setSkills([...skills, 1])
        const value = reqSkillsRef.current.value;
        skillsArr.push(value);
        console.log(reqSkillsRef.current);
    }

    const doneAddingSkills = () => {
        setSkills([1]);
        const value = reqSkillsRef.current.value;
        skillsArr.push(value);
        console.log(reqSkillsRef.current);
    }

    // console.log(+jobPostingDate.getDate(), +jobPostingDate.getMonth(), +jobPostingDate.getFullYear());
    // console.log(+applyDeadline.getDate(), +applyDeadline.getMonth(), +applyDeadline.getFullYear());
    return (
        <div className="mt-5">
            {/*SignUp Form  */}
            <div className="flex ">
                <div>
                    <div className="h-full w-96 p-5 bg-white border rounded-md space-y-5">
                        <h1 className="text-left font-semibold text-base flex flex-col items-start">
                            <span className="flex justify-center gap-1 ">
                                <FaRegHandPeace className="text-2xl text-blue-400"></FaRegHandPeace><span>
                                    Hey, {user?.displayName}!
                                </span>
                            </span>
                            <span>Want to post  more job roles. </span>
                            <span>Fill the form below.</span>
                        </h1>
                        <form className="space-y-2" onSubmit={onSubmitHandler}>
                            <div>
                                <label htmlFor="jobCategory">
                                    <p className="text-xs font-semibold text-gray-800">Job Category</p>
                                    <input type="text" name="userName" id="jobCategory" placeholder="Enter the category of the job" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="jobTitle">
                                    <p className="text-xs font-semibold text-gray-800">Job Title</p>
                                    <input type="text" name="picLink" id="jobTitle" placeholder="Enter the job title. Like Web developer." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
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
                                    <input type="text" name="sallery" id="sallery" placeholder="Enter the estimated sallery for the post." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="teamSize">
                                    <p className="text-xs font-semibold text-gray-800">Team Size</p>
                                    <input type="number" name="teamSize" id="teamSize" placeholder="Total Employee in the team" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="location">
                                    <p className="text-xs font-semibold text-gray-800">Office Location</p>
                                    <input type="text" name="location" id="location" placeholder="Enter the location of the company." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                {
                                    skills.map((item, index) => <>
                                        <label key={index+item} htmlFor="reqSkills" onClick={() => { setShowInfo(true); }}>
                                            <p className="text-xs font-semibold text-gray-800">Required Skills</p>
                                            <div className="flex items-center gap-1">
                                                <input ref={reqSkillsRef} type="text" name="reqSkills" id="reqSkills" placeholder="Enter the location of the company." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
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
                            <div>
                                <label htmlFor="eduDegree">
                                    <p className="text-xs font-semibold text-gray-800">Educational Requirements</p>
                                    <input type="text" name="eduDegree" id="eduDegree" placeholder="Enter educational degree" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="experienceLevel">
                                    <p className="text-xs font-semibold text-gray-800">Experience Level</p>
                                    <input type="text" name="experienceLevel" id="experienceLevel" placeholder="Enter the location of the company." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
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
                                    <textarea placeholder="Try to make 50 words here!" ref={jobDescriptionRef} className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" name="jobDescriptionRef" id="jobDescriptionRef"></textarea>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="companyNameRef">
                                    <p className="text-xs font-semibold text-gray-800">Write the Company name and history.</p>
                                    <textarea ref={companyNameRef} placeholder="Like this format: CompanyName, is the trusted brand for international servers..." className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" name="companyNameRef" id="companyNameRef"></textarea>
                                </label>
                            </div>
                            <input type="submit" value="Register" className="px-4 py-2 
            bg-blue-500 hover:bg-blue-700 
            active:bg-blue-900 duration-500 rounded 
            text-white outline-none w-full "/>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAJob;
