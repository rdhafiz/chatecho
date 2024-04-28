import {chatList} from "@/app/(inbox)/components/chat-list";
export default function AuthLayout({
   children,
   }: {
    children: React.ReactNode
    }) {
    return (
        <div className={'chat-box p-4 rounded bg-gray-100 h-screen grid grid-cols-5'}>
            <div>
                {chatList()}
            </div>
            <div className={'col-span-4'}>
                {children}
            </div>
        </div>
    )
}