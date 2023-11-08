import { RiHammerFill } from 'react-icons/ri';
import { MdOutlineMenu } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { FormValidationContext } from '../../providers/FormValidationProvider';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [validataion, setValidation] = useContext(FormValidationContext);
    const navigate = useNavigate();
    const [toggleHamburger, setToggleHamBurger] = useState(true);

    const handleLoginAndOut = () => {
        //login handler
        if (!user) {
            navigate("/login");
        }

        //logout handler
        if (user) {
            logOut()
                .then(() => {
                    console.log("sign out successfull")
                    setValidation("");
                    navigate("/");
                })
                .catch(() => console.error("sign out error"))

        }
    }

    const navLink = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/allJobs'>All Jobs</NavLink>
        <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
        <NavLink to='/addAJob'>Add a Job</NavLink>
        <NavLink to='/myJobs'>My Jobs</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
    </>

    const loginLogoutBtn = <>
        <div onClick={handleLoginAndOut} className='px-2 py-1 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center gap-1 rounded-full'>
            <span>
                <button className='text-xs sm:text-sm font-bold'>
                    {user ? "Log Out" : "Log In"}
                </button>
            </span>
            {user && <>
                <div className='flex text-black text-sm font-bold gap-1'>
                    {user.photoURL && <>
                        <img src={user.photoURL} className='w-6 rounded-full' title={user.displayName}/>
                    </>}
                </div>
            </>
            }
        </div>
    </>

    return (
        <div className='mt-2'>
            <div className='flex justify-between items-center relative'>
                <div className='flex items-end' onClick={() => { navigate("/") }}>
                    <span><RiHammerFill className='text-red-500 text-3xl'></RiHammerFill></span>
                    <span className='text-red-500 text-sm font-bold -ml-2 -mb-[1.5px]'>echJobBD</span>
                </div>
                <div className='flex items-center gap-1 text-sm '>
                    <div className=''>
                        <div className='sm:hidden'>
                            <span>
                                {
                                    toggleHamburger ?
                                        <MdOutlineMenu className='text-2xl' onClick={() => { setToggleHamBurger(!toggleHamburger) }}></MdOutlineMenu> :
                                        <IoCloseSharp className='text-2xl' onClick={() => { setToggleHamBurger(!toggleHamburger) }}></IoCloseSharp>
                                }
                            </span>
                            <div>
                                {
                                    !toggleHamburger && <>
                                        <nav className='absolute z-50 top-12 right-0 bg-blue-500 p-4 rounded-md mr-1 mt-2 duration-500 drop-shadow-2xl'>
                                            <nav id="sidebar" className='space-y-2 text-xs text-white font-semibold flex flex-col'>
                                                {navLink}
                                            </nav>
                                        </nav>
                                    </>
                                }
                            </div>
                        </div>
                        <nav className='hidden sm:block'>
                            <nav id="sidebar" className='flex gap-5 '>
                                {navLink}
                            </nav>
                        </nav>
                    </div>
                    <div className='items-center gap-1 hidden sm:flex'>
                        {loginLogoutBtn}
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='items-center gap-1 flex sm:hidden'>
                    {loginLogoutBtn}
                </div>
            </div>
        </div>

    );
};

export default Navbar;