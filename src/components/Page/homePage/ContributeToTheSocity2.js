import React from 'react'
import girls from '../../../img/girls.png'
import girls2 from '../../../img/girls2.png'
import computer2 from '../../../img/computer2.png'
import computer from '../../../img/computer.png'


const ContributeToTheSocity2 = () => {
    return (
        <>
            <p className='tw-text-[#059fce] tw-text-center tw-font-GoogleSansMedium tw-my-20 tw-text-4xl'>Our Contribution <span className='tw-text-[#424242]'>to Society</span></p>

            <div class="tw-grid tw-gap-4 tw-grid-cols-2 tw-mx-20">

                <div className='tw-bg-[#069fce] tw-px-10 tw-rounded-2xl tw-flex tw-items-center tw-justify-between tw-h-[250px]'>
                    <div className='tw-w-[1px]'><p className='tw-font-medium tw-text-white tw-text-2xl'>WOMEN <br /><span className='tw-font-light'>EMPOWERMENT</span></p></div>
                    <div><img src={girls2} alt="" className='tw-mt-5 tw-w-[500px]' /></div>
                </div>

                <div className='tw-bg-[#cdecf5] tw-px-10 tw-rounded-2xl tw-flex tw-items-center tw-justify-between tw-h-[250px]'>
                    <div><img src={computer} alt="" className='tw-w-[400px]' /></div>
                    <div><p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-2xl'>DRIVERS OF <span className='tw-font-medium '>STARTUP <br />  ECO-SYSTEM</span></p></div>
                </div>

                <div className='tw-bg-[#cdecf5] tw-px-10 tw-rounded-2xl tw-flex tw-items-center tw-justify-between tw-h-[250px]'>
                    <div><img src={computer2} alt="" className='tw-w-[400px]' /></div>
                    <div><p className='tw-text-center tw-text-[#069fce]  tw-font-light tw-text-2xl'>DEVELOPING GIG <span className='tw-font-medium '><br /> ECONOMY</span></p></div>
                </div>
                <div className='tw-bg-[#069fce] tw-px-10 tw-rounded-2xl tw-flex tw-items-center tw-justify-between tw-h-[250px]'>
                    <div className='tw-w-[1px]'><p className='tw-font-medium tw-text-white tw-text-2xl'>WOMEN <br /><span className='tw-font-light'>ENTRPRENEURSHIP</span></p></div>
                    <div><img src={girls} alt="" className='tw-w-[500px] tw-h-[273px]' /></div>
                </div>
            </div >
        </>
    )
}

export default ContributeToTheSocity2