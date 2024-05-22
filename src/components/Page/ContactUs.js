import React from 'react'
import Header from '../layout/Header'
import SecondFooter from '../layout/SecondFooter'

import brand from '../../img/brand.png'
import location from '../../img/location.PNG'


const ContactUs = () => {
    return (
        <>
            {/*1st section - nav bar */}
            <Header />

            {/*2nd section - MULTI-DIMENSIONAL BRANDING */}
            <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

                <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

                <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
                    <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>CONTACT US <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>LET'S TALK</span></p>
                    <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
                    <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>It's always better to speak with a real person. Let's get to know each other better and see how we can help.</p>
                </div>

            </section>



            {/* 3rd  section - contact us    */}
            <section className=' tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 tw-py-10 lg:tw-w-[70%] lg:tw-mx-auto'>
                <div className=' tw-flex tw-items-center tw-justify-center lg:tw-items-start tw-flex-col tw-mx-auto'>
                    <p className='tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-20'>CONTACT US <span className='tw-text-[#2c9be6] tw-font-bold'> TODAY!</span></p>
                    <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
                    <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>We just need a few details about yourself and the preferred method of communication. <br />So fill in a form and we promise to get back to you, as soon as possible..!</p>

                </div>

                <div className='lg:tw-grid tw-mx-7 lg:tw-grid-cols-3 lg:tw-px-10'>
                    <div>
                        <input type="text" placeholder='First Name*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Last Name*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                    </div>

                    <div>
                        <input type="text" placeholder='Phone Number*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                        <input type="text" placeholder='City*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                    </div>

                    <div>
                        <input type="text" placeholder='Company Name*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                        <input type="text" placeholder='Company Email*' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-[90%]' /><br />
                    </div>
                    <div className='tw-col-span-3'>
                        <input type="text" placeholder='Message or any comment' className='tw-outline-none tw-border-b-2 placeholder:tw-text-sm placeholder:tw-font-bold placeholder:tw-text-gray-400 tw-pl-3 tw-pb-2 tw-mt-12 tw-w-full' /><br />
                    </div>

                    <button className='tw-col-start-2 tw-col-end-3 tw-rounded-md tw-mx-5  tw-py-3 tw-mt-10 tw-text-white tw-font-semibold tw-bg-[#5db6f1] tw-w-[90%] lg:tw-w-auto'>Submit</button>
                </div>
            </section>


            {/*  4th section - golbe location */}
            <section className=' tw-flex tw-items-center tw-justify-center'>
                <img src={location} alt="" />
            </section>


            {/* 5th section - Footer */}
            <div className='tw-mt-40'>
            <SecondFooter />
            </div>
        </>
    )
}

export default ContactUs