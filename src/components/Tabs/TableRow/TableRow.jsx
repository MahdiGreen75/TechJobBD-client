import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";


const TableRow = (obj) => {
    const { appliedJobs, applicantsCount } = useContext(AuthContext);
    const { job_poster_email, job_post_id, index, job_title, job_posting_date, application_deadline, salary_range } = obj;
    const { user } = useContext(AuthContext);
    const ViewDetailsObj = { ...obj };
    

    return (
        <>
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
                
            </tr>
        </>
    );
};

export default TableRow;