import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import Profile from '../assets/images/ProfilePicture.png'
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiBootstrap, DiMongodb, DiGithubBadge, DiJava, DiPython, DiFirebase, DiMysql, DiPhp } from 'react-icons/di'
import { SiTypescript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import Resume from '../assets/pdf/Sanjay-Raj-Resume.pdf';

function Hero() {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className="grid md:grid-cols-2 place-items-center gap-8 md:ml-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>

                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "Software Tester",
                            1000,

                        ]}

                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4" />


                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br />
                        <span className="primary-color">SANJAY RAJ</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I am passionate full stack Developer
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='flex flex-row items-center gap-6 my-4 md:mb-0'>



                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className='z-10 cursor-pointer font-bold primary-color md:w-auto p-4 border 
                             rounded-xl'
                             href={Resume} download="Sanjay_Raj_Resume.pdf"  // The name of the downloaded file
                        >
                            Download CV
                        </motion.a>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-gray-200 z-20">
                            <motion.a
                                className=""
                                whileHover={{ scale: 1.2 }}
                                href='https://github.com/Sanjay-Raj001'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineGithub />
                            </motion.a>

                            {/* LinkedIn Link */}
                            <motion.a
                                className=""
                                whileHover={{ scale: 1.2 }}
                                href='https://www.linkedin.com/in/sanjay-raj-8129b5307/'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineLinkedin />
                            </motion.a>

                            {/* Instagram Link */}
                            <motion.a
                                className=""
                                whileHover={{ scale: 1.2 }}
                                href='https://www.instagram.com/___sanjay_raj____'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineInstagram />
                            </motion.a>

                        </div>
                    </motion.div>
                </motion.div>

                <motion.img
                    src={Profile}
                    className="w-[300px] md:w-[450px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

            </div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='w-full px-12 md:px-0 py-24 flex flex-col md:flex-row justify-center items-center'
            >
                <p className='primary-color text-4xl md:text-7xl mb-8 md:mb-0 md:mr-6 text-center md:text-left md:ml-4'>
                    My Tech Stacks
                </p>

                {/* Icon container */}
                <div className='flex flex-wrap justify-center gap-4 md:gap-6 text-5xl md:text-7xl'>
                    <DiHtml5 className='text-orange-600' />
                    <DiCss3 className='text-blue-600' />
                    <DiBootstrap className='text-purple-600' />
                    <DiJavascript1 className='text-yellow-600' />
                    <DiReact className='text-blue-500' />
                    <SiTypescript className='text-blue-500' />
                    <DiPhp className='text-yellow-800' />
                    <DiNodejsSmall className='text-green-500' />
                    <DiPython className='text-blue-600' />
                    <DiJava className='text-blue-700' />
                    <DiMongodb className='text-green-600' />
                    <DiGithubBadge className='text-gray-200' />
                    <DiFirebase className='text-yellow-800' />
                    <DiMysql className='text-blue-800' />
                    <SiPostman className='text-orange-600 ' />
                    <SiSelenium className='text-green-500' />
                </div>
            </motion.div>




        </div>
    )
}

export default Hero
