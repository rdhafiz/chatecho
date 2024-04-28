import {userInfo} from "@/app/(inbox)/components/user-info";
import {chatBox} from "@/app/(inbox)/components/chat-box";

export default function Inbox(){
    return (
        <div>
            {chatBox()}
            {userInfo()}
        </div>
    )
}
