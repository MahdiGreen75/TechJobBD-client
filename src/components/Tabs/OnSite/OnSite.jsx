import { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";


const OnSite = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/on-site")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Poster Name
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <TableRow key={job._id} {...job} index={index}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default OnSite;