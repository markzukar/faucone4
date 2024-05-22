import React from 'react'
import Header from '../layout/Header'
import brand from '../../img/brand.png'
import empowerment from '../../img/empowerment.svg'

import Footer from '../layout/Footer'
import Award from '../layout/Award'

const Industries = () => {
    return (
        <>
            {/*1st section - nav bar */}
            <Header />

            {/*2nd section - faucone business */}
            <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

                <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

                <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
                    <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>INDUSTRIES <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>AUTOMOTIVE</span></p>
                    <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
                    <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>The increasing air travel rates, particularly in the emerging economies of North America and Latin America, and the rising disposable incomes around the world have been driving the growth of commercial aircraft globally.</p>
                </div>

            </section>

            {/* 3rd section - our msg */}
            <section className=' tw-flex tw-items-center tw-justify-center lg:tw-items-start tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 tw-py-10 lg:tw-w-[70%] lg:tw-mx-auto'>
                <p className='tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-20'>OUR <span className='tw-text-[#2c9be6] tw-font-bold'>MESSAGE</span></p>
                <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
                <p className='tw-text-center lg:tw-text-left  tw-px-5 lg:tw-px-20 tw-mt-8 tw-font-semibold tw-text-gray-600'>Improve processes, minimize risks and prepare for the digital future</p>
                <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>The Indian automobile industry has historically been a good indicator of how well the economy is doing, as the automobile sector plays a key role in both macroeconomic expansion and technological advancement. The two-wheelers segment dominates the market in terms of volume, owing to a growing middle class and a huge percentage of India's population being young. <br /><br /> Moreover, the growing interest Of companies in exploring the rural markets further aided the growth Of the sector. The rising logistics and passenger transportation industries are driving up demand for commercial vehicles. Future market growth is anticipated to be fueled by new trends including the electrification of vehicles, particularly three-wheelers and small passenger automobiles.</p>
            </section>

            {/* 4th section - SETTING STANDARDS */}
            <section className='tw-py-16 tw-bg-blue-50 tw-mt-24 tw-pr-2'>

                <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
                    <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>SETTING <span className='tw-text-[#2c9be6] tw-font-bold'>STANDARDS</span></p>
                    <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-6'></p>

                </div>

                <main className='tw-grid  lg:tw-grid-cols-2 tw-pl-2 tw-gap-y-14 lg:tw-gap-y-0 lg:tw-gap-x-16 tw-mt-10 tw-mx-auto lg:tw-mx-20 lg:tw-pb-14'>

                    <div className=''>
                        <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
                        <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>Check vehicles quickly and entirely</p>
                        <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center lg:tw-w-[80%] lg:tw-mx-auto tw-font-bold'>We are aware of the problems with vehicle takeovers. Little time, overlooked damages and the question of who takes responsibility. With Faucone, the vehicle entrance inspection is fast, complete and fully documented. A benefit for you and your customers.</p>
                    </div>

                    <div className=''>
                        <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
                        <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>Inspect anytime and anywhere</p>
                        <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center lg:tw-w-[80%] lg:tw-mx-auto tw-font-bold'>Faucone and after a few minutes available on the computer. whole fleets can be inspected whenever and wherever you want. And much more objectively. Because on our Digital you see more than you ever could standing on front of a vehicle.</p>
                    </div>

                </main>

            </section>

            {/* 5th section - award */}
            <Award/>

            {/* 6th section - Footer */}
            <Footer />




        </>
    )
}

export default Industries