import Image from "next/image";
import userImage from "../../../../public/inbox/dummy-user.jpg"
import fileThemeIcon from "../../../../public/inbox/file-theme.svg"
import fileOrangeIcon from "../../../../public/inbox/file-orange.svg"
import fileGreenIcon from "../../../../public/inbox/file-green.svg"
import chevronRight from "../../../../public/inbox/chevron-right.svg"

export function userInfo() {
    return (
        <div className="p-4">
            <div className="grid place-items-center gap-3 mt-3">
                <Image className="w-44 h-44 rounded-full" src={userImage} alt="user-img"/>

                <div className="text-center">
                    <h1 className="name text-xl mb-0 font-semibold">John doe</h1>
                    <p className="text-sm leading-none text-gray-500">@john_doe</p>
                </div>
            </div>

            <div className="border w-full my-5"></div>

            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-500 text-sm mb-3">+123 321 4231</p>

            <h3 className="font-medium">Description</h3>
            <p className="text-gray-500 text-sm mb-3">Available</p>

            <h3 className="font-medium">Email</h3>
            <p className="text-gray-500 text-sm mb-3">johndoe@gmail.com</p>

            <div className="border w-full my-5"></div>

            {/*Shared files start*/}
            <div className="flex justify-between place-items-center mb-4">
                <h3 className="font-medium">Shared file</h3>
                <p className="text-gray-400 text-sm">640MB</p>
            </div>

            <a href="javascript:void(0)"
               className="each-file flex justify-between place-items-center rounded-xl hover:bg-gray-200 transition-all duration-300 group p-3">
                <div className="flex gap-3">
                    <div className="icon-box grid place-items-center w-[50px] h-[50px] bg-theme/30 rounded-xl">
                        <Image src={fileThemeIcon} alt='file'/>
                    </div>
                    <div className="">
                        <p className="font-medium mb-1">Document</p>
                        <p className="text-xs text-gray-400">10MB</p>
                    </div>
                </div>

                <span className="px-3 group-hover:translate-x-3 transition-all duration-300">
                    <Image src={chevronRight} alt="arrow-right"/>
                </span>
            </a>

            <a href="javascript:void(0)"
               className="each-file flex justify-between place-items-center rounded-xl hover:bg-gray-200 transition-all duration-300 group p-3">
                <div className="flex gap-3">
                    <div className="icon-box grid place-items-center w-[50px] h-[50px] bg-orange-200 rounded-xl">
                        <Image src={fileOrangeIcon} alt='file'/>
                    </div>
                    <div className="">
                        <p className="font-medium mb-1">Images</p>
                        <p className="text-xs text-gray-400">100MB</p>
                    </div>
                </div>

                <span className="px-3 group-hover:translate-x-3 transition-all duration-300">
                    <Image src={chevronRight} alt="arrow-right"/>
                </span>
            </a>

            <a href="javascript:void(0)"
               className="each-file flex justify-between place-items-center rounded-xl hover:bg-gray-200 transition-all duration-300 group p-3">
                <div className="flex gap-3">
                    <div className="icon-box grid place-items-center w-[50px] h-[50px] bg-green-200 rounded-xl">
                        <Image src={fileGreenIcon} alt='file'/>
                    </div>
                    <div className="">
                        <p className="font-medium mb-1">Videos</p>
                        <p className="text-xs text-gray-400">530MB</p>
                    </div>
                </div>

                <span className="px-3 group-hover:translate-x-3 transition-all duration-300">
                    <Image src={chevronRight} alt="arrow-right"/>
                </span>
            </a>
            {/* Shared files end */}
        </div>
    )
}