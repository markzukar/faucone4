import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RiSearchLine } from 'react-icons/ri';
import { TbSpeakerphone } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import digital from '../../img/digital2.png'
import {
    Collapse,
    Dropdown,
    Ripple,
    initTWE,
} from "tw-elements";
import title from '../../img/title.png'
import Language from './Language';

const NewHeader = () => {
    const { t } = useTranslation();
    useEffect(() => {
        initTWE({ Collapse, Dropdown, Ripple });
    }, [])

    return (
        <div className='tw-z-50  tw-top-0 tw-sticky tw-bg-white'>
            <nav
                className="tw-relative tw-flex tw-items-center tw-justify-between tw-gap-x-5 tw-px-5  md:tw-px-20 tw-py-4"
                data-twe-navbar-ref>
                <div className='lg:tw-flex  lg:tw-items-center lg:tw-gap-x-12   '>
                    <Link to={'/'} className=' '>
                        <img src={title} alt="" />
                    </Link>
                    <div className="!tw-visible tw-hidden tw-flex-grow tw-basis-[100%] tw-items-center lg:!tw-flex lg:tw-basis-auto"
                        id="navbarSupportedContent1"
                        data-twe-collapse-item>
                        <ul className="me-auto tw-flex tw-flex-row" data-twe-navbar-nav-ref>
                            {/* <li data-twe-nav-item-ref>
                                <a
                                    className="tw-block tw-py-2 pe-2 text-black/60 tw-transition tw-duration-200 hover:text-black/80 hover:tw-ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:tw-transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:tw-px-2"
                                    href="/"
                                >Regular link</a
                                >
                            </li> */}

                            <li className="tw-static" data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className="tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black tw-font-PuviMedium tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >Solutions
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>

                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-2xl data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>

                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">
                                            <div>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Business')}
                                                </a>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Digital')}
                                                </a>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Technologies')}
                                                </a>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Solutions')}
                                                </a>

                                            </div>

                                            <div>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Finance')}
                                                </a>
                                                <a
                                                    href="#!"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25">
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Consultancy')}
                                                </a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Studios')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Advertising')}</a>


                                            </div>

                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Space')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Design')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Prints')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Accounting')}</a>


                                            </div>

                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Legal')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Supplies')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Academy')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.ourBrands.Overseas')}</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="tw-static " data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className=" tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black tw-font-PuviMedium tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >{t('mainHeader.industries.name')}
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>





                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-lg data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>
                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">


                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.aero')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.aviation')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.automotive')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.bankFinance')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.capital')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.construction')}</a>
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.chemical')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.consumer')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.energy')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.fmcg')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.food')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.health')}</a>
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.industrial')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.insurance')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.lifeScience')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.manufacture')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.media')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.mining')}</a>
                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.oil')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.public')}</a>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.retail')}</a>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.telecom')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.travel')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    {t('mainHeader.industries.transport')}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            {/* <li className="tw-static " data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className=" tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black tw-font-PuviMedium tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >Services
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>

                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-lg data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>
                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.multi')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.advertise')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.brand')}</a>

                                            </div>
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.scaling')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.interlink')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.business')}</a>

                                            </div>
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.innovative')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.quality')}</a>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.revenue')}</a>

                                            </div>
                                            <div>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.career')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.startup')}</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-2 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>{t('mainHeader.services.hybird')}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li> */}

                            <li className="tw-static " data-twe-nav-item-ref data-twe-dropdown-ref>
                                <a
                                    className=" tw-flex tw-no-underline tw-items-center tw-whitespace-nowrap tw-py-2 pe-2 tw-text-black tw-font-PuviMedium tw-transition tw-duration-200 hover:tw-text-black/80 hover:tw-ease-in-out focus:tw-text-black/80 active:tw-text-black/80 motion-reduce:tw-transition-none dark:tw-text-white/60 dark:hover:tw-text-white/80 dark:focus:tw-text-white/80 dark:active:tw-text-white/80 lg:tw-px-2"
                                    href="/"
                                    type="button"
                                    id="dropdownMenuButtonX"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-nav-link-ref
                                >{t('mainHeader.company')}
                                    <span className="tw-ms-2 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>

                                <div
                                    className=" after:tw-block after:tw-h-screen tw-bg-black tw-bg-opacity-50 tw-absolute tw-left-0 tw-right-0 tw-top-full z-[1000] tw-mt-0 tw-hidden tw-w-full tw-border-none  tw-bg-clip-padding tw-shadow-lg data-[twe-dropdown-show]:tw-block dark:tw-bg-neutral-700"
                                    aria-labelledby="dropdownMenuButtonX"
                                    data-twe-dropdown-menu-ref>
                                    <div className="tw-px-6 tw-py-5 lg:tw-px-8 tw-bg-white">
                                        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-4">
                                            <div>

                                            </div>
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    About us</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Our Story</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Clients</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Press</a>

                                            </div>
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Events</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Career</a>

                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Faucone for Startups</a>
                                                <a
                                                    href="/"
                                                    aria-current="true"
                                                    className="tw-flex tw-no-underline tw-w-full tw-items-center tw-border-b tw-border-[#2e93d2] tw-bg-white tw-px-6 tw-py-2 tw-text-neutral-700 hover:tw-bg-[#2e93d2] hover:tw-text-white tw-mb-4 focus:tw-bg-zinc-200/60 focus:tw-outline-none active:tw-bg-zinc-200/60 active:tw-no-underline dark:tw-border-white/10 dark:tw-bg-surface-dark dark:tw-text-white dark:hover:tw-bg-neutral-800/25 dark:focus:tw-bg-neutral-800/25 dark:active:tw-bg-neutral-800/25"
                                                >
                                                    <span className="tw-me-1.5 [&>svg]:tw-h-5 [&>svg]:tw-w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    Faucone - CSC / CEC</a>

                                            </div>
                                            <div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>

                <div className=' lg:tw-flex  lg:tw-items-center lg:tw-gap-x-4'>

                    <div className='tw-hidden  lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' tw-h-6 tw-w-6 tw-font-light' /></div>
                    <div className='tw-hidden  lg:tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><TbSpeakerphone className=' tw-h-6 tw-w-6 tw-font-light' /></div>

                    <div className=' lg:tw-outline-none lg:tw-py-1 lg:tw-my-1 lg:tw-px-2 tw-font-PuviMedium'>
                        <Language />
                    </div>

                    <button className='tw-hidden  lg:tw-flex tw-font-PuviMedium'>Sign in</button>

                    <button className='tw-hidden  tw-font-PuviMedium lg:tw-flex tw-border tw-font-medium tw-px-3 py-1 tw-border-[#1da9fd] tw-text-[#1da9fd] hover:tw-text-white hover:tw-bg-[#1da9fd] tw-duration-300'>Register</button>

                </div>
            </nav>
            <div className='tw-h-1 tw-bg-[#2e93d2]'></div>
        </div>
    )
}

export default NewHeader