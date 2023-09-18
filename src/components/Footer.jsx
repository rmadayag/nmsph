import React from 'react'
import logo from '/logo3.png';

const Footer = () => {
    return (

        <footer class="bg-white">
            <div class="md:py-[70px] md:px-[10%] py-5 px-[16px]">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://nmsph.com/" class="flex items-center">
                            <img src={logo} />
                        </a>
                    </div>
                    <div class="grid grid-cols-4 gap-10 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <ul class="text-accent font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline">Home</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="text-accent font-medium">
                                <li>
                                    <a href="/about" class="hover:underline">About</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="text-accent font-medium">
                                <li class="mb-4">
                                    <a href="/careers" class="hover:underline">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="text-accent font-medium">
                                <li class="mb-4">
                                    <a href="/gallery" class="hover:underline">Gallery</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-accent sm:mx-auto lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-accent sm:text-center">© 2023 <a href="https://nmsph.com/" class="hover:underline">New Media Services Philippines</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/NMSPhilippines/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="16" fill="#1877F2" />
                                <path d="M22.2281 20.625L22.9375 16H18.5V13C18.5 11.7344 19.1188 10.5 21.1063 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5438 6.25C15.8875 6.25 13.5 8.46563 13.5 12.475V16H9.4375V20.625H13.5V31.8062C14.3156 31.9344 15.15 32 16 32C16.85 32 17.6844 31.9344 18.5 31.8062V20.625H22.2281Z" fill="white" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="https://twitter.com/NmsPhilippines/status/1245971164595286016" >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#212121" />
                                <path d="M21.9622 7H24.877L18.5106 14.2747L26 24.1751H20.1373L15.5422 18.1721L10.2905 24.1751H7.37158L14.1797 16.3927L7 7H13.0113L17.1606 12.487L21.9622 7ZM20.9383 22.4329H22.5526L12.1319 8.65146H10.3979L20.9383 22.4329Z" fill="white" />
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCb7SYskPu98wLn_Tflz4Zdg" >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#FF0000" />
                                <path d="M26.9588 10.5043C26.6952 9.5252 25.9232 8.75318 24.944 8.48957C23.1552 8 16 8 16 8C16 8 8.8447 8 7.05588 8.47074C6.09557 8.73436 5.30473 9.5252 5.04111 10.5043C4.57037 12.2932 4.57037 16.0026 4.57037 16.0026C4.57037 16.0026 4.57037 19.7309 5.04111 21.5008C5.30473 22.48 6.07674 23.252 7.05588 23.5156C8.86353 24.0052 16 24.0052 16 24.0052C16 24.0052 23.1552 24.0052 24.944 23.5344C25.9232 23.2708 26.6952 22.4988 26.9588 21.5197C27.4295 19.7309 27.4295 16.0214 27.4295 16.0214C27.4295 16.0214 27.4484 12.2932 26.9588 10.5043Z" fill="white" />
                                <path d="M13.7216 19.4295L19.6717 16.0026L13.7216 12.5756V19.4295Z" fill="#FF0000" />
                            </svg>
                            <span class="sr-only">Youtube</span>
                        </a>
                        <a href="https://www.linkedin.com/company/nmsphilippines/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="16" fill="#0A66C2" />
                                <path d="M23.5008 7.2002H8.49922C8.15465 7.2002 7.82419 7.33708 7.58053 7.58073C7.33688 7.82438 7.2 8.15484 7.2 8.49942V23.501C7.2 23.8455 7.33688 24.176 7.58053 24.4197C7.82419 24.6633 8.15465 24.8002 8.49922 24.8002H23.5008C23.8454 24.8002 24.1758 24.6633 24.4195 24.4197C24.6631 24.176 24.8 23.8455 24.8 23.501V8.49942C24.8 8.15484 24.6631 7.82438 24.4195 7.58073C24.1758 7.33708 23.8454 7.2002 23.5008 7.2002ZM12.4458 22.1932H9.79967V13.788H12.4458V22.1932ZM11.1209 12.6232C10.8207 12.6215 10.5278 12.5309 10.2791 12.3629C10.0303 12.1949 9.83695 11.957 9.72331 11.6792C9.60967 11.4013 9.58088 11.0961 9.64056 10.8019C9.70024 10.5078 9.84572 10.2379 10.0586 10.0263C10.2716 9.81474 10.5424 9.67099 10.8369 9.6132C11.1315 9.55541 11.4366 9.58616 11.7136 9.70158C11.9907 9.81701 12.2274 10.0119 12.3938 10.2617C12.5602 10.5115 12.6489 10.805 12.6487 11.1052C12.6515 11.3062 12.6138 11.5056 12.5379 11.6917C12.462 11.8778 12.3495 12.0467 12.2069 12.1884C12.0643 12.33 11.8947 12.4415 11.7081 12.5162C11.5215 12.5909 11.3218 12.6273 11.1209 12.6232ZM22.1991 22.2005H19.5542V17.6086C19.5542 16.2544 18.9786 15.8364 18.2354 15.8364C17.4508 15.8364 16.6808 16.428 16.6808 17.6429V22.2005H14.0347V13.7941H16.5793V14.9589H16.6136C16.869 14.4419 17.7637 13.5582 19.1289 13.5582C20.6053 13.5582 22.2003 14.4345 22.2003 17.0012L22.1991 22.2005Z" fill="white" />
                            </svg>
                            <span class="sr-only">Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer