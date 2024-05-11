import React from 'react';
import Image from "next/image";
import BannerImage from "../../../public/home/chat-1.png"

function Page() {
    return (
        <main>

            <div className="container mt-20">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className="text-7xl leading-[90px] font-bold mb-7"><span
                            className="text-theme">Connetct </span> with <br/>
                            your circle in <br/> a fun way!</h1>
                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                            deleniti est facilis
                            maiores omnis quam quibusdam sequi similique soluta temporibus?</p>

                        <button
                            className="px-5 w-[150px] py-3 rounded-full bg-theme text-white hover:bg-sky-600 transition-all duration-300">Get
                            app
                        </button>
                    </div>

                    <div className="grid place-items-center">
                        <Image src={BannerImage} alt={"bannerImage"}/>
                    </div>
                </div>
                
                <div className="bg-white p-10 rounded-xl shadow bg-gradient-to-r from-red-100 to-orange-200 mt-10"></div>
            </div>
        </main>
    );
}

export default Page;