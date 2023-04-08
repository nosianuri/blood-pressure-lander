import React from 'react';
import { Helmet } from 'react-helmet';
import './Erc.css';

const Erc = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>Life Line Screening</title>
            </Helmet>
            <div>
                <div className='  h-screen'>
                    <div className='max-w-[950px] mx-auto justify-center  alpine  '>
                        <div className='flex justify-between pt-10'>
                            <img src="https://i.ibb.co/fYX4mrq/travis-watkins.png" alt="" className='w-72' />
                            <img src="https://i.ibb.co/9rrssYz/iapp-truste.png" alt="" className='w-72' />
                        </div>
                        {/* nav */}
                        <div className='max-w-[850px] mx-auto mt-5'>
                            <h1 className='text-center text-2xl font-semibold'>Get your Employee Retention Payment of up to $26,000 per Employee
                            </h1>
                            <h5 className='text-center text-xl font-semibold text-[#12AF5B]'>We can still get you the Maximum Amount from the IRS - Audit Proof!</h5>
                            <h5 className='text-center text-xl font-semibold text-[#ff6900]'>Team up with us for the Best Result and FASTEST Response</h5>
                            <img src="https://i.ibb.co/NTn8q6n/ERC-Main-Image.jpg" alt="" />
                            <div className='erc-form'>
                                <div className='start-here'>Start Here</div>
                                <h4>Basic Information about your Business:</h4>
                                <p>Please provide direct Contact Information for the Business Owner, HR or Finance Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Erc