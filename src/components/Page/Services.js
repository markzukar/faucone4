import React from 'react'
import Header from '../layout/Header'
import brand from '../../img/brand.png'
import empowerment from '../../img/empowerment.svg'

import service from '../../img/service.PNG'
import Footer from '../layout/Footer'
import Award from '../layout/Award'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      {/*1st section - nav bar */}
      <Header />

      {/*2nd section - MULTI-DIMENSIONAL BRANDING */}
      <section className='lg:tw-flex tw-items-center tw-justify-center lg:tw-mx-16'>

        <img src={brand} alt="" className='tw-mt-8 lg:tw-order-1 md:tw-w-[40%]' />

        <div className=' tw-flex lg:tw-block tw-items-center tw-justify-center tw-flex-col lg:tw-w-[50%]'>
          <p className='tw-font-abel tw-text-[#2c9be6] tw-text-center lg:tw-text-left tw-tracking-[3px] tw-text-2xl md:tw-text-4xl tw-mt-5 tw-font-bold tw-mx-10'>{t('services.multiDimensinal.title1')} <span className=' tw-text-gray-500 tw-font-normal lg:tw-block'>{t('services.multiDimensinal.title2')}</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-4 tw-mx-auto lg:tw-mx-10'></p>
          <p className='tw-text-center lg:tw-text-left lg:tw-mx-5 tw-text-sm md:tw-text-base tw-px-5 tw-mt-4 tw-text-gray-600 lg:tw-w-[80%]'>{t('services.multiDimensinal.titleDesc')}.</p>
        </div>

      </section>

      {/* 3rd section - 2 blue box */}
      <section className='lg:tw-grid lg:tw-grid-cols-2 items-start lg:tw-mx-40 lg:tw-g  lg:tw-mt-16 '>
        {/* 1st box */}
        <div className='  tw-flex tw-items-center  tw-justify-center lg:tw-justify-start lg:tw-items-end tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 lg:tw-my-0 tw-py-10 lg:tw-py-10 lg:tw-px-10 '>
          <img src={brand} alt="" className=' tw-text-center tw-w-[80%] md:tw-w-[40%] ' />
          <p className=' lg:tw-text-right tw-font-abel tw-text-gray-500 tw-text-center  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl  '>{t('services.multiDimensinal.whatIs')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('services.multiDimensinal.branding')}?</span></p>
          <p className=' tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-0'></p>
          <p className=' lg:tw-text-right tw-text-center  tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-0 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>{t('services.multiDimensinal.brandingAns1')}. <br /><br />{t('services.multiDimensinal.brandingAns2')} <br /><br />{t('services.multiDimensinal.brandingAns3')}.</p>

        </div>

        {/* 2nd box */}
        <div className=' tw-flex tw-items-center tw-justify-center lg:tw-justify-start lg:tw-items-start tw-flex-col tw-border-4 tw-border-[#2c9be6] lg:tw-outline lg:tw-outline-8 lg:tw-outline-[#cae6f8] tw-rounded-3xl tw-mx-5 tw-my-20 lg:tw-my-0 tw-py-10 lg:tw-py-10 lg:tw-px-10 '>
          <img src={brand} alt="" className='tw-w-[80%]  md:tw-w-[40%]' />
          <p className='tw-font-abel tw-text-gray-500 tw-text-center lg:tw-text-left  tw-tracking-[3px] tw-text-2xl md:tw-text-4xl '>{t('services.multiDimensinal.whatIs')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('services.multiDimensinal.marketing')}?</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10  tw-mt-4 tw-mx-auto  lg:tw-mx-0'></p>
          <p className='tw-text-center lg:tw-text-left tw-text-sm tw-font-semibold tw-px-5 lg:tw-px-0 tw-mt-8 tw-text-gray-500 tw-opacity-90 '>{t('services.multiDimensinal.marketingAns1')}. <br /><br />{t('services.multiDimensinal.marketingAns2')}.<br /><br /> {t('services.multiDimensinal.marketingAns3')}.</p>
        </div>
      </section>

      {/* 4th section - BUILDING THE STRATEGY */}
      <section className='tw-py-16 tw-bg-blue-50 tw-mt-24 tw-pr-2'>

        <div className=' tw-flex tw-justify-center tw-items-center tw-flex-col '>
          <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>{t('services.multiDimensinal.buildingthe')} <span className='tw-text-[#2c9be6] tw-font-bold'>{t('services.multiDimensinal.strategy')}</span></p>
          <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-6'></p>
        </div>

        <main className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-pl-2 tw-gap-y-14 lg:tw-gap-y-10 lg:tw-gap-x-10 tw-mt-10 tw-mx-auto lg:tw-mx-20  lg:tw-pl-0'>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#397399] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>{t('services.multiDimensinal.research')}</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>{t('services.multiDimensinal.researchDesc')}</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>{t('services.multiDimensinal.goals')}</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>{t('services.multiDimensinal.goalsDesc')}</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Audience definition</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Create a brand identity</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Messaging & positioning</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Develop brand guidelines</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>
          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Rollout timeline</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>

          <div className=''>
            <img src={empowerment} alt="" className='tw-w-28 tw-h-24 tw-mx-auto' />
            <p className='px-4 tw-text-[#2c9be6] tw-font-bold  tw-my-3 lg:tw-my-5 tw-text-center'>Brand measurement</p>
            <p className='tw-px-2 tw-pl-6 tw-text-gray-500 tw-text-sm tw-text-center tw-font-bold'>At accusamus dignissimos qui blanditiis praesentium corrupti molestias excepturi</p>
          </div>



        </main>

      </section>

      {/* 5th section - DEVELOPMENT STRATEGY */}
      <section className='tw-mt-24 tw-mb-10 tw-flex tw-justify-center tw-items-center tw-flex-col ' >
        <p className='tw-tracking-[3px] tw-font-abel tw-text-gray-600 tw-text-2xl md:tw-text-4xl'>DEVELOPMENT <span className='tw-text-[#2c9be6] tw-font-bold'>STRATEGY</span></p>
        <p className='tw-bg-[#2c9be6] tw-h-0.5 tw-w-10 tw-mt-6'></p>
        <p className='tw-text-center tw-text-gray-500 tw-mx-8 tw-font-medium lg:tw-w-[70%] tw-my-10 tw-text-sm'>We make sure your brand stays relevant. To strengthen your brand, you must continuously develop it as per a consistent brand strategy and innovate it. After getting your branding strategy in place, Faucone as your branding agency makes sure that you have the right tools for interacting with the market. This includes everything from your logo to your website and brand identity tools like taglines and mottos.</p>

        <img src={service} alt="" className='tw-w-[80%] lg:tw-w-[35%]  tw-mx-auto' />
        <p className='tw-text-center tw-text-gray-500 tw-mx-8 tw-font-medium lg:tw-w-[50%] tw-my-10 tw-text-sm'>faucone will help you with your brand development strategy. We take care of everything• from brand messaging and web designing to content marketing and social media branding. Not only do we make your brand more visible to the world, but we also make sure there is enough to talk about it. We track your development, and when the situation calls for it, we also help you make changes so that your progress remains unhindered.</p>
      </section>

      {/* 6th section - award */}
      <Award />


      {/* 7th section - Footer */}
      <Footer />




    </>
  )
}

export default Services