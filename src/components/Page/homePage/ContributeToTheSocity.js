import React from 'react'
import person from '../../../img/person.png'
import brand from '../../../img/brand.png'

import { useTranslation } from 'react-i18next'

const ContributeToTheSocity = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='tw-flex tw-justify-center tw-items-center tw-mt-10 tw-gap-x-3'>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>

                <p className='tw-text-[#2dbfea] tw-text-xl tw-font-bold tw-text-center  '>Contribution to Society</p>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>
            </div>

            <main>
                <section className='tw-flex tw-items-center tw-justify-center tw-bg-[#3753fc] tw-mt-9  tw-px-40 tw-font-PuviMedium'>

                    <div className=' tw-text-white tw-w-[50%] tw-mx-auto tw-px-10
                    ' >
                        <p className='tw-font-bold tw-text-4xl '>Women Empowerment</p>
                        <p className='tw-mt-4 tw-text-base'>
                            <b>Digital literacy:</b> Access to internet, allows women to receive training which opens the door to other essential skills <br /><br />

                            <b>Family and community impact:</b> An investment that yields a range of benefits that affect not just women but also their families and communities as a whole. <br /><br />

                            <b>Economical Development:</b> Enccrage women to create their own businesses, which would benefits both developing countries financially.
                        </p>
                    </div>

                    <div className='tw-w-[50%] '>
                        <img src={brand} alt="" className='tw-w-[500px] tw-mx-auto' />
                    </div>

                </section>

                <section className='tw-flex tw-items-center tw-justify-center tw-bg-[#24b5fc] tw-font-PuviMedium'>


                    <div className='tw-w-[50%] '>
                        <img src={brand} alt="" className='tw-w-[500px] tw-mx-auto' />
                    </div>

                    <div className=' tw-text-white tw-w-[30%] tw-mx-auto ' >
                        <p className='tw-font-bold tw-text-4xl'>Drivers of Startup Ecosystem</p>
                        <p className='tw-mt-4 tw-text-base'>The startup ecosystem is a collection Of individuals, companies, and associated organisations that work together to build and scale startups. Startup ecosystems are frequently developed in a very small geographic region with a centre Of gravity. such as a university or a cluster Of technology enterprises. Faucone is a major player in the Startup Ecosystem.</p>
                    </div>


                </section>

                <section className='tw-flex tw-items-center tw-justify-center tw-bg-[#7b7aef] tw-px-20 tw-font-PuviMedium'>

                    <div className=' tw-text-white tw-w-[30%] tw-mx-auto ' >
                        <p className='tw-font-bold tw-text-4xl'>Women Entreprenurship</p>
                        <p className='tw-mt-4 tw-text-base'>The increasing presence of women as entrepreneurs has led to significant business and economic growth in the country. Women-owned business enterprises are playing a prominent role in society by generating employment opportunities in the country, brining in demographic shifts and inspiring the next generation of women founders.</p>
                    </div>

                    <div className='tw-w-[50%] '>
                        <img src={brand} alt="" className='tw-w-[500px] tw-mx-auto' />
                    </div>

                </section>

                <section className='tw-flex tw-items-center tw-justify-center tw-bg-[#79abfd] tw-font-PuviMedium'>


                    <div className='tw-w-[50%] '>
                        <img src={brand} alt="" className='tw-w-[500px] tw-mx-auto' />
                    </div>

                    <div className=' tw-text-white tw-w-[30%] tw-mx-auto ' >
                        <p className='tw-font-bold tw-text-4xl'>Developing Gig Economy</p>
                        <p className='tw-mt-4 tw-text-base'>GIG Economy - India's gig workforce, estimated to be at 77 lakh in 2020-2021, is a expected to go up 2.35 crore by 2029-30. Faucone supports and provides opportunities for GIG Economy.</p>
                    </div>


                </section>


            </main>




            {/* old code */}
            <div hidden >
                <section className='tw-bg-gradient-to-r tw-from-sky-300 tw-to-red-400 tw-grid xs:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5 md:tw-gap-10 lg:tw-gap-0 lg:tw-gap-x-20 tw-mt-20 md:tw-mt-40 tw-px-5 tw-py-5 md:tw-px-10'>

                    <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                        <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-4xl'>{t('home.women_empower')}</p>
                        <p className='    tw-text-sm  md:tw-pt-10'>
                            <b>Digital literacy:</b> {t('home.women_empower_desc1')}

                            <br /><br /> <b>Family and community impact:</b> {t('home.women_empower_desc2')}.

                            <br /><br />  <b>Economical Development:</b> {t('home.women_empower_desc3')}.
                        </p>
                    </div>

                    <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                        <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.startup_ecoSystem')}</p>
                        <p className='     tw-text-base tw-pt-3'>{t('home.startup_ecoSystem_desc')}.</p>

                    </div>

                    <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                        <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.women_enterpernership')}</p>
                        <p className=' tw-text-base tw-pt-3'>{t('home.women_enterpernership_desc')}.</p>

                    </div>

                    <div className=' tw-bg-gray-200 tw-rounded-xl tw-px-9 tw-py-5 tw-bg-opacity-50'>
                        <p className='tw-mt-3 tw-text-[#41a5e8] tw-font-bold tw-text-xl'>{t('home.gig_economy')}</p>
                        <p className=' tw-text-base tw-pt-3'>{t('home.gig_economy_desc')}</p>
                    </div>

                </section>


                <section>
                    <p className='tw-text-center tw-py-10 tw-text-2xl md:tw-text-3xl tw-font-medium'>CONTRIBUTION TO SOCIETY</p>

                    <main>
                        <div className='tw-my-3 tw-bg-gradient-to-r tw-from-[#ffecb7] tw-to-[#feb4f0] tw-flex tw-items-center tw-justify-between tw-px-5 md:tw-px-10 lg:tw-px-36'>
                            <p className='tw-font-medium tw-text-xl md:tw-text-2xl tw-py-14'>WOMEN EMPOWERMENT</p>
                            <img src={person} alt="" className='tw-w-20 md:tw-w-32 ' />
                        </div>

                        <div className='tw-my-3 tw-bg-gradient-to-r tw-from-[#55cede] tw-to-[#227de5] tw-flex tw-items-center tw-justify-between tw-px-5 md:tw-px-10 lg:tw-px-36'>
                            <img src={person} alt="" className='tw-w-20 md:tw-w-32 ' />
                            <p className='tw-font-medium tw-text-xl md:tw-text-2xl tw-py-14 tw-text-white'>DRIVERS OF STARTUP ECO-SYSTEM</p>
                        </div>

                        <div className='tw-my-3 tw-bg-gradient-to-r tw-from-[#4162cd] tw-to-[#b368df] tw-flex tw-items-center tw-justify-between tw-px-5 md:tw-px-10 lg:tw-px-36'>
                            <p className='tw-font-medium tw-text-xl md:tw-text-2xl tw-py-14'>WOMEN ENTREPRENEURSHIP</p>
                            <img src={person} alt="" className='tw-w-20 md:tw-w-32 ' />
                        </div>

                        <div className='tw-my-3 tw-bg-gradient-to-r tw-from-[#e3bc50] tw-to-[#fe9d50] tw-flex tw-items-center tw-justify-between tw-px-5 md:tw-px-10 lg:tw-px-36'>
                            <img src={person} alt="" className='tw-w-20 md:tw-w-32 ' />
                            <p className='tw-font-medium tw-text-xl md:tw-text-2xl tw-py-14 tw-text-white'>DEVELOPING GIG ECONOMY</p>
                        </div>



                    </main>
                </section>
            </div>
        </>
    )
}

export default ContributeToTheSocity