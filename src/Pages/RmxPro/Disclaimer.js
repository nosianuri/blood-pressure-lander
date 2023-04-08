import React from 'react';
import { Helmet } from 'react-helmet';

const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Welcome to the world of RMX Male Enhancement System" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>Disclaimer | Herbal Product</title>
            </Helmet>
            <div className='bg-white alpine'>
                <div className='max-w-7xl mx-auto justify-center px-4 py-10'>
                    <div className=' text-2xl sm:mt-10'><span className='font-bold'>Disclaimer:</span> The following advertorial contains information about a male enhancement product. Please note that individual results may vary and that this product is not intended to diagnose, treat, cure or prevent any disease. The information provided in this advertorial is for educational and informational purposes only and should not be construed as medical advice. It is recommended that you consult with your healthcare provider before using any dietary supplement, especially if you have a medical condition or are taking any medication. Additionally, this product is intended for use by adults only and should be kept out of reach of children. Do not exceed the recommended dose and discontinue use immediately if you experience any adverse reactions. This product has been evaluated by the FDA and is not intended to replace professional medical advice or treatment.</div>
                    <div className='text-center sm:mt-52 mt-5'>Copyright © 2023. <span className='text-orange-700'>Offer Shop Today</span> | <a className='hover:underline hover:text-orange-700' href="/disclaimer">Disclaimer</a> | <a className='hover:underline hover:text-orange-700' href="/privacy-policy">Privacy Policy</a> | <a className='hover:underline hover:text-orange-700' href="/terms-of-service">Tos</a></div>
                </div>
            </div>
        </>
    )
}

export default Disclaimer