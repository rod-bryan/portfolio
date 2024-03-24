import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img
                className='w-full h-screen object-cover object-left scale-x-[-1]'
                src='https://images.unsplash.com/photo-1463227438464-68cf21a01f55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-gray-500/50'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-300'>I'm Cris Carlo</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-300'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Senior QA Automation Engineer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Tech Enthusiast',
                                2000
                            ]}
                            wrapper='div'
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-400'>
                        <a
                            href='https://github.com/criscarlod'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href='https://linkedin.com/in/cris-carlo-dapitanon-9b7071190'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href='https://www.facebook.com/criscarlo03'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer'
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
