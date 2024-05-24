import React from 'react'
import india from '../../img/india.svg'
import australia from '../../img/australia.svg'
import singapore from '../../img/singapore.svg'
import uae from '../../img/uae.svg'
import malaysia from '../../img/malaysia.svg'

import faucone from '../../img/faucone.png'

import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import linkedin from '../../img/linkedin.png'
import youtube from '../../img/youtube.png'
import twitter from '../../img/twitter.png'
import newTitle from '../../img/newtitle.PNG'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const aboutContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>About</p>
            <p className='tw-py-1'>Company</p>
            <p className='tw-py-1'>Industries</p>
            <p className='tw-py-1'>Our Brands</p>
            <p className='tw-py-1'>Services</p>
            <p className='tw-py-1'>Contact</p>
        </div>
    )

    const communityContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>Community</p>
            <p className='tw-py-1'>faucone Community</p>
            <p className='tw-py-1'>Faucone for Startups</p>
            <p className='tw-py-1'>Partner with Us</p>
            <p className='tw-py-1'>Customer Stories</p>
            <p className='tw-py-1'>Affiliate Program</p>
        </div>
    )

    const contactUSContent = (
        <div className='hover:tw-text-black md:tw-grid md:tw-justify-center '>
            <p className='tw-text-black tw-text-xl tw-hidden md:tw-block '>Contact Us</p>

            <p className='tw-py-1'>sales@faucone.com</p>
            <p className='tw-py-1'>support@faucone.com</p>
            <p className='tw-py-1'>1800 309 4377</p>
            <p className='tw-py-1'>www.faucone.com</p>
        </div>
    )
    return (
        <>

            <main className='tw-bg-[#f1f3f4] tw-mt-20 tw-py-16'>
                {/* follow us */}
                <section className='tw-flex tw-items-center tw-gap-x-10 tw-mx-40 tw-border-b-2 tw-pb-5 tw-border-[#e0e0e0]'>
                    <p className='tw-font-GoogleSansMedium tw-font-medium tw-text-[#202124] tw-text-[17px] tw-tracking-wide'>Follow Us </p>
                    <div className='tw-flex tw-items-center tw-gap-x-7'>
                        {/* <img src={facebook} alt="facebook" className='tw-w-5' /> */}
                        {/* <img src={youtube} alt="youtube" className='tw-w-6' /> */}
                        {/* <img src={twitter} alt="twitter" className='tw-w-4' />
                        <img src={instagram} alt="instagram" className='tw-w-5' />
                        <img src={linkedin} alt="linkedin" className='tw-w-5' /> */}
                        <a href='https://www.facebook.com/faucone' target="_blank" className='tw-text-gray-500'><p><FaFacebookSquare className='tw-text-2xl' /></p></a>
                        <a href='https://www.youtube.com/@faucone8395' target="_blank" className='tw-text-gray-500'><p><FaYoutube className='tw-text-3xl' /></p></a>
                        {/* <p><FaSquareXTwitter className='tw-text-2xl' /></p> */}
                        <a href='https://www.instagram.com/fauconegroup/' target="_blank" className='tw-text-gray-500'><p><FaInstagramSquare className='tw-text-2xl' /></p></a>
                        <a href='https://www.linkedin.com/company/faucone-business-solutions-pvt-ltd/' target="_blank" className='tw-text-gray-500'><p><FaLinkedin className='tw-text-2xl' /></p></a>

                    </div>
                </section>


                {/* main content */}
                <section className='tw-mx-40 tw-grid tw-grid-cols-4  tw-mt-10 '>
                    <div className=''>
                        <p className='tw-text-[#202124] tw-text-[17px] tw-font-GoogleSansMedium tw-text-xl'>Company</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium tw-text-[#5f6368] tw-text-xl'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>About us</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Our Story</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Clients</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Services</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Press</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Events</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Career</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Contact</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone for startups</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Customer Support center</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Customer Experience center</a>
                        </div>
                    </div>

                    <div className=' '>
                        <p className='tw-text-[#202124] tw-text-[17px] tw-font-GoogleSansMedium tw-text-xl'>Solutions</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium tw-text-[#5f6368] tw-text-xl'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'> Multi-Dimensional Branding & Marketing</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>3600 Advertising Solutions</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Brand Transformation</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Scaling Technology for Development</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Interlinking Business Concept</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Business Coaching</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Innovative Entrepreneurship Process</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Implementing a Quality Business Process</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Revenue 10X</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Career Planning and Development</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Startup Investor Connect</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Developing a Hybrid Work Model</a>
                        </div>
                    </div>

                    {/* <div className='tw-pl-5'>
                        <p className='tw-text-[#349fbf] tw-font-bold tw-text-lg'>Industries</p>
                        <div className='tw-mt-3 tw-text-sm'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Aerospace and Defense</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Aviation</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Automotive</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Banking & Finance</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Capital Markets</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Construction & Engineering</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Chemical and Process</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Consumer Goods</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Energy and Utilities</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>FMCG</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Food and Beverages</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Healthcare</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Industrial Manufacturing</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Insurance</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Life Sciences</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Manufacturing Industries</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Media and Enterainment</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Mining & Natural Resources</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Oil and Gas</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Publc Sector</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Retail</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Telecom</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Travel</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Transport, Logistics & Hospitality</a>
                        </div>
                    </div> */}

                    <div className=' tw-ml-16'>
                        <p className='tw-text-[#202124] tw-text-[17px] tw-font-GoogleSansMedium tw-text-xl'>Products</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium tw-text-[#5f6368] tw-text-xl'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Business</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Digital</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Technologies</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Solutions</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone finance</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Consultancy</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Studios</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Advertising</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Space</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Design</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Prints</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Accounting</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Legal</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Supplies</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Academy</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>Faucone Overseas</a>
                        </div>
                    </div>

                    <div className=''>
                        <p className='tw-text-[#202124] tw-text-[17px] tw-font-GoogleSansMedium tw-text-xl'>Contact Us</p>
                        <div className='tw-mt-3 tw-font-medium tw-font-GoogleSansMedium tw-text-[#5f6368] tw-text-xl'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>sales@faucone.com</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>support@faucone.com</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>1800 309 4377</a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'>www.faucone.com</a>
                        </div>
                    </div>

                </section>

                {/* footer */}
                <section className='tw-flex tw-items-center tw-justify-between tw-mx-40 tw-border-t-2 tw-mt-20 tw-pt-10 tw-border-[#e0e0e0]'>
                    <div className='tw-flex tw-items-center tw-gap-x-5'>
                        <img src={newTitle} alt="" className='tw-w-40' />

                        <div className='tw-flex tw-items-center tw-gap-x-3 tw-font-medium tw-font-GoogleSansMedium tw-text-[#5f6368] tw-text-xl'>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Security</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>IPR Complaints</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Anti-spam Policy</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Terms of Service</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Privacy Policy</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Cookie Policy</p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='vertical_line tw-pr-3'>Abuse Policy </p></a>
                            <a href='/' className='tw-py-[7px] tw-block tw-text-[#5f6368] tw-no-underline hover:tw-text-black'><p className='tw-pr-5'>Disclaimer</p></a>

                        </div>
                    </div>

                    <p className='tw-text-sm  tw-text-[#5f6368]'>&copy; {currentYear} Faucone. All Rights Reserved.</p>
                </section>
            </main>


            {/* old code*/}
            <section hidden className='tw-bg-blue-50 tw-mt-20'>

                {/* countries */}
                <div className='tw-flex tw-flex-wrap tw-justify-center tw-gap-x-16 md:tw-gap-x-20 lg:tw-gap-x-40 tw-py-20'>

                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={india} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>India</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={uae} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>UAE</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={australia} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Australia</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={malaysia} alt="" className=' ' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Malaysia</p>

                    </div>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
                        <img src={singapore} alt="" className=' tw-pr-2' />
                        <p className='tw-mt-2 tw-text-[#519fd3] tw-font-bold'>Singapore</p>

                    </div>

                </div>

                {/* about, community, contact us */}
                <main className=' md:tw-flex md:tw-mx-5 lg:tw-mx-20'>
                    {/* faucone content */}
                    <div className='md:tw-w-[30%] lg:tw-w-[40%] tw-mb-10 '>
                        <img src={newTitle} alt="" />
                        <p className='tw-text-justify tw-mx-3 tw-mt-2 tw-text-sm lg:tw-mx-5 lg:tw-w-10/12 '>Faucone believes it is inevitable that the country will become the biggest market for the company. Working on software that can help developers generate correct code 'by design'. Apply this technology to building its future products."</p>
                    </div>

                    {/*RES  */}
                    <Accordion alwaysOpen className='md:tw-hidden' >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>About</Accordion.Header>
                            <Accordion.Body>
                                {aboutContent}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Community</Accordion.Header>
                            <Accordion.Body>
                                {communityContent}
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Contact Us</Accordion.Header>
                            <Accordion.Body>
                                {contactUSContent}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* laptop */}
                    <div className=' tw-hidden md:tw-grid tw-grid-cols-3 md:tw-w-[70%] lg:tw-w-[60%]'>
                        {aboutContent}
                        {communityContent}
                        {contactUSContent}
                    </div>
                </main>

                {/* social media icons */}
                <div className='tw-pb-10 tw-mt-14 tw-px-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6 ' >
                    <img src={twitter} alt="twitter" className='tw-w-6' />
                    <img src={facebook} alt="facebook" className='tw-w-7' />
                    <img src={instagram} alt="instagram" className='tw-w-7' />
                    <img src={linkedin} alt="linkedin" className='tw-w-7' />
                    <a href='https://www.youtube.com/@faucone8395'><img src={youtube} alt="youtube" className='tw-w-9' /></a>
                </div>

                {/* footer nav bar */}
                <div className='tw-flex tw-items-center tw-justify-center tw-gap-x-5 tw-flex-wrap tw-text-sm md:tw-text-base tw-pb-10'>
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
                <div className='tw-bg-white-50 tw-border-t-4 tw-border-[#0b0d1f] tw-py-14 tw-flex tw-gap-y-5 tw-flex-col tw-justify-center tw-items-center'>

                    <img src={faucone} alt="" className='tw-w-[200px]  ' />

                    <p >&copy; {currentYear} Faucone. All Rights Reserved.</p>

                </div>

            </section>

        </>
    )
}

export default Footer