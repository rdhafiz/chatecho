import Image from "next/image";
import infoIcon from "../../../../public/inbox/info.svg"
import videoIcon from "../../../../public/inbox/video-cam.svg"
import phoneIcon from "../../../../public/inbox/phone.svg"
import userImage from "../../../../public/inbox/jonathan.jpg"


export function

chatBox() {
    return (
        <div className="inbox shadow-xl border border-gray-300 h-full rounded-3xl">

            {/*Chat header start*/}
            <div className="chat-header flex justify-between place-items-center p-4 bg-gray-300 rounded-t-3xl ">
                <h1 className="text-xl relative">John doe <span
                    className="w-3 h-3 rounded-full bg-green-500 block absolute end-[-20px] top-3"></span></h1>

                <div className="actions flex gap-1">
                    <a href="javascript:void(0)"
                       className="md:w-10 md:h-10 w-6 h-6 grid place-items-center rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow">
                        <Image className="w-5" src={videoIcon} alt="video-cam"/>
                    </a>

                    <a href="javascript:void(0)"
                       className="md:w-10 md:h-10 w-6 h-6 grid place-items-center rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow">
                        <Image className="w-5" src={phoneIcon} alt="phone"/>
                    </a>

                    <a href="javascript:void(0)"
                       className="md:w-10 md:h-10 w-6 h-6 grid place-items-center rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow">
                        <Image className="w-5" src={infoIcon} alt="info"/>
                    </a>
                </div>

            </div>
            {/* Chat header end */}

            {/*Chat body start*/}
            <div className="chat-body h-vh-minus-195 overflow-auto hide-scrollbar md:mx-3 p-3">

                {/*Outgoing msg start*/}
                <div className="outgoing-msg max-w-[80%] ms-auto mb-3 group flex justify-end gap-3">
                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tr-none mt-3 shadow">
                        Hey there... how are you?
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                </div>
                {/* Outgoing msg end */}

                {/*Incoming msg start*/}
                <div className="incoming-msg max-w-[80%] me-auto group flex justify-start gap-3">
                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tl-none mt-3 shadow">
                        I am good what about you?.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>


                </div>
                {/* Incoming msg end */}

                {/*Outgoing msg start*/}
                <div className="outgoing-msg max-w-[80%] ms-auto mb-3 group flex justify-end gap-3">
                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tr-none mt-3 shadow">
                        I am good.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                </div>
                {/* Outgoing msg end */}

                {/*Outgoing msg start*/}
                <div className="outgoing-msg max-w-[80%] ms-auto mb-3 group flex justify-end gap-3">
                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tr-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos expedita itaque nostrum
                        optio saepe sapiente, sunt suscipit. Ad, aspernatur aut error, molestiae nam quas ratione rem
                        tenetur unde velit, voluptas.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                </div>
                {/* Outgoing msg end */}

                {/*Incoming msg start*/}
                <div className="incoming-msg max-w-[80%] me-auto group flex justify-start gap-3">
                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tl-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus est facere quasi
                        quidem, similique soluta temporibus tenetur voluptate. Aliquid dicta dolore eius fugiat magnam
                        maxime praesentium quia ratione sequi ullam. Beatae consectetur delectus eveniet perspiciatis,
                        porro repudiandae sequi sint ullam unde! Nulla provident suscipit tenetur. Atque aut eos sunt.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                </div>
                {/* Incoming msg end */}

                {/*Divider start*/}
                <div className="flex items-center mx-12 my-3">
                    <div className="flex-grow bg-gray-400 h-px"></div>
                    <div className="mx-3 text-xs text-gray-500">Today</div>
                    <div className="flex-grow bg-gray-400 h-px"></div>
                </div>
                {/* Divider end */}

                {/*Outgoing msg start*/}
                <div className="outgoing-msg max-w-[80%] ms-auto mb-3 group flex justify-end gap-3">
                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tr-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos expedita itaque nostrum
                        optio saepe sapiente, sunt suscipit. Ad, aspernatur aut error, molestiae nam quas ratione rem
                        tenetur unde velit, voluptas.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                </div>
                {/* Outgoing msg end */}

                {/*Incoming msg start*/}
                <div className="incoming-msg max-w-[80%] me-auto group flex justify-start gap-3">
                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tl-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus est facere quasi
                        quidem, similique soluta temporibus tenetur voluptate. Aliquid dicta dolore eius fugiat magnam
                        maxime praesentium quia ratione sequi ullam. Beatae consectetur delectus eveniet perspiciatis,
                        porro repudiandae sequi sint ullam unde! Nulla provident suscipit tenetur. Atque aut eos sunt.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                </div>
                {/* Incoming msg end */}

                {/*Outgoing msg start*/}
                <div className="outgoing-msg max-w-[80%] ms-auto mb-3 group flex justify-end gap-3">
                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tr-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos expedita itaque nostrum
                        optio saepe sapiente, sunt suscipit. Ad, aspernatur aut error, molestiae nam quas ratione rem
                        tenetur unde velit, voluptas.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                </div>
                {/* Outgoing msg end */}

                {/*Incoming msg start*/}
                <div className="incoming-msg max-w-[80%] me-auto group flex justify-start gap-3">
                    <Image className="md:w-10 md:h-10 w-6 h-6 rounded-full" src={userImage} alt="user"/>

                    <div
                        className="msg h-auto px-3 relative py-5 bg-gray-200 rounded-2xl rounded-tl-none mt-3 shadow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus est facere quasi
                        quidem, similique soluta temporibus tenetur voluptate. Aliquid dicta dolore eius fugiat magnam
                        maxime praesentium quia ratione sequi ullam. Beatae consectetur delectus eveniet perspiciatis,
                        porro repudiandae sequi sint ullam unde! Nulla provident suscipit tenetur. Atque aut eos sunt.
                        <span
                            className="absolute text-gray-400 text-xs bottom-1 right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">11:30</span>
                    </div>

                </div>
                {/* Incoming msg end */}


            </div>
            {/* Chat body end */}

            {/*Chat footer start*/}
            <div className="chat-footer  p-4">
                <div className="relative">
                <input type="text"
                           className="outline-0 border-0 rounded-3xl shadow w-full px-20 font-extralight py-4"
                           placeholder="Type here..."/>

                    <a href="javascript:void(0)"
                       className="absolute w-7 h-7 start-5 top-4 hover:text-theme transition duration-300">
                        {/*<Image src={smileIcon} alt="smile"/>*/}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/>
                        </svg>

                        <span className="absolute w-[2px] h-full scale-75 end-[-10px] bg-gray-400 top-0 rounded"></span>
                    </a><
                    a href="javascript:void(0)"
                      className="absolute w-7 px-5 h-7 end-5 top-4 hover:text-theme transition duration-300">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                    </svg>
                </a>
                </div>
            </div>
            {/* Chat footer end */}
        </div>
    )
}