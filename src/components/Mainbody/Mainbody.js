import React from 'react';
import cristmas from '../../assets/mobail.png';
import mainimg from '../../assets/bottle-add.png';
import gauranted from '../../assets/imgpsh_fullsize.png';
import imglogo from '../../assets/secure-300x74.png';
import './MainBody.css';
import sideBanner from '../../assets/banner_side_dark.png';

const Mainbody = () => {
  return (
    <div style={{
      background: `url(${sideBanner})`
    }} class=" !bg-no-repeat !bg-cover">
      <div className='text-center bg-black bg-opacity-[.67] text-white py-10'>
        <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2'>
          <h1 className='lg:text-5xl text-2xl font-bold px-3 lg:px-0 mb-2'>Discover The Secret of Blood Pressure 911 </h1>
        </div>

        <div className='lg:border-0 border-2 border-black border-y-gray-800 py-2 px-5'>
          <h4 className='lg:text-xl font-semibold text-[#43f197] sale mb-2'>Flash Sale ONLY For Today - Special Offer</h4>
          <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>Save Upto 90% OFF + Free US Shipping + 120 Days Suply </h4>
          <h4 className='lg:text-xl font-semibold text-[#0becf0] save mb-2'>+ Money Back Guarantee</h4>
        </div>

        <div className=' grid grid-cols-1 lg:grid-cols-2 lg:w-[1300px] my-6'>
          <div className='happy lg:ml-[310px] lg:mt-0 mt-6'>
            <h3 className='text-center'>Happy New Year <br /> <span>2023</span></h3>
          </div>

          <div className='lg:mr-[200px] lg:mt-0 mt-16'>
            <a href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/">
              <img className='mx-auto lg:w-[440px] w-[250px]' src={mainimg} alt="" />
            </a>
          </div>
        </div>
        <button className='px-9 py-2 lg:text-lg mx-10 lg:mx-0 rounded-lg mb-10 bg-[#0f8548] leading-normal  hover:bg-[#0f8548]'><a className='mb-2' href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/">Click Here and Access The Official Website Now</a></button>
        <a href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/">
          <img className='mx-auto mb-3 lg:w-96 w-1/2' src={gauranted} alt="" />
        </a>
        <a href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/">
          <img className='mx-auto mb-32 lg:w-96 w-1/2' src={imglogo} alt="" />
        </a>

        <div className='lg:text-lg text-sm lg:pt-10 pt-10'>
          <a href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/">Terms of Use </a>|
          <a href="https://www.r3hlvtrk.com/3J67C/7ZSXMBL/"> Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Mainbody