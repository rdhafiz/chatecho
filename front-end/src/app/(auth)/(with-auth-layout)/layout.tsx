    import authBg from '../../../../public/auth/auth-bg.svg';
import Image from "next/image";
export default function AuthLayout({
   children,
   }: {
    children: React.ReactNode
    }) {
    return (
        <div className={'auth grid grid-cols-1 md:grid-cols-3 gap-4 h-screen '}>
            <div className={'content p-12 grid grid-cols-1 place-content-center'}>
                <div className="logo text-3xl font-bold">Chat<span className={'text-theme'}>Echo</span></div>
                <div className="text-xl mb-1">Hello Everyone, We are ChatEcho</div>
                <div className=" text-gray-400 mb-9">Welcome to ChatEcho please login to your account.</div>

                {children}

                <div className="terms text-center mt-10 text-gray-500 font-semibold">
                    Terms and condition <b>&</b> Privacy policy
                </div>

            </div>
            <div className={'col-span-2 global-content bg-custom   place-content-center hidden md:grid'}>
                <Image
                    src={authBg}
                    alt="Background Image"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}