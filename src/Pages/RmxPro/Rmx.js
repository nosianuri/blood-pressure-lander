import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Rmx = () => {
    const [text, setText] = useState("<span className='text-red text-5xl'>Important Warning!</span> Don't Use The Products If Your Partner Can't Cope With Over 50 Minutes of Action.");

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Welcome to the world of RMX Male Enhancement System" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>RMX Product</title>
            </Helmet>
            <div className='bg-white alpine'>
                <div className='max-w-7xl mx-auto justify-center px-4 py-10'>
                    <div className='text-center font-bold text-4xl text-[#fff] bg-purple-500 sm:w-[900px] mx-auto'>
                        <a href="/">08060380375</a> or
                        <a href="/"> 08078440640</a> or
                        <a href="/"> 08121652243</a>
                    </div>
                    {/* <div>
                        <input
                            className="border border-gray-400 p-2 rounded-lg w-full"
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div> */}
                    <div className='text-6xl  p-1 text-center my-5 !leading-normal'>
                        <span className='text-red-700 font-bold'>Important Warning!</span> Don't Use The Products If Your Partner Can't Cope With Over 50 Minutes of Action.
                    </div>
                    <p className='text-center text-2xl !leading-normal'>The products you're about to see will help you cure <span className='font-bold underline'>Premature Eja****tion, weak manhood, quick explusion, weakness after explusion, low urge, tiredness during "action" and back pain</span>. They are 100% effective and approved by NAFDAC. <span className='text-orange-500 italic'>Kindly click the link below to see the Products and also see testimonials from past users below.</span></p>
                    <p className='text-blue-700 text-center font-bold my-5 text-2xl'>Click here to see testimonials From Users</p>
                    <p className='text-xl'>Highlighted below are some of the problems we've helped people to solve with our powerful herbal products:</p>
                    <ul className='ul-article text-xl'>
                        <li>Not able to last more than 2 minutes.</li>
                        <li>No urge to make love at all.</li>
                        <li>Completely weak manhood.</li>
                        <li>Tiredness after 1 round or within 5 minutes of action.</li>
                        <li>Lack of stamina.</li>
                    </ul>
                    <p className='text-red-800 font-bold text-center text-2xl'>By clicking the link below, you guarantee that you're above the age of 18 and you will not abuse the usage of the products.</p>
                    <div className='text-center text-4xl my-8 font-bold'><a href="/" className='text-white bg-purple-700 underline px-4'>Click Here To See The Herbal Products</a></div>
                </div>
            </div>
        </>
    )
}

export default Rmx;