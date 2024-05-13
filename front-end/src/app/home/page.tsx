import React from 'react';
import Image from "next/image";
import BannerImage from "../../../public/home/chat-1.png"
import PaperPlane from "../../../public/home/paper-plane.png"
import SyncCloud from "../../../public/home/cloud-sync.png"
import PhotoGallery from "../../../public/home/photo-gallery.png"
import SecureDoc from "../../../public/home/secure-document.png"

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

                {/*Features banner start*/}
                <div className="bg-white py-10 px-20 rounded-2xl shadow bg-gradient-to-r from-red-100 to-orange-200 mt-10 mb-10">

                    <h1 className="text-4xl font-bold mb-10">Highlighted features</h1>
                    <div className="grid grid-cols-4 gap-7 place-items-center max-w-7xl mx-auto">
                        <div className="text-center">
                            <div className="w-[200px] h-[200px] grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-amber-300">
                                <Image width={100} height={100} src={PaperPlane} alt={"paper-plane"}/>
                            </div>
                            
                            <div className="md:text-2xl text-xl md:mt-10 mt-5 font-semibold">Fast and Reliable</div>
                        </div>

                        <div className="text-center">
                            <div className="w-[200px] h-[200px] grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-orange-600">
                                <Image width={100} height={100} src={SecureDoc} alt={"SecureDoc"}/>
                            </div>

                            <div className="md:text-2xl text-xl md:mt-10 mt-5 font-semibold">Secure Encription</div>
                        </div>


                        <div className="text-center">
                            <div className="w-[200px] h-[200px] grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-sky-400">
                                <Image width={100} height={100} src={PhotoGallery} alt={"PhotoGallery"}/>
                            </div>

                            <div className="md:text-2xl text-xl md:mt-10 mt-5 font-semibold">Unlimited sharing</div>
                        </div>

                        <div className="text-center">
                            <div className="w-[200px] h-[200px] grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-pink-300">
                                <Image width={100} height={100} src={SyncCloud} alt={"SyncCloud"}/>
                            </div>

                            <div className="md:text-2xl text-xl md:mt-10 mt-5 font-semibold">Seamless sync</div>
                        </div>

                    </div>
                </div>
                {/*Features banner end  */}

            </div>
        </main>
    );
}

export default Page;