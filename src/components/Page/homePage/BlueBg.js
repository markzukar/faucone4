import React, { Fragment, useEffect, useState } from 'react'
import bluebg from '../../../img/bluebg.png'
import $ from 'jquery';


const BlueBg = () => {
    const [isFirstTime, setIsFirstTime] = useState(false);

    useEffect(() => {


    }, [isFirstTime])

    const Counterup = () => {
        if (!isFirstTime) {
            console.log("coming----------------->")
            setIsFirstTime(true)
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ".",
                decimal: ",",
                suffix: ""
            };

            var demo = new window.CountUp("counter", 0, $("#counter").text(), 0, 5, options);
            var demo1 = new window.CountUp("counter1", 0, $("#counter1").text(), 0, 5, options);
            var demo2 = new window.CountUp("counter2", 0, $("#counter2").text(), 0, 2, options);
            var demo3 = new window.CountUp("counter3", 0, $("#counter3").text(), 0, 10, options);
            var demo4 = new window.CountUp("counter4", 0, $("#counter4").text(), 0, 2, options);
            if (!demo.error) {
                demo.start();
                demo1.start();
                demo2.start();
                demo3.start();
                demo4.start();
            } else {
                console.error(demo.error);
            }
        } else {
            return;
        }
    }
    return (
        <>
            {/*  */}
            <main className='tw-bg-[#059fce]  tw-text-white tw-py-16 md:tw-px-20 lg:tw-p-0 lg:tw-pt-24 lg:tw-flex tw-items-end tw-rounded-3xl tw-border-solid tw-border-2 tw-mr-20 tw-ml-20 tw-mt-7' onMouseEnter={() => Counterup()}>

                <section className='lg:tw-pb-36 xl:tw-pl-20 tw-font-PuviMedium'>
                    <p className='tw-text-center lg:tw-text-left tw-text-3xl lg:tw-font-base lg:tw-text-6xl tw-font-medium '>Made for the <strong>Global</strong></p>
                    {/* <p className='tw-text-center lg:tw-text-left tw-text-3xl lg:tw-text-5xl tw-font-medium lg:tw-font-normal '>Made for the World.</p> */}


                    <div className='sm:tw-grid tw-grid-cols-5 sm:tw-mt-10 '>
                        <div className='tw-text-center tw-mt-14 sm:tw-mt-5 lg:tw-items-center '>
                            <p className='tw-text-6xl lg:tw-text-left tw-font-medium tw-tracking-wide lg:tw-w-32 '><span id="counter">250</span>+</p>
                            <br />
                            <p className='  lg:tw-text-left tw-text-base tw-text-gray-200'>Services</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-items-center tw-pl-3'>
                            <p className='tw-text-6xl tw-font-medium tw-tracking-wide lg:tw-w-32 '><span id="counter1">15</span>+</p>
                            <br />
                            <p className='  lg:tw-text-left tw-text-base'>Years in Business</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-items-center tw-pl-8'>
                            <p className='tw-text-6xl tw-font-medium tw-tracking-wide lg:tw-w-32 '><span id="counter2">12</span>+</p>
                            <br />
                            <p className='  lg:tw-text-left tw-text-base'>Countries Served</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-items-center tw-pl-8'>
                            <p className='tw-text-6xl tw-font-medium tw-tracking-wide lg:tw-w-32 '><span id="counter3">150</span>+</p>
                            <br />
                            <p className='  lg:tw-text-left tw-text-base'>Support Centers Globally</p>
                        </div>

                        <div className='tw-text-center lg:tw-text-left tw-mt-14 sm:tw-mt-5 lg:tw-items-center tw-pl-12'>
                            <p className='tw-text-6xl tw-font-medium tw-tracking-wide lg:tw-w-32 '><span id="counter4">20</span>+</p>
                            <br />
                            <p className='  lg:tw-text-left tw-text-base'>Unique Solutions</p>
                        </div>

                        {/* <div className='tw-flex tw-justify-center lg:tw-justify-start tw-items-center '>
                            <button className='tw-border tw-mt-14 sm:tw-mt-5 tw-px-6 tw-py-3 tw-font-medium tw-text-xs'>MORE ABOUT FAUCONE</button>
                        </div> */}

                    </div>
                </section>


                {/* <section className='md:tw-flex tw-justify-center tw-hidden lg:tw-inline tw-mr-24 tw-mb-6 '>
                    <img src={bluebg} alt="" className='tw-w-[570px] tw-mx-auto ' />
                </section> */}
            </main>
        </>
    )
}

export default BlueBg