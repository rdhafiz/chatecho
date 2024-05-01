import Image from "next/image";
import jonathan from '../../../../public/inbox/jonathan.jpg';
import settingIcon from '../../../../public/inbox/setting.svg'
import searchIcon from '../../../../public/inbox/search.svg'

export function chatList() {


    return (
        <div className={'chat-list p-3'}>
            {/*List header start*/}
            <div className="flex xl:flex-row flex-col xl:gap-0 gap-3 items-center relative">
                <Image src={jonathan} alt="Background Image"
                       className='w-[110px] h-[110px] shrink-0 rounded-full mr-4 shadow-xl border'
                       objectFit="cover"/>

                <div className="text-lg xl:text-start text-center pe-[50px]">
                    <p className="text-gray-900">Jonathan Reinink</p>
                    <p className="text-gray-400 text-xs mb-3">@jona</p>

                    <div className="flex items-center">
                        <label htmlFor="toggle" className="flex items-center cursor-pointer">
                            <input type="checkbox" id="toggle" className="sr-only peer"/>
                            <div
                                className="shadow block relative bg-gray-300 w-14 h-8 p-1 rounded-full before:absolute before:bg-white before:shadow-lg before:w-6 before:h-6 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:bg-green-100 peer-checked:before:bg-green-500"></div>
                        </label>
                        <div className={'ml-2 text-sm text-gray-500'}>Active</div>
                    </div>
                </div>

                <a href="javascript:void(0)"
                   className="absolute end-1 top-0 w-10 h-10 grid place-items-center rounded-full bg-gray-100 hover:bg-gray-200 shadow transition-all duration-300">
                    <Image src={settingIcon} alt="setting"/>
                </a>
            </div>
            {/* List header end */}

            {/*Search input start*/}
            <div className="relative mt-5">
                <input type="text"
                       className="w-full ps-5 pe-8 py-4 rounded-2xl shadow  outline-0 border-0 text-sm font-light placeholder:text-gray-400"
                       placeholder="Search contact"/>
                <Image className="absolute bg-white top-[15px] end-3" src={searchIcon} alt='search-icon'/>

            </div>
            {/* Search input end */}

            {/*List header tab start*/}
            <div className="mt-3">
                <h1 className="text-2xl font-bold mb-3">Chats</h1>

                <ul className="list-none flex gap-6">
                    <li>
                        <a href="javascript:void(0)"
                           className="text-gray-700 py-2 hover:text-gray-700 before:border-1 relative group">Latest
                            <span className="block max-w-full transition-all duration-500 h-0.5 bg-theme"></span>
                        </a>

                    </li>

                    <li>
                        <a href="javascript:void(0)"
                           className="text-gray-400 py-2 hover:text-gray-700 before:border-1 relative group">All
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme"></span>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)"
                           className="text-gray-400 py-2 hover:text-gray-700 before:border-1 relative group">Groups
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme"></span>
                        </a>
                    </li>

                </ul>
            </div>
            {/* List header tab end */}

            {/*List start*/}
            <ul className="chat-list-inner mt-3 list-none overflow-auto h-vh-minus-335 hide-scrollbar">
                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>
                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>
                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>
                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>

                <li className="">
                    <a href=""
                       className="p-3 flex place-items-center gap-4 hover:shadow transition-all duration-500 rounded-2xl hover:bg-theme/10">
                        <Image className="rounded-full w-14 h-14" src={jonathan} alt="user"/>
                        <div className="flex-grow">
                            <p>John doe</p>
                            <p className="text-xs text-gray-400">Typing...</p>
                        </div>
                        <p className="text-xs text-gray-400 font-extralight">11:49</p>
                    </a>
                </li>


            </ul>
            {/* List end */}
        </div>
    )
}