import Link from "next/link";
export default function Login(){
    return (
        <>
            <form className="  space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 gap-y-6">
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
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm   text-gray-700 text-md ">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link href="/forgot" className="font-medium text-gray-500 hover:text-gray-900">
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <div className={'grid grid-cols-2 gap-3'}>
                    <button type="submit"
                            className=" btn-theme text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign in
                    </button>
                    <Link href={'/register'}
                            className=" text-center btn-secondary text-white font-bold py-2 px-10 rounded-full focus:outline-none ">
                        Sign Up
                    </Link>
                </div>
            </form>

        </>
    )
}