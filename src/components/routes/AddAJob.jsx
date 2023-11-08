import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaRegHandPeace } from 'react-icons/fa';

const AddAJob = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mt-5">
            {/*SignUp Form  */}
            <div className="flex ">
                <div>
                    <div className="h-full w-80 p-5 bg-white border rounded-md space-y-5">
                        <h1 className="text-left font-semibold text-base flex flex-col items-start">
                            <span className="flex justify-center gap-1 ">
                                <FaRegHandPeace className="text-2xl text-blue-400"></FaRegHandPeace><span>
                                    Hey, {user?.displayName}!
                                </span>
                            </span>
                            <span>Want to post  more job roles. </span>
                            <span>Fill the form below.</span>
                        </h1>
                        <form className="space-y-2">
                            <div>
                                <label htmlFor="userName">
                                    <p className="text-sx font-semibold text-gray-800">Username</p>
                                    <input type="text" name="userName" id="userName" placeholder="Your Name" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="picLink">
                                    <p className="text-sx font-semibold text-gray-800">Profile Picture Link</p>
                                    <input type="text" name="picLink" id="picLink" placeholder="Your Profile Picture Link" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <p className="text-sx font-semibold text-gray-800">User Email</p>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="password">
                                    <p className="text-sx font-semibold text-gray-800">Password</p>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm border-2" />
                                </label>
                            </div>
                            <input type="submit" value="Register" className="px-4 py-2 
            bg-blue-500 hover:bg-blue-700 
            active:bg-blue-900 duration-500 rounded 
            text-white outline-none w-full "/>
                        </form>
                        <p className="text-sx font-semibold text-gray-800">
                            Already have an account? <button>
                                <span className="text-blue-400 hover:text-blue-600 active:text-blue-800 duration-300">Login</span>
                            </button>
                        </p>
                    </div>

                </div>
                <div>
                    <div className="h-full w-80 p-5 bg-white border rounded-md space-y-5">
                        <h1 className="text-center font-semibold text-xl">Sign Up</h1>
                        <form className="space-y-2">
                            <div>
                                <label htmlFor="userName">
                                    <p className="text-sx font-semibold text-gray-800">Username</p>
                                    <input type="text" name="userName" id="userName" placeholder="Your Name" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="picLink">
                                    <p className="text-sx font-semibold text-gray-800">Profile Picture Link</p>
                                    <input type="text" name="picLink" id="picLink" placeholder="Your Profile Picture Link" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <p className="text-sx font-semibold text-gray-800">User Email</p>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="password">
                                    <p className="text-sx font-semibold text-gray-800">Password</p>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm border-2" />
                                </label>
                            </div>
                            <input type="submit" value="Register" className="px-4 py-2 
            bg-blue-500 hover:bg-blue-700 
            active:bg-blue-900 duration-500 rounded 
            text-white outline-none w-full "/>
                        </form>
                        <p className="text-sx font-semibold text-gray-800">
                            Already have an account? <button>
                                <span className="text-blue-400 hover:text-blue-600 active:text-blue-800 duration-300">Login</span>
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAJob;
