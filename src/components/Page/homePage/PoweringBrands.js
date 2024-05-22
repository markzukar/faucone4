import React from 'react'
import banner_image from '../../../img/banner_image.png'
import { useTranslation } from 'react-i18next';
const PoweringBrands = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='tw-text-7xl tw-font-bold tw-bg-gradient-to-r tw-text-[#1da9fd] tw-bg-clip-text'></div>

            <main className='lg:tw-flex tw-relative'>
                <div class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-w-[50%] md:tw-w-[30%] tw-h-full tw-bg-gradient-to-br tw-from-blue-200 tw-to-transparent tw-via-transparent"></div>

                <section className='tw-order-2 tw-mx-auto tw-pr-10'>
                    <div className='tw-relative '>

                        <img src={banner_image} alt="Your" className="tw-mx-auto tw-block tw-w-[800px] tw-h-[700px]" />
                        <div className="tw-absolute  tw-inset-x-0 tw-bottom-0 tw-h-60 tw-bg-gradient-to-b tw-from-transparent tw-to-white"></div>
                    </div>
                </section>

                <section className=' md:tw-p-24 tw-text-center md:tw-text-left tw-py-24'>
                    <p className='tw-font-medium tw-text-black tw-text-2xl md:tw-text-2xl'>{t('home.power')} <br className='tw-hidden md:tw-inline' /> <span className=' tw-tracking-[3px] md:tw-text-6xl tw-font-bold tw-text-[#1da9fd]'>{t('home.brand')}</span></p>
                    <p className='tw-font-medium tw-text-black tw-text-2xl md:tw-text-2xl tw-my-5'> {t('home.create')} <br className='tw-hidden md:tw-inline' /><span className=' tw-tracking-[3px] md:tw-text-6xl tw-font-bold tw-text-[#1da9fd]'>{t('home.enterpernur')}</span></p>
                    <p className=' tw-mt-6 tw-text-base sm:tw-text-base tw-px-3 tw-w-[60%] tw-font-PuviMedium'>{t('home.sub_content')}.</p>
                </section>


            </main>
        </>
    )
}

export default PoweringBrands