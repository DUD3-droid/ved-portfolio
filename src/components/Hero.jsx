import React from 'react'
import profile from '../assets/images/profile.png'


const Hero = () => {
    return (
        <div className="bg-[#051726] min-w-full md:px-28 px-12 max-h-screen" id="top">
            <section id="home">
                <main className="text-white">
                    <div className="header flex justify-around">
                        <div className="main py-10 md:h-4/5 min-h-[95%]">
                            <div>
                                <p className="md:text-4xl text-lg leading-snug">Hello, <span className="text-secondary">I'm</span></p>
                                <h1 className=" md:text-6xl text-5xl font-bold text-secondary leading-[1.6] md:leading-[1.5]">Ved Asole</h1>
                                <p className="md:text-3xl text-base  leading-snug font-medium">Software Developer and Designer</p>
                                <p className="py-4 md:w-2/3 w-full">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum non nihil, minus minima qui dolore  odit eligendi. Praesentium accusamus mollitia ullam rerum recusandae.
                                </p>
                            </div>
                            <div className="my-4">
                                <button className="bg-[#00cf91] px-5 py-2 rounded-xl text-white text-2xl font-medium border-2 border-[#00cf91]
                      hover:text-[#00cf91] hover:bg-[#051726] hover:border-2 hover:border-[#81FFD9] mr-2">Let's Talk</button>
                            </div>
                            <div className="social-links text-xl mt-12 flex flex-col lg:flex-row">
                                <p className="leading-10 lg:mr-2">Checkout Out My</p>
                                <div className="icons  md:py-2 ">
                                    <span className="mx-2 cursor-pointer hover:text-[#81FFD9]">
                                        <a href="https://github.com/GhostCoderz">
                                            <i className="fa-brands fa-github h-7" />
                                        </a>
                                    </span>
                                    <span className="mx-2 cursor-pointer hover:text-[#81FFD9]">
                                        <a href="https://www.linkedin.com/in/vedasole/">
                                            <i className="fa-brands fa-linkedin h-7" />
                                        </a>
                                    </span>
                                    <span className="mx-2 cursor-pointer hover:text-[#81FFD9] ">
                                        <a href="https://www.instagram.com/its_vedzzz">
                                            <i className="fa-brands fa-instagram h-7" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center object-contain hidden lg:flex max-h-4/5">
                            <img src={profile} alt="Ved Asole" className="w-1/2 min-h-4/5 max-h-4/5" />
                        </div>
                    </div>
                </main>
            </section>
        </div>

    )
}

export default Hero