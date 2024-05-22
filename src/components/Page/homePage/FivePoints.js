import React, { Fragment } from 'react'

import vision from '../../../img/vision_icon.svg'
import mission from '../../../img/mission_icon.svg'
// import motto from '../../../img/motto_icon.svg'
import value from '../../../img/values_icon.svg'
// import goal from '../../../img/goal_icon.svg'
import { useTranslation } from 'react-i18next'

const FivePoints = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* new code */}
            <main className='tw-p-10  tw-gap-x-16 tw-border-4 tw-border-[#1796be] tw-mx-auto tw-w-[80%] tw-rounded-3xl tw-grid tw-grid-cols-3 tw-mt-10 tw-mb-5'>
                <section >
                    <img src={vision} className='tw-w-12' alt="" />
                    <p className='after:tw-h-1 after:tw-w-10 after:tw-block after:tw-bg-[#1796be] after:tw-rounded-2xl after:tw-mt-1 tw-mt-4 tw-text-gray-400'>Our <span className='tw-text-gray-700 tw-block tw-text-lg tw-font-PuviMedium '>Vision</span></p>
                    <p className='tw-mt-6 tw-text-base tw-font-PuviMedium'>
                        Our vision is to create brands, business solution & training for entrepreneurs and businesses, so that they can expand their business to a higher level in the ever- changing business environment
                    </p>
                </section>

                <section >
                    <img src={mission} className='tw-w-12' alt="" />
                    <p className='after:tw-h-1 after:tw-w-10 after:tw-block after:tw-bg-[#1796be] after:tw-rounded-2xl after:tw-mt-1 tw-mt-4 tw-text-gray-400'>Our <span className='tw-text-gray-700 tw-block tw-text-lg tw-font-PuviMedium '>Mission</span></p>
                    <p className='tw-mt-6 tw-text-base tw-font-PuviMedium'>
                        Our mission is to create entrepreneurs, power brands and build a meaningful future through advanced idea.
                    </p>
                </section>

                <section >
                    <img src={value} className='tw-w-12' alt="" />
                    <p className='after:tw-h-1 after:tw-w-10 after:tw-block after:tw-bg-[#1796be] after:tw-rounded-2xl after:tw-mt-1 tw-mt-4 tw-text-gray-400'>Our <span className='tw-text-gray-700 tw-block tw-text-lg tw-font-PuviMedium '>Values</span></p>
                    <p className='tw-mt-6 tw-text-base tw-font-PuviMedium'>
                        Limpidity <br />
                        Virtuous <br />
                        Gratitude
                    </p>
                </section>

                {/* <section >
                    <img src={goal} className='tw-w-12' alt="" />
                    <p className='after:tw-h-1 after:tw-w-10 after:tw-block after:tw-bg-[#1796be] after:tw-rounded-2xl after:tw-mt-1 tw-mt-4 tw-text-gray-400'>Our <span className='tw-text-gray-700 tw-block tw-text-lg tw-font-medium '>Goal</span></p>
                    <p className='tw-mt-6 tw-text-sm'>
                        Our goal is to create  and develop 100000  successful business  owners and brands  through Technology  and innovation by the  next 10 years.
                    </p>
                </section>

                <section >
                    <img src={motto} className='tw-w-12' alt="" />
                    <p className='after:tw-h-1 after:tw-w-10 after:tw-block after:tw-bg-[#1796be] after:tw-rounded-2xl after:tw-mt-1 tw-mt-4 tw-text-gray-400'>Our <span className='tw-text-gray-700 tw-block tw-text-lg tw-font-medium '>Motto</span></p>
                    <p className='tw-mt-6 tw-text-sm'>
                        We operate our client's business as if they're our own.
                    </p>
                </section> */}
            </main>



            {/* old code */}
            <main hidden>
                {/* vision */}
                <section className=' lg:tw-flex tw-my-10 '>
                    <img src={vision} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                    <div className='lg:tw-w-[40%] lg:tw-px-5 lg:tw-mt-10 tw-px-3'>
                        <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.vision')}</p>
                        <img src={vision} alt="" className='lg:tw-hidden tw-my-3' />

                        <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.vision_desc')}</p>
                    </div>
                </section>

                {/* mission */}
                <section className='lg:tw-flex tw-my-10'>
                    <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10 tw-text-right'>
                        <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.mision')}</p>
                        <img src={mission} alt="" className='lg:tw-hidden tw-my-3' />

                        <p className='tw-text-sm lg:tw-mt-20 lg:tw-pl-36 tw-text-justify'>{t('home.mision_desc')}.</p>
                    </div>
                    <img src={mission} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />

                </section>

                {/* values */}
                <section className='lg:tw-flex tw-my-10'>
                    <img src={value} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                    <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10'>
                        <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>{t('home.ourValues')}</p>
                        <img src={value} alt="" className='lg:tw-hidden my-3' />
                        {/* <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.value1')} <br />{t('home.value2')} <br />{t('home.value3')}</p> */}
                        <ul className='tw-list-disc tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>
                            <li>{t('home.value1')}</li>
                            <li>{t('home.value2')}</li>
                            <li>{t('home.value3')}</li>
                        </ul>
                    </div>
                </section>

                {/* goals */}
                {/* <section className='lg:tw-flex tw-my-10'>
                    <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10 tw-text-right'>
                        <p className='tw-text-[#5890de] tw-font-bold tw-text-xl '>{t('home.goal')}</p>
                        <img src={goal} alt="" className='lg:tw-hidden tw-my-3' />

                        <p className='tw-text-sm lg:tw-mt-20 lg:tw-pl-36 tw-text-justify'>{t('home.goal_desc')}.</p>
                    </div>
                    <img src={goal} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />

                </section> */}

                {/* motto */}
                {/* <section className='lg:tw-flex tw-my-10'>
                    <img src={motto} alt="" className='tw-hidden lg:tw-inline tw-w-[60%]' />
                    <div className='lg:tw-w-[40%] tw-px-3 lg:tw-px-5 lg:tw-mt-10'>
                        <p className='tw-text-[#5890de] tw-font-bold tw-text-xl'>{t('home.motto')}</p>
                        <img src={motto} alt="" className='lg:tw-hidden my-3' />
                        <p className='tw-text-sm lg:tw-mt-20 lg:tw-pr-36 tw-text-justify'>{t('home.motto_desc')}.</p>
                    </div>
                </section> */}
            </main>
        </>
    )
}

export default FivePoints