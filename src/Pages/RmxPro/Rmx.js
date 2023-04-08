import React from 'react';
import { Helmet } from 'react-helmet';
import product from '../../assets/product.gif';

const Rmx = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Welcome to the world of RMX Male Enhancement System" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>Herbal Product</title>
            </Helmet>
            <div className='bg-white alpine'>
                <div className='text-center font-semibold text-2xl py-3 bg-orange-400 text-white'>Advertorial</div>
                <div className='max-w-7xl mx-auto justify-center px-4 py-10'>

                    <div className='sm:text-6xl text-3xl  p-1 text-center mb-5 !leading-normal'>
                        <span className='text-red-700 font-bold'>Important Warning!</span> <br /><span className=' bg-yellow-300 px-1'>Don't Use The Product If Your Partner Can't Cope With Over 50 Minutes of Action.</span>
                    </div>
                    <img src="https://i.ibb.co/551ZX6b/rmx-benefit.png" alt="" className='mx-auto my-5 w-3/4' />
                    <p className='text-center text-2xl !leading-normal'>The product you're about to see will help you cure <span className='font-bold underline'>Premature Eja****tion, weak manhood, quick explusion, weakness after explusion, low urge, tiredness during "action" and back pain</span>. They are 100% effective and approved by NAFDAC. </p>
                    <p className='text-xl mt-5'>Highlighted below are some of the problems we've helped people to solve with our powerful herbal product:</p>
                    <ul className='ul-article text-xl'>
                        <li>Not able to last more than 2 minutes.</li>
                        <li>No urge to make love at all.</li>
                        <li>Completely weak manhood.</li>
                        <li>Tiredness after 1 round or within 5 minutes of action.</li>
                        <li>Lack of stamina.</li>
                    </ul>
                    <p className='text-red-800 font-bold text-center text-2xl'>By clicking the link below, you guarantee that you're above the age of 18 and you will not abuse the usage of the product.</p>
                    <a href="https://www.r3hlvtrk.com/3J67C/8C1LQ73/">
                        <img src={product} alt="" className='mx-auto' />
                    </a>
                </div>
                <div className='bg-orange-400 text-white py-5'>
                    <div className='max-w-7xl mx-auto px-4 py-2 text-xs border border-dashed border-[#ffffff] mt-5'>
                        <p><span className='font-semibold underline'>Disclaimer:</span>  The information provided on this webpage is intended for educational and informational purposes only. The products and services discussed herein are not intended to diagnose, treat, cure or prevent any disease. Please consult with a licensed healthcare provider before starting any new health regimen, including the use of dietary supplements or other products. The statements made regarding these products have not been evaluated by the Food and Drug Administration. Results may vary from person to person."</p>
                        <p className='my-1'>It's important to note that the exact wording and formatting of an advertorial disclaimer may vary depending on the specific products and services being promoted, as well as the legal requirements in your jurisdiction. Therefore, it's always a good idea to consult with legal or regulatory experts to ensure that your disclaimers are accurate and compliant.</p>
                    </div>
                    <footer className='mt-5'>
                        <div className='sm:flex justify-between max-w-[900px] mx-auto my-5 px-3'>
                            <div>Copyright © 2023 <span className='text-gray-800'>OfferShopToday</span>. All rights reserved.</div>
                            <div>
                                <a className='hover:text-gray-800' href="/terms-of-service">Terms and Conditions</a> | <a className='hover:text-gray-800' href="/privacy-policy">Privacy Policy</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Rmx;