import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import lifegiphy from '../../assets/button.gif';

const LifelineSg = () => {
    
    const [clickNumber, setClickNumber] = useState(0);
    // const onSubmit = formData => {

    //     const data = {
    //         name: formData.name,
    //         email: formData.email,
    //         phone_number: formData.number,
    //         content: formData.message,
    //     }
    //     console.log(data);
    //     fetch('https://leadmanager.rayadvertising.com/api/form-service/post', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             window.open('https://www.r3hlvtrk.com/3J67C/8D6XXTM/');
    //         })
    // }


    function handleButtonClick() {
        setClickNumber(clickNumber + 1);
        const data = {
            required_fields: setClickNumber,
            form_name: "Lifeline Screening"
        }

        fetch('https://leadmanager.rayadvertising.com/api/form-service/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            
            .then(data => {
                if (data) {
                    window.open('https://www.r3hlvtrk.com/3J67C/8FKSNGM/');
                }
            })
            //   .then(data => console.log(data))
            .catch(error => console.error(error));
    }

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

                        <div className='cursor-pointer' onClick={handleButtonClick}>
                            <div className='bg-[#145fab] h-[50px] mb-5'></div>
                            <img src="https://i.ibb.co/HG4BQJC/llc-logo.webp" alt="" className='mx-auto' />
                            <div className='px-2'>
                                <h1 className='font-bold mt-5 sm:text-5xl text-2xl !leading-normal text-center text-red-800'>Knowledge is Power 💪</h1>
                                <h1 className='max-w-[850px] mx-auto font-bold mb-5 sm:text-5xl text-2xl !leading-normal text-center text-[#033F6C]'> <span className='text-green-800'>Lifeline Screening</span> Gives You the Tools You Need</h1>
                                <p className='max-w-[850px] mx-auto sm:mb-10 mb-10 text-[#033F6C]'><span className='wnever'>W</span>hen it comes to your health, knowledge is power. Lifeline Screening can give you the tools you need to take control of your health and well-being. Our screening tests are quick, easy, and non-invasive, and our experienced healthcare professionals will provide you with accurate and reliable results. Whether you want to learn about your risk for heart disease, stroke, or other conditions, Lifeline Screening has you covered. Take the first step towards a healthier you – schedule your appointment today. Protect Your Health with Lifeline Screening.</p>
                                
                                    <img src={lifegiphy} alt="" className='sm:w-2/3 mx-auto' />
                                
                            </div>
                            <div className='bg-[#145fab] h-[50px] sm:mt-10 mt-10'>
                                <div className='text-center sm:text-sm text-xs sm:flex justify-center items-center sm:mt-10 mt-5 text-[#FFFFFF] pt-3 px-2'>Copyright © 2023. <span className='text-slate-300 pr-1'>Offer Shop Today </span> | <a className='hover:underline hover:text-black px-1' href="/disclaimer">Disclaimer</a> | <a className='hover:underline hover:text-black px-1' href="/privacy-policy">Privacy Policy</a> | <a className='hover:underline hover:text-black px-1' href="/terms-of-service">Tos</a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LifelineSg