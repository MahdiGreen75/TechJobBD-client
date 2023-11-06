import { BiLogoAdobe } from 'react-icons/bi';
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

    return (
        <div className='mt-2'>
            <div className='flex justify-between items-center relative'>
                <div className='flex items-center gap-1'>
                    <span><BiLogoAdobe className='text-red-600 text-4xl'></BiLogoAdobe></span>
                    <span>AlphaMotors</span>
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

                                                <NavLink to="/">Home</NavLink>


                                                <NavLink to={user ? `/addProduct` : `/login`}>Add Product</NavLink>


                                                <NavLink to={user ? `/myCart` : `/login`}>My Cart</NavLink>


                                                <NavLink to="/signup">Register</NavLink>

                                            </nav>
                                        </nav>
                                    </>
                                }
                            </div>
                        </div>
                        <nav className='hidden sm:block'>
                            <nav id="sidebar" className='flex gap-5 '>

                                <NavLink to="/">Home</NavLink>


                                <NavLink to={user ? `/addProduct` : `/login`}>Add Product</NavLink>


                                <NavLink to={user ? `/myCart` : `/login`}>My Cart</NavLink>


                                <NavLink to="/signup">Register</NavLink>

                            </nav>
                        </nav>
                    </div>
                    <div className='items-center gap-1 hidden sm:flex'>

                        {user && <>
                            <div className='flex text-black text-sm font-bold gap-1'>
                                {user.photoURL && <>
                                    <img src={user.photoURL} className='w-6 rounded-full' />
                                </>}
                                <span>{user.displayName}</span>
                            </div>
                        </>
                        }
                        <span>
                            <button onClick={handleLoginAndOut} className='text-xs sm:text-sm px-3 py-1 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white rounded-sm'>
                                {user ? "Log Out" : "Log In"}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='items-center gap-1 flex sm:hidden'>

                    {user && <>
                        <div className='flex text-black text-sm font-bold gap-1'>
                            {user.photoURL && <>
                                <img src={user.photoURL} className='w-6 rounded-full' />
                            </>}
                            <span>{user.displayName}</span>
                        </div>
                    </>
                    }

                    <span>
                        <button onClick={handleLoginAndOut} className='text-xs sm:text-sm px-3 py-1 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white rounded-sm'>
                            {user ? "Log Out" : "Log In"}
                        </button>
                    </span>
                </div>
            </div>
        </div>

    );
};

export default Navbar;