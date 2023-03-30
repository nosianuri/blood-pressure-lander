import React from 'react'
import { Helmet } from 'react-helmet';
import lifegiphy from '../../assets/button.gif';

const LifelineSg = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>Life Line Screening</title>
            </Helmet>
            <div>
                <div className='  h-screen'>
                    <div className='max-w-[950px] mx-auto justify-center  alpine shadow-lg '>
                    <div className='bg-[#145fab] h-[50px]'></div>
                    <div className='px-2'>
                    <h1 className='font-bold mt-5 sm:text-5xl text-2xl !leading-normal text-center text-red-800'>Knowledge is Power 💪</h1>
                    <h1 className='max-w-[850px] mx-auto font-bold mb-5 sm:text-5xl text-2xl !leading-normal text-center text-[#033F6C]'> <span className='text-green-800'>Lifeline Screening</span> Gives You the Tools You Need</h1>
                    <p className='max-w-[850px] mx-auto sm:mb-16 mb-10 text-[#033F6C]'><span className='wnever'>W</span>hen it comes to your health, knowledge is power. Lifeline Screening can give you the tools you need to take control of your health and well-being. Our screening tests are quick, easy, and non-invasive, and our experienced healthcare professionals will provide you with accurate and reliable results. Whether you want to learn about your risk for heart disease, stroke, or other conditions, Lifeline Screening has you covered. Take the first step towards a healthier you – schedule your appointment today. Protect Your Health with Lifeline Screening.</p>
                    <a className='' href="http://llsa.go2cloud.org/aff_c?offer_id=775&aff_id=1570">
                        <img src={lifegiphy} alt="" className='sm:w-1/2 mx-auto' />
                    </a>
                    </div>
                    <div className='bg-[#145fab] h-[50px] sm:mt-16 mt-10'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LifelineSg