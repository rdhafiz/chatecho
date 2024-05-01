import {chatList} from "@/app/(inbox)/components/chat-list";
import {chatBox} from "@/app/(inbox)/components/chat-box";
import {userInfo} from "@/app/(inbox)/components/user-info";
export default function AuthLayout({
   children,
   }: {
    children: React.ReactNode
    }) {
    return (
        <div className={'chat-box sm:p-4 rounded bg-gray-100 h-screen grid grid-cols-8 gap-3'}>
            <div className="lg:col-span-2 md:col-span-4 col-span-8">
                {chatList()}
            </div>
            <div className={'lg:col-span-4 md:col-span-4 col-span-4 md:block hidden'}>
                {chatBox()}
            </div>

            <div className="col-span-2 lg:block hidden">
                {userInfo()}
            </div>
        </div>
    )
}