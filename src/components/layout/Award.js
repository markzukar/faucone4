import React from 'react'
import brandAward from '../../img/brandAward.PNG'
import resBrandAward from '../../img/resBrandAward.PNG'
import { useTranslation } from 'react-i18next'

const Award = () => {
    const { t } = useTranslation();
    return (
        <section className=' tw-flex tw-items-center tw-justify-center tw-flex-col tw-mb-20'>
            <p className='tw-font-abel tw-text-gray-500 tw-text-center tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-14 '>{t('OurBrands.business.successOn')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('OurBrands.business.severalContinet')}</span></p>
            <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto'></p>
            <p className='tw-text-center tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-10 tw-text-gray-500 md:tw-w-[89%] lg:tw-w-[80%]'>{t('OurBrands.business.successDesc')}.</p>
            <img src={resBrandAward} alt="" className='lg:tw-hidden tw-w-[75%] tw-mt-12' />
            <img src={brandAward} alt="" className='tw-mt-12 tw-hidden lg:tw-block' />
        </section>
    )
}

export default Award