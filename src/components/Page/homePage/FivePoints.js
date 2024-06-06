import React, { Fragment } from 'react'

import vision from '../../../img/vision_icon.svg'
import mission from '../../../img/mission_icon.svg'
// import motto from '../../../img/motto_icon.svg'
import value from '../../../img/values_icon.svg'
// import goal from '../../../img/goal_icon.svg'
import { useTranslation } from 'react-i18next'

import people from '../../../img/people.jpg'
import eye from '../../../img/eye.png'
import arrow from '../../../img/arrow.png'
import diamond from '../../../img/diamond.png'
import rocket from '../../../img/rocket.png'

const FivePoints = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='tw-mr-20 tw-ml-20 tw-mt-7'>
                <img src={people} alt="" className='tw-w-full tw-object-cover ' />

                <section className='tw-w-[75%] -tw-mt-40 tw-relative tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-xl tw-py-5 tw-px-20 tw-font-GoogleSans  '>
                    <p className='tw-text-3xl  tw-text-center'>The <span className='tw-text-[#1796be] '>core values and principles</span> that drive us</p>
                    <div className=' tw-grid tw-grid-cols-3 tw-gap-x-2 tw-pt-20'>
                        <div className='tw-pl-5'>
                            <img src={eye} alt="" className='tw-w-20 tw-mx-auto' />
                            <p className='tw-mt-5 tw-text-xl tw-font-medium tw-text-center'>Our Vision</p>
                            <p className='tw-text-lg '>Our vision is to create brands, business solutions, and Training for entrepreneurs and businesses, so that they can expand their business to a hig her level in the  ever-changing  business environ ment.</p>
                        </div>

                        <div className='tw-pl-10'>
                            <img src={arrow} alt="" className='tw-w-20 tw-mx-auto' />
                            <p className='tw-mt-5 tw-text-xl tw-font-medium text-center'>Our Mission</p>
                            <p className='tw-text-lg'>Our mission is to create entrepreneurs, power brands and build a meaningfuI future th rough advanced ideas.</p>
                        </div>

                        <div className='tw-pl-10 text-center'>
                            <img src={diamond} alt="" className='tw-w-20 tw-mx-auto' />
                            <p className='tw-mt-5 tw-text-xl tw-font-medium text-center'>Our Values</p>
                            <p className='tw-text-lg'>Limpidity</p>
                            <p className='tw-text-lg'>Virtuous</p>
                            <p className='tw-text-lg'>Gratitude</p>



                        </div>
                    </div>
                </section>
            </div>








        </>
    )
}

export default FivePoints