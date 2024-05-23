import React from 'react';
import Image from "next/image";
import BannerImage from "../../../public/home/chat-1.png"
import PaperPlane from "../../../public/home/paper-plane.png"
import SyncCloud from "../../../public/home/cloud-sync.png"
import PhotoGallery from "../../../public/home/photo-gallery.png"
import SecureDoc from "../../../public/home/secure-document.png"
import msgBubbleIcon from "../../../public/home/msg-bubble.svg"
import userIcon from "../../../public/home/user.svg"
import globeIcon from "../../../public/home/globe.svg"
import boltIcon from "../../../public/home/bolt.svg"
import Blob1 from "../../../public/home/blob-1.svg"

function Page() {
    return (
        <main>

            <div className="container-fluid relative">
                <div className="w-[400px] h-[400px] absolute bg-gradient-to-r from-sky-100 to-indigo-300 rounded-full z-0 left-[-50px] top-[-50px]"></div>
            {/*    <div className="absolute end-0 top-0">
                    <Image src={Blob1} alt="blob-1"></Image>
                </div>*/}
                <div className="container mt-20 z-1 relative">
                    <div className="grid md:grid-cols-2">
                        <div className="md:mb-0 mb-5">
                            <h1 className="lg:text-7xl sm:text-5xl text-3xl lg:leading-[90px] sm:leading-[70px] font-bold mb-7"><span
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
                </div>
            </div>

            <div className="container">

                {/*Features banner start*/}
                <div
                    className="bg-white sm:py-10 lg:px-20 sm:px-10 p-5 rounded-2xl shadow bg-gradient-to-r from-sky-100 to-indigo-300 mt-10 mb-10">

                    <h1 className="md:text-3xl text-2xl font-bold mb-10">Highlighted features</h1>
                    <div
                        className="grid md:grid-cols-4 sm:grid-cols-2 lg:gap-7 gap-5  place-items-center max-w-7xl mx-auto">
                        <div className="grid place-items-center text-center group w-full">
                            <div
                                className="lg:w-[200px] lg:h-[200px] sm:w-[120px] sm:h-[120px] h-[120px] w-full grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-amber-300">
                                <Image className="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px]" src={PaperPlane}
                                       alt={"paper-plane"}/>
                            </div>

                            <div
                                className="lg:text-xl text-md  group-hover:text-theme transition duration-300 lg:mt-10 mt-5 font-semibold">Fast
                                and Reliable
                            </div>
                        </div>

                        <div className="grid place-items-center text-center group w-full">
                            <div
                                className="lg:w-[200px] lg:h-[200px] sm:w-[120px] sm:h-[120px] h-[120px] w-full grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-orange-600">
                                <Image className="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px]" src={SecureDoc} alt={"SecureDoc"}/>
                            </div>

                            <div
                                className="lg:text-xl text-md group-hover:text-theme transition duration-300 lg:mt-10 mt-5 font-semibold">Secure
                                Encription
                            </div>
                        </div>


                        <div className="grid place-items-center text-center group w-full">
                            <div
                                className="lg:w-[200px] lg:h-[200px] sm:w-[120px] sm:h-[120px] h-[120px] w-full grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-sky-400">
                                <Image className="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px]" src={PhotoGallery} alt={"PhotoGallery"}/>
                            </div>

                            <div
                                className="lg:text-xl text-md group-hover:text-theme transition duration-300 lg:mt-10 mt-5 font-semibold">Unlimited
                                sharing
                            </div>
                        </div>

                        <div className="grid place-items-center text-center group w-full">
                            <div
                                className="lg:w-[200px] lg:h-[200px] sm:w-[120px] sm:h-[120px] h-[120px] w-full grid place-items-center rounded-[50px] shadow-2xl hover:-translate-y-3 transition-all duration-300 bg-pink-300">
                                <Image className="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px]" src={SyncCloud} alt={"SyncCloud"}/>
                            </div>

                            <div
                                className="lg:text-xl text-md group-hover:text-theme transition duration-300 lg:mt-10 mt-5 font-semibold">Seamless
                                sync
                            </div>
                        </div>

                    </div>
                </div>
                {/*Features banner end  */}


                {/*Why choose us start*/}
                <div
                    className="bg-white sm:py-10 lg:px-20 sm:px-10 p-5 rounded-2xl shadow bg-gradient-to-r from-sky-100 to-indigo-300 mt-10 mb-10">

                    <h1 className="text-xl font-bold mb-10">Why Chat<span className="text-theme">Echo</span>?</h1>


                    <div className="grid lg:grid-cols-2 sm:gap-7 gap-5">

                        <div className="">
                            <h1 className="lg:text-5xl sm:text-3xl text-2xl leading-tight font-bold mb-4">Our mission is user convenience</h1>

                            <p className="md:max-w-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus accusantium atque
                                autem
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="flex items-center gap-4">
                                <Image className="sm:w-10 w-7" src={msgBubbleIcon} alt='msg-bubble'/>
                                <div className="">
                                    <h1 className="font-extrabold sm:text-2xl text-lg">2M</h1>
                                    <p>Message sent</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image className="sm:w-10 w-7" src={userIcon} alt='userIcon'/>
                                <div className="">
                                    <h1 className="font-extrabold sm:text-2xl text-lg">500M</h1>
                                    <p>Active users</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image className="sm:w-10 w-7" src={globeIcon} alt='globeIcon'/>
                                <div className="">
                                    <h1 className="font-extrabold sm:text-2xl text-lg">150+</h1>
                                    <p>Available country</p>
                                </div>
                            </div>


                            <div className="flex items-center gap-4">
                                <Image className="sm:w-10 w-7" src={boltIcon} alt='boltIcon'/>
                                <div className="">
                                    <h1 className="font-extrabold sm:text-2xl text-lg">10x</h1>
                                    <p>Send & upload speed</p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
                {/*Why choose us end  */}


            </div>
        </main>
    );
}

export default Page;