import React from 'react'
import girls from '../../../img/girls.png'
import girls2 from '../../../img/girls2.png'
import computer2 from '../../../img/computer2.png'
import computer from '../../../img/computer.png'


const ContributeToTheSocity2 = () => {
    return (
        <>
            <p className='tw-text-[#059fce] tw-text-center tw-font-GoogleSansMedium tw-my-20 tw-text-4xl'>Our Contribution <span className='tw-text-[#424242]'>to Society</span></p>

            <div className='tw-bg-[#069fce] tw-mx-20 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <p className='tw-font-medium tw-text-white tw-text-4xl tw-text-center'>WOMEN <br /><span className='tw-font-light'>EMPOWERMENT</span></p>
                <img src={girls2} alt="" className='tw-mt-5 tw-w-[600px]' />
            </div>

            <div className='tw-bg-[#cdecf5] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <img src={computer} alt="" className='tw-w-[500px]' />
                <p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-4xl'>DRIVERS OF <span className='tw-font-medium '>STARTUP <br />  ECO-SYSTEM</span></p>
            </div>

            <div className='tw-bg-[#069fce] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <p className='tw-font-medium tw-text-white tw-text-4xl tw-text-center'>WOMEN <br /><span className='tw-font-light'>ENTRPRENEURSHIP</span></p>
                <img src={girls} alt="" className='tw-w-[500px]' />
            </div>


            <div className='tw-bg-[#cdecf5] tw-mx-20 tw-mt-10 tw-px-28 tw-rounded-2xl tw-flex tw-items-center tw-justify-between'>
                <img src={computer2} alt="" className='tw-w-[500px]' />
                <p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-4xl'>DEVELOPING GIG <span className='tw-font-medium '><br /> ECONOMY</span></p>
            </div>
        </>
    )
}

export default ContributeToTheSocity2