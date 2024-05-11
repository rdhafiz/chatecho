'use client'
import React, {useState} from 'react';
import Link from "next/link";

function Header() {

    const [activity, setActivity] = useState(false);
    const sidenavController = () => {
        setActivity(prevActivity => !prevActivity)
    }

    const closeNav = () => {
        setInterval(() => {
            setActivity(false)
        }, 1000)
    }


    return (
        <div>
            {/*Header start*/}
            <div className="container-fluid">
                <div className="container">
                    <div className="flex justify-between items-center py-5 md:px-5 px-3">
                        <Link href={"/"} className="sm:text-4xl text-3xl font-bold">Chat<span
                            className="text-theme">Echo</span></Link>

                        <div className="sm:flex hidden sm:gap-5 gap-3">
                            <Link href={"/login"}
                                  className="sm:w-[150px] text-center grid place-items-center md:px-10 px-5 py-2 bg-theme text-white font-semibold rounded-full hover:bg-sky-600 transition-all duration-300">Login</Link>
                            <Link href={"/register"}
                                  className="sm:w-[150px] text-center grid place-items-center md:px-10 px-5 py-2 border border-theme text-black font-semibold rounded-full hover:bg-theme hover:text-white transition-all duration-300">Signup</Link>
                        </div>

                        <button onClick={sidenavController}
                                className="sm:hidden grid p-2 w-[50px] h-[50px] place-items-center group transition-all">
                            <span className="h-[1px] w-full bg-theme"></span>
                            <span
                                className="h-[1px] w-full bg-theme group-hover:scale-x-75 transition-all duration-300"></span>
                            <span className="h-[1px] w-full bg-theme"></span>
                        </button>
                    </div>
                </div>

                {/*Nav start*/}
                <div
                    className={"sm:hidden fixed z-1 w-full h-full top-0 right-0 bottom-0 bg-theme/90 transition-all duration-500 " + (activity ? 'left-0 scale-100 opacity-100 visible' : 'left-[-100%] scale-0 invisible opacity-0')}>

                    <a className="cursor-pointer absolute right-5 top-10 group w-[50px] h-[50px]  grid place-items-center " onClick={sidenavController}>
                        <div
                            className="w-[40px] h-[2px] bg-white rotate-45 absolute group-hover:-rotate-45 transition-all duration-300"></div>
                        <div
                            className="w-[40px] h-[2px] bg-white -rotate-45 absolute group-hover:rotate-45 transition-all duration-300"></div>
                    </a>
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className="text-4xl font-bold mb-10">ChatEcho</div>
                        <ul className="text-center">
                            <li><Link href={"/"} className="text-white font-semibold mb-4 block text-xl">Home</Link>
                            </li>
                            <li><Link href={"/login"}
                                      className="text-white font-semibold mb-4 block text-xl">Login</Link></li>
                            <li><Link href={"/register"} className="text-white font-semibold mb-4 block text-xl">Sign
                                up</Link></li>
                        </ul>
                    </div>
                </div>
                {/*Nav end  */}
            </div>
            {/*Header end  */}
        </div>
    );
}

export default Header;