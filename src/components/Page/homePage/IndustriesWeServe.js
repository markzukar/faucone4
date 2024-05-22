import React from 'react'
import Industries_1 from '../../../img/Industries_1.jpg'
import Industries_2 from '../../../img/Industries_2.jpg'
import Industries_3 from '../../../img/Industries_3.jpg'
import Industries_4 from '../../../img/Industries_4.jpg'
import Industries_5 from '../../../img/Industries_5.jpg'
import Industries_6 from '../../../img/Industries_6.jpg'
import Industries_7 from '../../../img/Industries_7.jpg'
import Industries_8 from '../../../img/Industries_8.jpg'
import Industries_9 from '../../../img/Industries_9.jpg'
import Industries_10 from '../../../img/Industries_10.jpg'
import Industries_11 from '../../../img/Industries_11.jpg'
import Industries_12 from '../../../img/Industries_12.jpg'
import Industries_13 from '../../../img/Industries_13.jpg'
import Industries_14 from '../../../img/Industries_14.jpg'
import Industries_15 from '../../../img/Industries_15.jpg'
import Industries_16 from '../../../img/Industries_16.jpg'
import Industries_17 from '../../../img/Industries_17.jpg'
import Industries_18 from '../../../img/Industries_18.jpg'
import Industries_19 from '../../../img/Industries_19.jpg'
import Industries_20 from '../../../img/Industries_20.jpg'
import Industries_21 from '../../../img/Industries_21.jpg'
import Industries_22 from '../../../img/Industries_22.jpg'
import Industries_23 from '../../../img/Industries_23.jpg'
import Industries_24 from '../../../img/Industries_24.jpg'
import { useTranslation } from 'react-i18next'

const IndustriesWeServe = () => {
    const { t } = useTranslation();
    return (
        <>
            <p className='tw-tracking-[3px]  tw-font-bold tw-text-[#3a9ddb] tw-text-lg md:tw-text-xl tw-text-center tw-pt-10 md:tw-pt-28 tw-mb-14'>{t('home.industriesWeServe.name')}</p>

            <main className='tw-grid xs:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-mx-auto tw-w-[90%] tw-gap-14 '>
                {/* 1 to 4 */}

                <div className=''>
                    <img src={Industries_1} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.aeroSpace.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.aeroSpace.pagragraph')}.</p>
                </div>

                <div>
                    <img src={Industries_2} alt="" className='tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.aviation.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.aviation.para1')}. <br /> {t('home.industriesWeServe.aviation.para2')}.</p>

                </div>

                <div>
                    <img src={Industries_3} alt="" className='tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.automotive.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.automotive.para')}.</p>
                </div>

                <div>
                    <img src={Industries_4} alt="" className='tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.banking.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.banking.para')}.</p>
                </div>

                {/* 5 to 8 */}
                <div className=''>
                    <img src={Industries_5} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.capital.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.capital.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_6} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.construction.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.construction.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_7} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '> {t('home.industriesWeServe.chemical.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.chemical.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_8} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.consumer.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'> {t('home.industriesWeServe.consumer.para')}.</p>
                </div>

                {/* 9 to 12 */}

                <div className=''>
                    <img src={Industries_9} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.energy.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.energy.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_10} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>FMCG</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.fmcg.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_11} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.Food.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.Food.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_12} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.healthCare.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.healthCare.para')}.</p>
                </div>

                {/* 13 to 16 */}

                <div className=''>
                    <img src={Industries_13} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.industrial.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.industrial.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_14} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.insurance.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.insurance.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_15} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.life.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.life.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_16} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.manufacture.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.manufacture.para')}.</p>
                </div>

                {/* 17 to 20 */}

                <div className=''>
                    <img src={Industries_17} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '> {t('home.industriesWeServe.media.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.media.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_18} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.mining.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.mining.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_19} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.oil.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.oil.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_20} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.public.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.public.para')}.</p>
                </div>

                {/* 21 to 24 */}
                <div className=''>
                    <img src={Industries_21} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.Retail.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.Retail.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_22} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.telecom.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.telecom.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_23} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.travel.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.travel.para')}.</p>
                </div>

                <div className=''>
                    <img src={Industries_24} alt="" className=' tw-h-[189px] tw-w-full tw-object-cover tw-rounded-xl tw-border-2 tw-border-blue-300' />
                    <p className=' tw-font-bold tw-text-[#3a9ddb] tw-text-lg tw-mt-3 '>{t('home.industriesWeServe.transport.name')}</p>
                    <p className='tw-text-sm  tw-text-justify'>{t('home.industriesWeServe.transport.para')}.</p>
                </div>
            </main>
        </>
    )
}

export default IndustriesWeServe