import React from 'react'

const SecondFooter = () => {

    const currentYear = new Date().getFullYear();

    return (

        <>
            {/* footer nav bar */}
            <div className='tw-flex tw-items-center tw-justify-center tw-gap-x-5 tw-flex-wrap tw-text-xs'>
                <p className='vertical_line tw-pr-5'>Security</p>
                <p className='vertical_line tw-pr-5'>IPR Complaints</p>
                <p className='vertical_line tw-pr-5'>Anti-spam Policy</p>
                <p className='vertical_line tw-pr-5'>Terms of Service</p>
                <p className='vertical_line tw-pr-5'>Privacy Policy</p>
                <p className='vertical_line tw-pr-5'>Cookie Policy</p>
                <p className='vertical_line tw-pr-5'>Abuse Policy </p>
                <p className='tw-pr-5'>Disclaimer</p>
            </div>

            {/* black footer */}
            <div className='tw-bg-white-50 tw-text-sm tw-flex tw-gap-y-5 tw-flex-col tw-justify-center tw-items-center'>


                <p >&copy; {currentYear} Faucone. All Rights Reserved.</p>

            </div>

        </>
    )
}

export default SecondFooter