import React from 'react';
import bg from '../Images/bg.jpg';
import SignUp from './SignUp';

export default function Login() {
    
    return (
        <div className="absolute z-40 h-full w-full bg-cover border-0 m-0 outline-none bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'> 
            <div className="left pt-20 mx-24  sm:m-24 md:my-32 md:mx-12 lg:my-30 lg:mx-24 xl:m-40">
                <h1 className="text-white mb-10 mt-24 xl:mt-12 xl:ml-10 font-bold text-5xl flex justify-start">Welcome To Hive <br /></h1>
                <p className='hidden text-white border-0 bg-black bg-opacity-20 rounded-md p-2'>Here you can connect to your friends and have fun :)</p>
            </div>

            <div className="mx-16 mt-7 mb-44 sm:m-24 md:mt-32 md:mx-12 lg:mt-30 lg:mx-24 xl:m-40 border-0 rounded-xl bg-black bg-opacity-25">
                <form action="" className="">
                    <div>
                        <h1 className="text-xl my-5 flex justify-center  font-bold text-white ">Hive Log In</h1>
                    </div>
                    <div className="flex flex-col m-3 ">
                        <input type="text" className="bg-gray-500 text-cyan-500 bg-opacity-20 focus:outline-none p-3 mx-3 mb-3 border-0 rounded-lg" placeholder='Email address or phone number' />
                        
                        <input type="password" className="bg-gray-500 text-cyan-500  focus:outline-none bg-opacity-20 p-3 mx-3 mb-4 border-0 rounded-lg" placeholder='Password' />

                        <button className='mx-3 font-bold text-white p-3 justify-center hover:cursor-pointer bg-blue-500 bg-opacity-25 hover:bg-opacity-40 rounded-lg'>Log in</button>

                        <a className='flex justify-center hover:underline mt-2 p-2 text-white' href="/" target="_blank" rel="noopener noreferrer">Forgotten password?</a>
                        <SignUp/>

                        
                    </div>
                </form>
            </div>
        </div>
    </div>
      );
}
