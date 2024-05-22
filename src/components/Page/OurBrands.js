import React from 'react'
import Header from '../layout/Header'
import brand from '../../img/brand.png'
import empowerment from '../../img/empowerment.svg'

import faucone from '../../img/faucone.png'

import Footer from '../layout/Footer'
import Award from '../layout/Award'
import { useTranslation } from 'react-i18next'

const OurBrands = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*1st section - nav bar */}
      <Header />

      {/*2nd section - faucone business */}
      <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

        <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

        <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
          <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>FAUCONE <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>{t('OurBrands.business.title')}</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
          <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>{t('OurBrands.business.titleDesc')}.</p>

        </div>

      </section>

      {/* 3rd section - our msg */}
      <section className=' tw-flex tw-items-center tw-justify-center lg:tw-items-start tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 tw-py-10 lg:tw-w-[70%] lg:tw-mx-auto'>
        <p className='tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  lg:tw-px-20'>{t('OurBrands.business.our')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('OurBrands.business.message')}</span></p>
        <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-20'></p>
        <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-20 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>{t('OurBrands.business.messageContent')}.</p>
      </section>

      {/* 4th section - leading the way */}
      <section className='tw-py-16 tw-bg-blue-50 tw-mt-24 tw-pr-2'>

        <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
          <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>{t('OurBrands.business.leading')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('OurBrands.business.theWay')}</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-6'></p>

        </div>

        <main className='tw-grid  lg:tw-grid-cols-3 tw-pl-2 tw-gap-y-14 lg:tw-gap-y-0 lg:tw-gap-x-16 tw-mt-10 tw-mx-auto lg:tw-mx-20 lg:tw-pb-14'>
          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>{t('OurBrands.business.businessConsult')}</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>{t('OurBrands.business.businessConsultDesc')}</p>

          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>{t('OurBrands.business.brandMarketting')}</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>{t('OurBrands.business.brandMarketingDesc')}</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-7 lg:tw-my-5 tw-text-center'>{t('OurBrands.business.movieAnalysis')}</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>{t('OurBrands.business.movieAnalysisDesc')}</p>
          </div>

        </main>

      </section>

      {/* 5th section - award */}
      <Award />

      {/* 6th section - faucone */}
      <section className='tw-mt-72 tw-mb-40'>

        <img src={faucone} alt="" className='tw-w-[80%] lg:tw-w-[25%]  tw-mx-auto' />

        <p className='tw-text-[#49b0ff] tw-text-center tw-font-bold tw-text-lg tw-w-[70%] tw-mx-auto tw-mt-10 lg:tw-mt-5'>{t('OurBrands.business.bookConsult')}!</p>
        <p className='tw-text-center tw-text-gray-500 tw-mx-5 tw-font-semibold tw-mt-5 tw-text-sm'>with our Infrastructure Management services</p>
        <button onClick={() => window.location.href = '/contact-us'} className='tw-bg-[#2c9be6] tw-text-white tw-block tw-mx-auto tw-mt-10 tw-font-bold tw-rounded-md tw-px-16 tw-py-3'>{t('OurBrands.business.contactus')}</button>
      </section>

      {/* 7th section - Footer */}
      <Footer />




    </>
  )
}

export default OurBrands