import React from 'react'
import brand_service_1 from '../../../img/brand_service_1.svg'
import brand_service_2 from '../../../img/brand_service_2.svg'
import brand_service_3 from '../../../img/brand_service_3.svg'
import brand_service_4 from '../../../img/brand_service_4.svg'
import brand_service_5 from '../../../img/brand_service_5.svg'
import brand_service_6 from '../../../img/brand_service_6.svg'
import brand_service_7 from '../../../img/brand_service_7.svg'
import brand_service_8 from '../../../img/brand_service_8.svg'
import brand_service_9 from '../../../img/brand_service_9.svg'
import brand_service_10 from '../../../img/brand_service_10.svg'
import brand_service_11 from '../../../img/brand_service_11.svg'
import brand_service_12 from '../../../img/brand_service_12.svg'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../carousal.css'


const OurBrandServices = () => {
    const { t } = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1021 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1020, min: 751 },
            items: 3,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 750, min: 451 },
            items: 2,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 450, min: 320 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className='tw-flex tw-justify-center tw-items-center tw-mt-32 tw-gap-x-3'>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>

                <p className='tw-text-[#2dbfea] tw-text-3xl tw-font-bold tw-text-center'>16 Solutions 1 Brand</p>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>
            </div>

            {/* <main className='tw-grid tw-grid-cols-4 tw-gap-x-10 tw-w-[90%] tw-mx-auto tw-mt-10 '> */}
            <div className='tw-p-10'>
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    dotListclassName="custom-dot-list-style"
                >
                    <section className='tw-shadow-xl tw-bg-[#dcf7ff] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE BUSINESS</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Business Services can meet all the needs of business consulting services. Our business services are carefully designed to perfectly meet the needs of each business and brand</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#f2f2f2] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE DIGITAL</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Digital offer a wide range of digital services and strategies to small, medium, and big organizations’, with the goal of increasing online and mobile presence, generating leads to extend your client base, and delivering substantial ROI and improved revenues</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#d6e8ff] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE TECHNOLOGIES</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Technologies can help you to grow your business and it is committed to create engaging Digital Experience through Technology</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>

                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE SOLUTIONS</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Solutions trust in providing value added and optimized IT and Software services to our customers and focus on quality, schedule and cost</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE FINANCE</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Finance understands that every business has unique financial needs. We are proud and working hard to provide business owners and entrepreneurs with the best financial solutions to ensure that they achieve their business goals</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE CONSULTANCY</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Consultancy service is a leading consultancy agency in staffing and sourcing across various industries. We formulate our recruitment in a very crafted way, which would give you a specified as- surance, keeping in mind, all the requirements of your business, giving you the ultimate satisfaction. This is because, we understand how aggressive the market has evolved today</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE STUDIO</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Studios Provides a wide range of Photography and video production services for al I Bra nds and Businesses</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE ADVERTISING</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Advertising is a representat¡on of a 36o-degree marketing company which provides advertising and PR services. We have been able to create a network of the greatest media businesses of all sorts, allowing us to provide the best service at competitive costs to brands both locally and globally</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE SPACE</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Office Space is the leading workspace provider. We've built an unparalleled network of office globally</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE DESIGN</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Interior design provides the best interior solution to help you stand out, win customers and manage your brand</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE PRINTS</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone prints is the one stop shop solution for all your Customized printing Needs. We deliver high-quality print services and ship across globally</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE ACCOUNTING</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Accounting offers a full range of services including accounting, financial,compliance, and IT audits, licenses, financial management, and audits</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE LEGAL</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Legal provide complete legal solutions for corporates like legal drafting, cyber laws, labour law, corporate law, industrial dispute, commercial disputes, etc</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE SUPPLIES</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone supplies provides the complete solution for all business essentials and industrial needs. We are one stop solution for all your office purchase needs. B2B Wholesale Online Shopping Store</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE ACADEMY</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Academy provides you with high-quality training for Children, College Students, Working Professionals. Acquire the in-Demand Skill With Faucone Academy. Career Guidance & Support. Live Session with Trainers</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                    <section className='tw-shadow-xl tw-bg-[#eff2f7] tw-border-[8px] tw-py-10 tw-px-8 tw-border-white tw-rounded-2xl tw-h-[100%]'>
                        {/* <img src={brand_service_6} alt="" /> */}
                        <p className='tw-font-bold tw-mt-3 tw-text-xl tw-font-PuviExtraBold'>FAUCONE OVERSEAS</p>
                        <p className='tw-mt-2 tw-text-base tw-font-PuviMedium'>Faucone Overseas provides complete business, study, and migration solutions  globally. we maintain an engaged and cooperative attitude with leading universities and professionals</p>

                        <button className='tw-flex tw-bg-white tw-mt-5 tw-border-2 tw-text-sm tw-font-medium tw-px-4 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-rounded-md tw-duration-300'>Read more</button>
                    </section>
                </Carousel>
                {/* </main> */}
            </div>

            {/* old code */}
            <section hidden className='tw-bg-blue-50 tw-mt-20 tw-mx-auto tw-w-[90%] tw-rounded-xl'>
                <p className='tw-tracking-[3px]  tw-font-bold tw-text-[#3a9ddb] tw-text-lg md:tw-text-xl tw-text-center tw-pt-10 md:tw-pt-16'>OUR BRAND SERVICES</p>
                <main className='tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-5 md:tw-gap-x-0 tw-gap-y-7 tw-pb-5 md:tw-pb-16'>

                    <div className='' >
                        <img src={brand_service_1} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity1')}</p>
                    </div>

                    <div>
                        <img src={brand_service_2} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity4')}</p>
                    </div>

                    <div>
                        <img src={brand_service_3} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity7')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_4} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity10')}</p>
                    </div>

                    <div>
                        <img src={brand_service_5} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity2')}</p>
                    </div>

                    <div>
                        <img src={brand_service_6} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity5')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_7} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity8')}</p>
                    </div>

                    <div>
                        <img src={brand_service_8} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity11')}</p>
                    </div>

                    <div>
                        <img src={brand_service_9} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity3')}</p>
                    </div>

                    <div className='' >
                        <img src={brand_service_10} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5 tw-mx-auto'>{t('home.socity6')}</p>
                    </div>

                    <div>
                        <img src={brand_service_11} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity9')}</p>
                    </div>

                    <div>
                        <img src={brand_service_12} alt="" className='tw-mx-auto' />
                        <p className='tw-text-center md:tw-w-[50%] tw-text-sm tw-mt-5  tw-mx-auto'>{t('home.socity12')}</p>
                    </div>
                </main>
            </section>
        </>
    )
}

export default OurBrandServices