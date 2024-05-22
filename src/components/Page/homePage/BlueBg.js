import React, { Fragment } from 'react'
import zoho_bg from '../../../img/zoho_bg.PNG'


const BlueBg = () => {
    return (
        <>
            {/*  */}
            <main className='tw-bg-[#0060b4] tw-text-white tw-py-16 md:tw-px-36 lg:tw-p-0 lg:tw-pt-24 lg:tw-flex tw-items-end'>

                <section className='lg:tw-w-[70%] lg:tw-pl-20 lg:tw-pb-44 xl:tw-pl-36 tw-font-PuviMedium'>
                    <p className='tw-text-center lg:tw-text-left tw-text-3xl lg:tw-font-bold lg:tw-text-6xl tw-font-medium'>Made for the <strong>Global</strong></p>
                    {/* <p className='tw-text-center lg:tw-text-left tw-text-3xl lg:tw-text-5xl tw-font-medium lg:tw-font-normal '>Made for the World.</p> */}


                    <div className='sm:tw-grid tw-grid-cols-2 sm:tw-mt-10 '>
                        <div className='tw-text-center tw-mt-14 sm:tw-mt-5 lg:tw-flex lg:tw-items-center '>
                            <p className='tw-text-3xl lg:tw-text-left tw-font-medium tw-tracking-wide lg:tw-w-32 '>250+</p>
                            <p className='  lg:tw-text-left lg:tw-border-b tw-font-bold'>Services</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-flex lg:tw-items-center '>
                            <p className='tw-text-3xl tw-font-medium tw-tracking-wide lg:tw-w-32 '>15+</p>
                            <p className='  lg:tw-text-left lg:tw-border-b tw-font-bold'>Years in Business</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-flex lg:tw-items-center '>
                            <p className='tw-text-3xl tw-font-medium tw-tracking-wide lg:tw-w-32 '>12+</p>
                            <p className='  lg:tw-text-left lg:tw-border-b tw-font-bold'>Countries Served</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-flex lg:tw-items-center '>
                            <p className='tw-text-3xl tw-font-medium tw-tracking-wide lg:tw-w-32 '>150+</p>
                            <p className='  lg:tw-text-left lg:tw-border-b tw-font-bold'>Support Centers Globally</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-flex lg:tw-items-center '>
                            <p className='tw-text-3xl tw-font-medium tw-tracking-wide lg:tw-w-32 '>20+</p>
                            <p className='  lg:tw-text-left lg:tw-border-b tw-font-bold'>Unique Solutions</p>
                        </div>

                        {/* <div className='tw-flex tw-justify-center lg:tw-justify-start tw-items-center '>
                            <button className='tw-border tw-mt-14 sm:tw-mt-5 tw-px-6 tw-py-3 tw-font-medium tw-text-xs'>MORE ABOUT FAUCONE</button>
                        </div> */}

                    </div>
                </section>


                <section className='md:tw-flex tw-justify-center tw-hidden lg:tw-inline  '>
                    <img src={zoho_bg} alt="" className='tw-w-[70%] lg:tw-w-auto ' />
                </section>
            </main>
        </>
    )
}

export default BlueBg