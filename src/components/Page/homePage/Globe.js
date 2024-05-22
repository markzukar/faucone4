import React from 'react'
import { useTranslation } from 'react-i18next'


const Globe = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='bg_map tw-bg-no-repeat tw-bg-bottom tw-pb-10 tw-mt-20'>
                <p className='tw-tracking-[3px]  tw-font-bold tw-text-[#3a9ddb] tw-text-lg md:tw-text-xl tw-text-center '>{t('home.globe_heading')}</p>

                <main className=' tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-mx-auto tw-w-[90%] lg:tw-w-[80%] tw-gap-x-5 tw-gap-y-2 md:tw-gap-x-10 md:tw-gap-y-7 xl:tw-gap-x-20 xl:tw-gap-y-10 tw-text-white  lg:tw-text-xl tw-my-10'>
                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.business')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.digital')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.technology')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.solution')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.finance')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.consultancy')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.studios')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.advertise')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.space')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.design')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.prints')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.accounting')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.legal')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.supplies')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-slate-600 tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.academy')}
                    </div>

                    <div className='tw-rounded-xl tw-text-center  tw-bg-[#2e93d2] tw-py-3 tw-font-bold tw-bg-opacity-70'>
                        {t('home.brands.overseas')}
                    </div>


                </main>



            </section>

        </>
    )
}

export default Globe