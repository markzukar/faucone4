import React from 'react'
import brand from '../../../img/brand.png'

const CustomerSupport = () => {
    return (
        <>
            <section className='tw-flex tw-items-center tw-justify-center tw-mt-5 tw-ml-20 tw-mr-20 tw-bg-[#0baad4] tw-font-PuviMedium tw-rounded-3xl tw-border-solid tw-border-2 '>


                <div className='tw-w-[50%] '>
                    <img src={brand} alt="" className='tw-w-[500px] tw-mx-auto' />
                </div>

                <div className=' tw-text-white tw-w-[40%] ' >
                    <p className='tw-font-bold tw-mt-10 tw-text-4xl'>Customer support centre</p>
                    <p className=' tw-mt-3 tw-text-base'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qui consequuntur magni dolores eosqui ratione voluptatem sequi nesciunt orro est, qu dolorem ipsum quia dolor sit amet, consectetur, adipisci velittotam rem aperiam eaque quae inventore veritatis beatae vitae dicta sunt explicabo.
                    </p>

                    <p className='tw-font-bold tw-mt-7 tw-text-4xl'>Customer experience centre</p>
                    <p className='tw-mt-3 tw-text-base'>Aquia non numquam eius modi incidunt ut labore aliquam quaerat voluptatem nim  ad minima veniam, quis nostrum ullam corporis suscipit laboriosam, nisi ut aliquid ex  ea commodi consequatur
                    </p>
                </div>


            </section>
        </>
    )
}

export default CustomerSupport