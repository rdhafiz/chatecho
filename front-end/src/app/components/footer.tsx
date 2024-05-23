import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid bg-gradient-to-r from-sky-100 to-indigo-300 ">
            <div className="container lg:px-10 px-10 pt-10 pb-5">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-10">Chat<span className="text-theme">Echo</span></h1>

                        <p className="lg:pe-24">
                            ChatEcho makes your communication with relatives, work friends, family more fun. Stay
                            connected with them with plentiful features.
                        </p>


                        <ul className="mt-10 flex md:gap-10 gap-5">
                            <li><a className="transition hover:text-theme duration-300" href=""><i
                                className="fa-brands fa-linkedin text-2xl"></i></a></li>
                            <li><a className="transition hover:text-theme duration-300" href=""><i
                                className="fa-brands fa-instagram text-2xl"></i></a></li>
                            <li><a className="transition hover:text-theme duration-300" href=""><i
                                className="fa-brands fa-twitter text-2xl"></i></a></li>
                            <li><a className="transition hover:text-theme duration-300" href=""><i
                                className="fa-brands fa-facebook text-2xl"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container p-5 text-center">©2024 All copyrights reserved to
                <a className="font-bold text-theme" target="_blank" href="https://redishketch.com"> Redishketch</a>
            </div>
        </footer>
    );
}

export default Footer;