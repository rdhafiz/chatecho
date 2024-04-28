import Link from "next/link";

export default function Register(){
    return (
        <>
            <form className="  space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 gap-y-6">
                    <div className="">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Name
                        </label>
                        <input
                            className="focus:shadow appearance-none border rounded w-full  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline"
                            id="name" type="text" placeholder="Name"/>
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            className="focus:shadow appearance-none border rounded w-full  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline"
                            id="email" type="text" placeholder="Email"/>
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Password
                        </label>
                        <input
                            className="focus:shadow appearance-none border rounded w-full  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline"
                            id="Password" type="text" placeholder="Password"/>
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-md font-semibold mb-2">
                            Re-type Password
                        </label>
                        <input
                            className="focus:shadow appearance-none border rounded w-full  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline"
                            id="RetypePassword" type="text" placeholder="Re-type Password"/>
                    </div>
                </div>


                <div className={'grid grid-cols-2 gap-3'}>
                    <button type="submit"
                            className=" btn-theme text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign Up
                    </button>
                    <Link href={'/login'}
                            className=" btn-secondary text-center text-white font-bold py-2 px-10 rounded-full focus:outline-none ">
                        Sign In
                    </Link>
                </div>
            </form>

        </>
    )
}