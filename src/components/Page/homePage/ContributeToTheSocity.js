import React from 'react'
import women from '../../../img/women.png'
import fourwomen from '../../../img/fourwomen.png'
import system from '../../../img/system.png'
import economy from '../../../img/economy.png'

import { useTranslation } from 'react-i18next'

const ContributeToTheSocity = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='tw-flex tw-justify-center tw-items-center tw-mt-32 tw-gap-x-3'>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>

                <p className='tw-text-[#2dbfea] tw-text-3xl tw-font-bold tw-text-center  '>Contribution to Society</p>
                <p className='tw-bg-[#2dbfea] tw-h-[2px] tw-w-14  tw-rounded-2xl '></p>
            </div>

            <main className='tw-flex tw-mt-20 tw-mx-auto tw-w-[91%] tw-gap-x-20'>

                <section className='tw-bg-[#e8f0fe] tw-w-[50%] tw-rounded-3xl tw-mb-20'>
                    <p className='tw-text-center tw-font-medium tw-text-4xl tw-pt-10'>WOMEN <br /><span className='tw-font-normal'>EMPOWERMENT</span></p>
                    <img src={women} alt="" className='tw-mx-auto tw-mt-10 tw-w-[500px]' />
                </section>

                <section className='tw-bg-[#9fc8fe] tw-w-[50%] tw-rounded-3xl tw-mt-20'>
                    <p className='tw-text-center tw-font-medium tw-text-4xl tw-pt-10 '>DRIVERS OF <span className='tw-font-normal '>STARTUP <br />  ECO-SYSTEM</span></p>
                    <img src={system} alt="" className='tw-mx-auto tw-mt-20 tw-w-[200px]' />
                </section>
            </main>

            <main className='tw-flex  tw-mx-auto tw-w-[91%] tw-gap-x-20'>

                <section className='tw-bg-[#9fc8fe] tw-w-[50%] tw-rounded-3xl tw-mb-20'>
                    <p className='tw-text-center tw-font-medium tw-text-4xl tw-pt-10'>WOMEN <br /><span className='tw-font-normal'>ENTRPRENEURSHIP</span></p>
                    <img src={fourwomen} alt="" className='tw-mx-auto tw-pb-20 tw-w-[500px]' />
                </section>

                <section className='tw-bg-[#e8f0fe] tw-w-[50%] tw-rounded-3xl tw-mt-20'>
                    <p className='tw-text-center tw-font-medium tw-text-4xl tw-pt-10 tw-p-0'>DEVELOPING GIG <br /><span className='tw-font-normal'>ECONOMY</span></p>
                    <img src={economy} alt="" className='tw-mx-auto tw-mt-20 tw-w-[200px]' />
                </section>
            </main>
        </>
    )

}

export default ContributeToTheSocity