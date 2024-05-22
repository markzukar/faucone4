import React from 'react'
import awards1 from '../../../img/awards1.svg'
import awards2 from '../../../img/awards2.svg'
import awards3 from '../../../img/awards3.svg'
import awards4 from '../../../img/awards4.svg'
import awards5 from '../../../img/awards5.svg'
import awards6 from '../../../img/awards6.svg'

const Awards = () => {
    return (
        <>
            <section className='tw-bg-gray-100 tw-mt-20'>
                <p className='tw-font-bold tw-text-[#3a9ddb] tw-text-lg md:tw-text-xl tw-text-center  tw-py-10'>AWARDS AND RECOGNITION</p>
               
                <main className='tw-flex tw-justify-center tw-flex-wrap tw-gap-7 md:tw-gap-x-14 tw-pb-10 tw-mx-5'>
                    <img src={awards1} alt="" />
                    <img src={awards2} alt="" />
                    <img src={awards3} alt="" />
                    <img src={awards4} alt="" />
                    <img src={awards5} alt="" />
                    <img src={awards6} alt="" />
                </main>

                <div className='tw-flex tw-items-center tw-justify-center  tw-gap-x-10 tw-pb-10'>
                    <p className='tw-text-center'><b>More than 100,000</b> <br />Members</p>
                    <p className='tw-text-center'><b>More than 500,000</b> <br />Discussions</p>
                </div>
            </section>
        </>
    )
}

export default Awards