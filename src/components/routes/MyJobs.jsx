import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../providers/AuthProvider";
import TableRowMyJobs from "../Tabs/TableRow/TableRowMyJobs";
// import { AuthContext } from "../../providers/AuthProvider";
import { LiaChevronRightSolid } from 'react-icons/lia';


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const url = `https://badluck-server.vercel.app/get-my-jobs?email=${user?.email}`;

    const handleDelete = (_id) => {
        fetch(`https://badluck-server.vercel.app/user/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                {
                    if (data.deletedCount) {
                        setJobs(jobs.filter(item => item._id !== _id));
                        toast.success("Deletion is successfull.")
                    }
                }
            })
    }

    useEffect(()=>{
        document.title = "TechJobBD | My Jobs"
    },[])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // const filtered = data.filter(item => appliedJobs.includes(item.job_post_id))
                // console.log(data);
                setJobs(data);
            })
    }, [url])

    return (
        <div>

            <div className="relative overflow-x-auto border-2 mt-10 mb-5 rounded-xl drop-shadow-2xl">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white  uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Poster Name/Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Posting Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Application Deadline
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Salary range
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Applicant's Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Update/Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            jobs.length === 0 ?
                                <tr>
                                    <td><br /></td>
                                    <td><br /></td>
                                    <td><br /></td>
                                    <td><br /></td>
                                    <td className="p-5">
                                        <span className="mr-1">Hey, you haven't added any jobs either.</span>
                                        <svg aria-hidden="true" className="inline  text-center w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </td>
                                    <td><br /></td>
                                    <td><br /></td>
                                    <td><br /></td>
                                </tr>
                                :
                                jobs.map((job, index) => <TableRowMyJobs handleDelete={handleDelete} key={index} {...job} index={index}></TableRowMyJobs>)


                        }
                    </tbody>
                </table>

            </div>
            <div className="w-full flex justify-center items-center lg:hidden">
                <span className="flex items-center bg-white border-2 w-fit px-2 py-1"><LiaChevronRightSolid className="text-base text-gray-400"></LiaChevronRightSolid><span className="text-xs text-gray-400 italic">Scroll to right to see full details</span></span>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MyJobs;