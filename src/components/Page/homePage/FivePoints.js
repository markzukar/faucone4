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

            <img src={people} alt="" className='tw-w-full tw-object-cover ' />

            <section className='tw-w-[75%] -tw-mt-40 tw-relative tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-xl tw-py-5 tw-px-20 tw-font-GoogleSans  '>
                <p className='tw-text-3xl  tw-text-center'>The <span className='tw-text-[#1796be] '>core values and principles</span> that drive us</p>
                <div className=' tw-grid tw-grid-cols-3 tw-gap-x-32 tw-pt-20'>
                    <div className='tw-pl-5'>
                        <img src={eye} alt="" className='tw-w-20' />
                        <p className='tw-mt-5 tw-text-xl tw-font-medium'>Our Vision</p>
                        <p className='tw-text-lg tw-text-gray-500'>25+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that's powered by you, our customer.</p>
                    </div>

                    <div className='tw-pl-10'>
                        <img src={eye} alt="" className='tw-w-20' />
                        <p className='tw-mt-5 tw-text-xl tw-font-medium'>Our Mission</p>
                        <p className='tw-text-lg tw-text-gray-500'>Our mission is to create entrepreneurs, power brands and build a meaningful future through advanced idea.</p>
                    </div>

                    <div className='tw-pl-10'>
                        <img src={eye} alt="" className='tw-w-20' />
                        <p className='tw-mt-5 tw-text-xl tw-font-medium'>Our Values</p>
                        <p className='tw-text-lg tw-text-gray-500'>Limpidity</p>
                        <p className='tw-text-lg tw-text-gray-500'>Virtuous</p>
                        <p className='tw-text-lg tw-text-gray-500'>Gratitude</p>



                    </div>
                </div>
            </section>

            <img src={rocket} alt="" className='tw-w-[90%] tw-mt-20 tw-mx-auto tw-rounded-3xl  ' />







        </>
    )
}

export default FivePoints