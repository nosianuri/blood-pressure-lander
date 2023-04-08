import React from 'react'
import gauranted from '../../assets/imgpsh_fullsize.png';
import imglogo from '../../assets/secure-300x74.png';
import sideBanner from '../../assets/banner_side_dark.png';
import { Helmet } from 'react-helmet';

const Alpilean = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shed pounds effortlessly with our all-natural weight loss supplement!</title>
            </Helmet>

            <div style={{
                background: `url(${sideBanner})`
            }} class=" !bg-no-repeat !bg-cover">
                <div className='text-center bg-black bg-opacity-[.67] text-white py-10'>
                    <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2'>
                        <h1 className='max-w-[800px] mx-auto !leading-normal lg:text-5xl text-2xl font-bold px-3 lg:px-0 mb-2'>Discover The Secret of Alpine For Healthy Weight Loss </h1>
                    </div>
                    <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2 px-5'>
                        <h4 className='lg:text-xl font-semibold text-[#43f197] sale mb-2'>Flash Sale ONLY For Today - Special Offer</h4>
                        <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>Claim Your Discounted Alpilean with 100% Satisfaction  </h4>
                        <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>60-Day Money Back Guarantee</h4>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 lg:w-[1300px] my-6'>
                        <div className='happy lg:ml-[310px] lg:mt-0 mt-6'>
                            <h3 className='text-center'>New Discovery  <br /> <span>2023</span></h3>
                        </div>
                        <div className='lg:mr-[200px] lg:mt-0 mt-16'>
                            <a href="https://alpilean.com/discover/?hop=rayadvert">
                                <img className='mx-auto lg:w-[440px] w-[250px]' src='https://i.ibb.co/CJ6dCFY/Alpilean-removebg-preview.png' alt="" />
                            </a>
                        </div>
                    </div>
                    <button className='px-9 py-2 lg:text-lg mx-10 lg:mx-0 rounded-lg mb-10 bg-[#0f8548] leading-normal  hover:bg-[#0f8548]'><a className='mb-2' href="https://alpilean.com/discover/?hop=rayadvert">Click Here and Access The Official Website Now</a></button>
                    <a href="https://alpilean.com/discover/?hop=rayadvert">
                        <img className='mx-auto mb-3 lg:w-96 w-1/2' src={gauranted} alt="" />
                    </a>
                    <a href="https://alpilean.com/discover/?hop=rayadvert">
                        <img className='mx-auto mb-32 lg:w-96 w-1/2' src={imglogo} alt="" />
                    </a>
                    <div className='lg:text-lg text-sm lg:pt-10 pt-10'>
                        <a href="https://alpilean.com/discover/?hop=rayadvert">Terms of Use </a>|
                        <a href="https://alpilean.com/discover/?hop=rayadvert"> Privacy Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alpilean