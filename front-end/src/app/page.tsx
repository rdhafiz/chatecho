import React from "react";
import Image from "next/image";
import landingBg from "../../public/home/landing-bg-1.png"
import Header from "@/app/components/header";

export default function Home() {
    return (

        <main>
            <Header/>
            <div className="container">
                <div className="text-center mt-20">
                    <h1 className="md:text-7xl sm:text-5xl text-4xl mb-5 font-bold"><span className="text-theme">One click.</span> Zero Friction</h1>

                    <p className="text-gray-500 lg:max-w-[50%] max-w-[90%] mx-auto">ChatEcho is an instant messaging tool that connects prospects directly to real salespeople.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        That's it. No bots. Nothing to download. Just real, one-on-one connections for truly
                        frictionless sales</p>
                </div>

                <div className="grid place-items-center mt-5">
                    <Image src={landingBg}  alt={"landing-bg"}></Image>
                </div>
            </div>

        </main>
    )
}