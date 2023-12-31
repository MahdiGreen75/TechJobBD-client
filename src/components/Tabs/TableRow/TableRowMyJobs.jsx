import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";


const TableRowMyJobs = (obj) => {
    const { appliedJobs, applicantsCount } = useContext(AuthContext);
    const { benefits_package, company_history, description, education_requirements, experience_level
        , job_setter_email, job_title, location, required_skills, responsibilities, salary_range, team_size, work_hours, yearly_salary_increment, job_poster_email, _id, job_post_id, index, job_posting_date, application_deadline, handleDelete } = obj;
    const { user } = useContext(AuthContext);
    const ViewDetailsObj = { ...obj };
    // console.log(obj);
    return (

        <tr className="bg-white border-b font-light">
            <th scope="row" className="px-6 py-4 text-center text-xs">
                {index + 1}
            </th>
            <td scope="row" className="px-6 py-4 text-xs">
                {user ? job_poster_email : "Admin"}
            </td>
            <td className="px-6 py-4 text-xs">
                {job_title}
            </td>
            <td className="px-6 py-4 text-xs">
                {job_posting_date}
            </td>
            <td className="px-6 py-4 text-xs">
                {application_deadline}
            </td>
            <td className="px-6 py-4 text-xs">
                {salary_range}
            </td>
            <td className="px-6 py-4 text-center text-xs">
                {applicantsCount[+job_post_id] ? applicantsCount[+job_post_id] : 0}
            </td>
            <td className="px-6 py-4 text-center text-xs">
                {
                    new Date(application_deadline).getTime() > Date.now()
                        ?
                        (user?.displayName === job_poster_email)
                            ?
                            <>
                                <button className="text-white text-xs tracking-tighter bg-pink-400 font-bold opacity-70 cursor-not-allowed px-3 py-1 rounded-md ">
                                    Own Post
                                </button>
                            </>
                            :
                            (appliedJobs.includes(job_post_id))
                                ?
                                <>
                                    <button className="text-white text-xs tracking-tighter bg-green-600 font-bold opacity-70 cursor-not-allowed px-3 py-1 rounded-md ">
                                        Applied
                                    </button>
                                </>
                                :
                                <Link to={`/view-details/${job_post_id}`} state={ViewDetailsObj}>
                                    <button className="text-white text-xs tracking-tighter bg-blue-400 px-3 py-1 rounded-md font-bold hover:bg-blue-600 active:bg-blue-800 ">
                                        Details
                                    </button>
                                </Link>
                        :
                        <button className="text-white text-xs tracking-tighter bg-orange-400 font-bold opacity-70 cursor-not-allowed px-3 py-1 rounded-md font-bold80 ">
                            Timeout
                        </button>
                }
            </td>
            <td>
                <Link to={`/update/${_id}`} state={{
                    benefits_package, company_history, description, education_requirements, experience_level
                    , job_setter_email, job_title, location, required_skills, responsibilities, salary_range, team_size, work_hours, yearly_salary_increment, job_poster_email, _id, job_post_id
                }}>
                    <button className="text-white text-xs tracking-tighter bg-blue-400 px-3 py-1 rounded-md font-bold hover:bg-blue-600 active:bg-blue-800">
                        Update
                    </button>
                </Link>

                <button onClick={() => handleDelete(_id)} className="ml-1 text-white text-xs tracking-tighter bg-blue-400 px-3 py-1 rounded-md font-bold hover:bg-blue-600 active:bg-blue-800">
                    Delete
                </button>

            </td>
        </tr>

    );
};

export default TableRowMyJobs;