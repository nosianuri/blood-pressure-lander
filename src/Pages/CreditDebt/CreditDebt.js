import React from 'react'
import { Helmet } from 'react-helmet';
import debt from '../../assets/debt-logo.svg';

const CreditDebt = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="https://i.ibb.co/JQR0jdm/rm-icon.png" sizes="16x16" />
                <title>DEBT REPAIR</title>
            </Helmet>
            <div>
                <div className='sm:w-[900px] mx-auto'>
                <div className='mt-5'>
                    <img src='https://i.ibb.co/Wc6xYdp/debt-repair1.png' alt="" className='w-56 mx-auto' />
                </div>
                <h1 className='text-center sm:text-5xl text-3xl mt-5 font-bold text-[#1F2147]'>Are You Eligible for Debt Relief?</h1>
                        <h4 className='text-center sm:text-2xl text-xl my-5 text-[#1F2147] sm:w-[600px] mx-auto font-medium px-2 sm:px-0'>You may qualify for a special debt relief program that could save you thousands.</h4>
                        <div>
                            <img src="https://i.ibb.co/RDqVtLN/crdit-btn.gif" alt="" className='sm:w-3/4 mx-auto' />
                        </div>
                    
                    <div className='flex sm:gap-10 gap-4 justify-center items-center'>
                            <img src="https://i.ibb.co/PFf5XMc/ssl-green-lite.png" alt="" className='sm:w-24 w-16' />
                            <img src="https://i.ibb.co/hyjKvzJ/bbbaplus.png" alt="" className='sm:w-24 w-16' />
                            <img src="https://i.ibb.co/JczhqtC/emeo-lite.png" alt="" className='sm:w-24 w-16' />
                            <img src="https://i.ibb.co/hXGG07Y/greenwisedebtrelief.png" alt="" className='sm:w-24 w-16' />
                        </div>
                   <p className='sm:text-5xl text-2xl text-center my-5 text-[#0074E0] font-medium px-2 sm:px-0'>Your Success Is Our Success</p>
                </div>
                <div className='bg-base-200 mt-5 py-8 sm:px-0 px-2'>
                        <p className='sm:w-[900px] mx-auto text-justify text-xs text-[#1F2147]'>Please note that all calls with the company may be recorded or monitored for quality assurance and training purposes.Clients who make all their monthly program payments pay approximately 50% of their enrolled balance before fees, or 68% to 75% including fees, over 24 to 48 months. Not all clients are able to complete our program for various reasons, including their ability to save sufficient funds. Our estimates are based on our own professional experience and prior achieved results, which will vary depending on your specific circumstances. We do not guarantee that your debts will be resolved for a specific amount or percentage or within a specific period of time. We do not assume your debts, make monthly payments to your creditors or provide tax, bankruptcy, accounting or legal advice or credit repair services. Our service is not available in all states and our fees may vary from state to state. Please contact a tax professional to discuss potential tax consequences of less than full balance debt resolution. Read and understand all program materials prior to enrollment. The use of debt settlement services will likely adversely affect your creditworthiness, may result in you being subject to collections or being sued by creditors or collectors and may increase the outstanding balances of your enrolled accounts due to the accrual of fees and interest. However, negotiated settlements we obtain on your behalf resolve the entire account, including all accrued fees and interest.</p>
                        <p className='text-center font-medium text-xs text-[#1F2147] mt-2'>©2023 All Rights Reserved</p>
                    </div>
            </div>
        </>
    )
}

export default CreditDebt