import React from 'react'
import customersupport from '../../../img/customersupport.png'
import ladybackground from '../../../img/ladybackground.png';
import customerIcon from '../../../img/support1.png'
import experience from '../../../img/experience.png'
import technology from '../../../img/technology.png'

const CustomerSupport = () => {
    return (
        <>
            <section className='tw-flex tw-p-10 tw-items-center tw-justify-center tw-mt-5 tw-ml-20 tw-mr-20 tw-bg-[#0baad4] tw-font-PuviMedium tw-rounded-3xl tw-border-solid tw-border-2 '>


                <div className='tw-w-[50%]' style={{ "backgroundImage": `url(${ladybackground})` }}>
                    <img src={customersupport} alt="" className='tw-w-[300px]  tw-mx-auto' />
                </div>

                <div className=' tw-text-white tw-text-2xl tw-w-[40%] ' >

                    <div class="tw-flex tw-h-24 tw-items-center">
                        <div class="tw-flex-none tw-w-14 tw-content-center">
                            <img src={customerIcon} className="tw-h-14 tw-w-20" />
                        </div>
                        <div class="tw-flex-initial">
                            <p className='tw-pl-6 '>Customer support centre</p>
                        </div>
                    </div>
                    <div class="tw-flex tw-h-24 tw-items-center">
                        <div class="tw-flex-none tw-w-14 tw-content-center">
                            <img src={experience} className="tw-h-14 tw-w-20" />
                        </div>
                        <div class="tw-flex-initial">
                            <p className='tw-pl-6 '>Customer experience centre</p>
                        </div>
                    </div>
                    <div class="tw-flex tw-h-24 tw-items-center">
                        <div class="tw-flex-none tw-w-14 tw-content-center">
                            <img src={technology} className="tw-h-14 tw-w-20" />
                        </div>
                        <div class="tw-flex-initial ">
                            <p className='tw-pl-6'>Technology Development centre</p>
                        </div>
                    </div>

                    {/* <p className='tw-mt-5 '>Customer support centre</p>
                    <p className='tw-mt-5 '>Customer experience centre</p>
                    <p className='tw-mt-5 '>Technology Development centre</p> */}
                </div>





            </section>
        </>
    )
}

export default CustomerSupport