import React from 'react'
import CarouselBooks from '../../Ui/CarouselBooks/CarouselBooks';
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import FlashSaleSliderCard from '../../Ui/FlashSaleSliderCard/FlashSaleSliderCard';

// Swiper Slider Flash 

export default function Home() {

    return (
        <main>
            {/* Hero Section Main */}
            <section className="relative h-[90vh] flex items-center justify-center">
                {/* الصورة كخلفية */}
                <div className="absolute inset-0 h-full bg-[url('/images/HeroSection.png')] bg-cover bg-center bg-no-repeat scale-x-[-1]"></div>

                {/* طبقة اللون الشفاف فوق الصورة */}
                <div className="absolute inset-0 bg-[#00000099]"></div>

                {/* Search Bar */}
                <div className="max-w-134 mx-auto flex items-center justify-center w-full h-full text-white">
                    <div className="relative flex items-center overflow-hidden bg-white w-full rounded-[50px] ">
                        <input type="search" id="search" className="block w-full py-4 px-6 pr-20 outline-none text-sm text-gray-900 placeholder:text-lg"
                            placeholder="Search" required />
                        <div className="overflow-hidden">
                            <button className="absolute inset-y-0 right-20 flex items-center ps-3 pointer-events-none">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12.012C20 16.7173 15.9583 20.5894 10.8333 20.9715V23.2507C10.8333 23.6643 10.46 24 10 24C9.54 24 9.16667 23.6643 9.16667 23.2507V20.9715C4.04167 20.5894 0 16.7173 0 12.012C0 11.5984 0.373333 11.2627 0.833333 11.2627C1.29333 11.2627 1.66667 11.5984 1.66667 12.012C1.66667 16.1434 5.405 19.5045 10 19.5045C14.595 19.5045 18.3333 16.1434 18.3333 12.012C18.3333 11.5984 18.7067 11.2627 19.1667 11.2627C19.6267 11.2627 20 11.5984 20 12.012ZM10.0083 16.4835C12.765 16.4835 15.0083 14.4665 15.0083 11.988V4.4955C15.0083 2.01698 12.765 0 10.0083 0C7.25167 0 5.00833 2.01698 5.00833 4.4955V11.988C5.00833 14.4665 7.25167 16.4835 10.0083 16.4835ZM6.675 4.4955C6.675 2.84266 8.17 1.4985 10.0083 1.4985C11.8467 1.4985 13.3417 2.84266 13.3417 4.4955V11.988C13.3417 13.6409 11.8467 14.985 10.0083 14.985C8.17 14.985 6.675 13.6409 6.675 11.988V4.4955Z" fill="#222222" fillOpacity="0.5" />
                                </svg>
                            </button>
                            <button type="button" className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 h-full w-17.5 flex items-center justify-center bg-[#D9176C] rounded-r-[50px] hover:bg-[#c4155f] transition-colors ">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.7315 20.4353L16.2599 14.9637C17.751 13.1401 18.4841 10.8131 18.3076 8.46414C18.1311 6.11516 17.0585 3.92386 15.3117 2.34352C13.5648 0.763179 11.2774 -0.0853045 8.92255 -0.0264253C6.56768 0.0324538 4.32552 0.994191 2.65986 2.65986C0.994191 4.32552 0.0324538 6.56768 -0.0264253 8.92255C-0.0853045 11.2774 0.763179 13.5648 2.34352 15.3117C3.92386 17.0585 6.11516 18.1311 8.46414 18.3076C10.8131 18.4841 13.1401 17.751 14.9637 16.2599L20.4353 21.7315C20.6082 21.8984 20.8397 21.9908 21.0801 21.9888C21.3204 21.9867 21.5503 21.8903 21.7203 21.7203C21.8903 21.5503 21.9867 21.3204 21.9888 21.0801C21.9908 20.8397 21.8984 20.6082 21.7315 20.4353ZM9.16671 16.5C7.71632 16.5 6.29849 16.07 5.09253 15.2642C3.88657 14.4584 2.94664 13.313 2.39159 11.9731C1.83655 10.6331 1.69133 9.15858 1.97429 7.73605C2.25724 6.31352 2.95568 5.00685 3.98126 3.98126C5.00685 2.95568 6.31352 2.25724 7.73605 1.97429C9.15858 1.69133 10.6331 1.83655 11.9731 2.39159C13.313 2.94664 14.4584 3.88657 15.2642 5.09253C16.07 6.29849 16.5 7.71632 16.5 9.16671C16.4979 11.111 15.7245 12.975 14.3498 14.3498C12.975 15.7245 11.111 16.4979 9.16671 16.5Z" fill="white" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section>
                <div className='max-w-345 mx-auto'>
                    <div className='grid grid-cols-4 py-30 gap-15'>
                        {/* Service-1 */}
                        <div className=''>
                            {/* Icon Truck */}
                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.75 5H21.1538C20.7338 2.62125 18.9625 0.6575 16.5612 0.0399999C15.9 -0.13125 15.2125 0.27125 15.0387 0.93875C14.8663 1.6075 15.27 2.28875 15.9388 2.46C17.5938 2.88625 18.75 4.38 18.75 6.0925V20H5C3.62125 20 2.5 18.8787 2.5 17.5V12.5H5.625C6.31625 12.5 6.875 11.94 6.875 11.25C6.875 10.56 6.31625 10 5.625 10H2.5C1.12125 10 0 11.1213 0 12.5V17.5C0 19.85 1.63 21.8262 3.81875 22.3587C3.77375 22.61 3.75 22.8662 3.75 23.125C3.75 25.5375 5.7125 27.5 8.125 27.5C10.5375 27.5 12.5 25.5375 12.5 23.125C12.5 22.9137 12.4838 22.7062 12.4538 22.5H17.5462C17.5162 22.7062 17.5 22.9137 17.5 23.125C17.5 25.5375 19.4625 27.5 21.875 27.5C24.2875 27.5 26.25 25.5375 26.25 23.125C26.25 22.8662 26.2262 22.61 26.1812 22.3587C28.37 21.8262 30 19.85 30 17.5V11.25C30 7.80375 27.1963 5 23.75 5ZM27.5 11.25V12.5H21.25V7.5H23.75C25.8175 7.5 27.5 9.1825 27.5 11.25ZM10 23.125C10 24.1588 9.15875 25 8.125 25C7.09125 25 6.25 24.1588 6.25 23.125C6.25 22.8888 6.29625 22.68 6.36375 22.5H9.8875C9.955 22.68 10.0013 22.8888 10.0013 23.125H10ZM21.875 25C20.8412 25 20 24.1588 20 23.125C20 22.8888 20.0462 22.68 20.1138 22.5H23.6375C23.705 22.68 23.7512 22.8888 23.7512 23.125C23.7512 24.1588 22.9088 25 21.875 25ZM25 20H21.25V15H27.5V17.5C27.5 18.8787 26.3787 20 25 20ZM0 1.25C0 0.56 0.55875 0 1.25 0H11.4425C12.1337 0 12.6925 0.56 12.6925 1.25C12.6925 1.94 12.1337 2.5 11.4425 2.5H1.25C0.55875 2.5 0 1.94 0 1.25ZM0 6.25C0 5.56 0.55875 5 1.25 5H8.9425C9.63375 5 10.1925 5.56 10.1925 6.25C10.1925 6.94 9.63375 7.5 8.9425 7.5H1.25C0.55875 7.5 0 6.94 0 6.25Z" fill="#222222" fillOpacity="0.5" />
                            </svg>
                            <h4 className='mt-4 mb-2 text-lg font-bold text-[]'>Fast & Reliable Shipping</h4>
                            <p className='w-68 text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                        </div>
                        {/* Service-2 */}
                        <div className=''>
                            {/* Icon Payment */}
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.875 15.8654C7.91 15.8654 8.75 16.8346 8.75 18.0288C8.75 19.2231 7.91 20.1923 6.875 20.1923C5.84 20.1923 5 19.2231 5 18.0288C5 16.8346 5.84 15.8654 6.875 15.8654ZM30 7.21154V15.8654C30 16.6615 29.4412 17.3077 28.75 17.3077C28.0587 17.3077 27.5 16.6615 27.5 15.8654V10.0962H2.5V18.75C2.5 21.1356 4.1825 23.0769 6.25 23.0769H16.25C16.9412 23.0769 17.5 23.7231 17.5 24.5192C17.5 25.3154 16.9412 25.9615 16.25 25.9615H6.25C2.80375 25.9615 0 22.7264 0 18.75V7.21154C0 3.2351 2.80375 0 6.25 0H23.75C27.1962 0 30 3.2351 30 7.21154ZM27.5 7.21154C27.5 4.82596 25.8175 2.88462 23.75 2.88462H6.25C4.1825 2.88462 2.5 4.82596 2.5 7.21154H27.5Z" fill="#222222" fillOpacity="0.5" />
                                <g clipPath="url(#clip0_150_2757)">
                                    <path d="M26.2905 17.0701L23.158 16.0256C23.0554 15.9915 22.9446 15.9915 22.842 16.0256L19.7095 17.0701C19.2115 17.2356 18.7782 17.5537 18.4713 17.9795C18.1644 18.4052 17.9995 18.9168 18 19.4416V22.0001C18 25.7816 22.6 27.8701 22.797 27.9571C22.8609 27.9855 22.9301 28.0002 23 28.0002C23.0699 28.0002 23.1391 27.9855 23.203 27.9571C23.4 27.8701 28 25.7816 28 22.0001V19.4416C28.0005 18.9168 27.8356 18.4052 27.5287 17.9795C27.2218 17.5537 26.7885 17.2356 26.2905 17.0701ZM25.359 20.8586L23.223 22.9946C23.1356 23.0826 23.0316 23.1524 22.917 23.1998C22.8024 23.2473 22.6795 23.2715 22.5555 23.2711H22.539C22.4124 23.2692 22.2876 23.2416 22.172 23.19C22.0564 23.1385 21.9525 23.064 21.8665 22.9711L20.7135 21.7711C20.6636 21.7248 20.6236 21.6687 20.5961 21.6064C20.5686 21.5441 20.5542 21.4768 20.5536 21.4087C20.553 21.3406 20.5664 21.2731 20.5929 21.2103C20.6193 21.1476 20.6583 21.0909 20.7075 21.0437C20.7566 20.9966 20.8149 20.96 20.8787 20.9361C20.9426 20.9123 21.0106 20.9018 21.0786 20.9052C21.1466 20.9086 21.2132 20.9259 21.2744 20.956C21.3355 20.986 21.3898 21.0283 21.434 21.0801L22.556 22.2501L24.65 20.1501C24.7443 20.059 24.8706 20.0086 25.0017 20.0098C25.1328 20.0109 25.2582 20.0635 25.3509 20.1562C25.4436 20.2489 25.4962 20.3743 25.4973 20.5054C25.4985 20.6365 25.4481 20.7628 25.357 20.8571L25.359 20.8586Z" fill="#222222" fillOpacity="0.5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_150_2757">
                                        <rect width="12" height="12" fill="white" transform="translate(17 16)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h4 className='mt-4 mb-2 text-lg font-bold text-[]'>Secure Payment</h4>
                            <p className='w-68 text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>

                        </div>
                        {/* Service-3 */}
                        <div className=''>
                            {/* Icon Rectangle */}
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 15C30 23.2712 23.2712 30 15 30C9.93125 30 5.25625 27.4262 2.505 23.2875L2.5 25C2.5 25.6912 1.94 26.25 1.25 26.25C0.56 26.25 0 25.6912 0 25V21.2613C0 19.8775 1.12625 18.75 2.51 18.75H6.25C6.94 18.75 7.5 19.3088 7.5 20C7.5 20.6912 6.94 21.25 6.25 21.25H4.20375C6.42375 25.075 10.5188 27.5 15 27.5C21.8925 27.5 27.5 21.8925 27.5 15C27.5 14.3088 28.0588 13.75 28.75 13.75C29.4412 13.75 30 14.3088 30 15ZM28.75 3.75C28.0588 3.75 27.5 4.30875 27.5 5L27.495 6.69375C24.7588 2.55 20.1337 0 15 0C6.72875 0 0 6.72875 0 15C0 15.6912 0.56 16.25 1.25 16.25C1.94 16.25 2.5 15.6912 2.5 15C2.5 8.1075 8.1075 2.5 15 2.5C19.55 2.5 23.625 4.90125 25.8325 8.75H23.75C23.0588 8.75 22.5 9.30875 22.5 10C22.5 10.6912 23.0588 11.25 23.75 11.25H27.5C28.8813 11.25 30 10.1313 30 8.75V5C30 4.30875 29.4412 3.75 28.75 3.75ZM12.5 21.25C10.4325 21.25 8.75 19.5675 8.75 17.5V12.5C8.75 10.4325 10.4325 8.75 12.5 8.75H17.5C19.5675 8.75 21.25 10.4325 21.25 12.5V17.5C21.25 19.5675 19.5675 21.25 17.5 21.25H12.5ZM12.5 18.75H17.5C18.19 18.75 18.75 18.19 18.75 17.5V12.5C18.75 11.81 18.19 11.25 17.5 11.25H12.5C11.8112 11.25 11.25 11.81 11.25 12.5V17.5C11.25 18.19 11.8112 18.75 12.5 18.75ZM14.375 15H15.625C16.3162 15 16.875 14.4412 16.875 13.75C16.875 13.0588 16.3162 12.5 15.625 12.5H14.375C13.685 12.5 13.125 13.0588 13.125 13.75C13.125 14.4412 13.685 15 14.375 15Z" fill="#222222" fillOpacity="0.5" />
                            </svg>
                            <h4 className='mt-4 mb-2 text-lg font-bold text-[]'>Easy Returns</h4>
                            <p className='w-68 text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>

                        </div>
                        {/* Service-4 */}
                        <div className=''>
                            {/* Icon Customer Service */}
                            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.1075 26.8749V29.9999H20.6075V26.8749C20.6075 25.1511 19.2062 23.7499 17.4825 23.7499H6.2325C4.51 23.7499 3.1075 25.1511 3.1075 26.8749V29.9999H0.6075V26.8749C0.6075 23.7736 3.13125 21.2499 6.2325 21.2499H17.4825C20.5837 21.2499 23.1075 23.7736 23.1075 26.8749ZM12.8875 7.61864C14.4563 7.97989 15.735 9.24864 16.1063 10.8149C16.3575 11.8736 16.22 12.8886 15.8088 13.7499H17.4412C18.0675 13.7499 18.615 13.2899 18.6875 12.6674C18.7725 11.9336 18.7412 11.1649 18.5737 10.3786C18.0187 7.77989 15.91 5.68364 13.3075 5.14864C8.88625 4.23989 4.98375 7.61114 4.98375 11.8749C4.98375 13.7111 5.7075 15.3811 6.88375 16.6149C6.93375 15.5549 7.31625 14.5811 7.92875 13.7949C7.64375 13.2149 7.48375 12.5624 7.48375 11.8736C7.48375 9.12489 10.0312 6.95989 12.8888 7.61739L12.8875 7.61864ZM5.44625 5.03489C7.3575 3.24364 9.86 2.35864 12.4838 2.52114C17.3888 2.83864 21.2325 7.10739 21.2325 12.2386C21.2325 14.4511 19.4338 16.2499 17.2213 16.2499H14.225C13.9213 15.2111 12.9625 14.4511 11.825 14.4511C10.4438 14.4511 9.325 15.5699 9.325 16.9511C9.325 18.3324 10.4438 19.4511 11.825 19.4511C12.4987 19.4511 13.1113 19.1836 13.56 18.7499H17.22C20.81 18.7499 23.7313 15.8286 23.7313 12.2386C23.7325 5.79239 18.8625 0.427387 12.645 0.0261371C9.315 -0.190113 6.15625 0.941137 3.7375 3.21114C1.50375 5.30489 0.16125 8.20614 0 11.2511H2.50375C2.6575 8.87239 3.68875 6.68364 5.4475 5.03489H5.44625Z" fill="#222222" fillOpacity="0.5" />
                            </svg>
                            <h4 className='mt-4 mb-2 text-lg font-bold text-[]'>24/7 Customer Support</h4>
                            <p className='w-68 text-[#22222280]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Carsoul Book Card */}
            <section >
                <div className='py-30 bg-[#3B2F4A] flex flex-col justify-center items-center text-center gap-20 text-white'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold '>Best Sellers</h1>
                        <p className='w-128.75 text-[#FFFFFF80]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                    </div>
                    <div className="w-full">
                        <CarouselBooks />
                    </div>
                    <Link to="/books" className='bg-[#D9176C] py-3 px-12 rounded-lg text-white hover:outline hover:outline-[#D9176C] hover:bg-white hover:text-[#D9176C] transition-all duration-200 cursor-pointer'>Shop now</Link>
                </div>
            </section>

            {/* Recomended Books Section */}
            <section>
                <div className='max-w-345  mx-auto py-30 flex flex-col justify-center items-start text-left gap-10 text-[#3B2F4A]'>
                    <h1 className='text-3xl font-bold text-[#222222]'>Recomended For You</h1>
                    <div className='grid grid-cols-2 gap-6 '>
                        <div className="flex items-center bg-white p-10 gap-10">
                            {/* Book Image */}
                            <img
                                className="w-44 h-auto object-cover"
                                src="/public/images/Swiper/RICHDAD_POORDAD.png"
                                alt="RICHDAD POORDAD Book"
                            />

                            {/* Book Details */}
                            <div className="flex-1 flex flex-col gap-3">
                                {/* Title */}
                                <h2 className="text-[18px] font-bold text-[#222222]">
                                    The Design Of Books
                                </h2>

                                {/* Author */}
                                <h4 className="text-sm text-[#222222] font-semibold">
                                    <span className="text-[#22222280]">Author: </span>
                                    Debbie Berne
                                </h4>

                                {/* Description */}
                                <p className="text-[#22222280] text-sm leading-relaxed max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                                    ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
                                    leo. Aliquam in justo varius.
                                </p>

                                {/* Rating & Price Section */}
                                <div className="flex items-end justify-between mt-2">
                                    {/* Rating Info */}
                                    <div className="flex flex-col gap-1">
                                        {/* Stars & Reviews */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-[#EBC305]">
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar className="text-[#22222233]" />
                                            </div>
                                            <span className="text-xs text-[#22222280]">(210 Review)</span>
                                        </div>

                                        {/* Rate Number */}
                                        <p className="text-sm text-[#22222280]">
                                            Rate: <span className="text-[#222222] font-semibold">4.2</span>
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <p className="text-[26px] font-semibold text-[#222222]">$40.00</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-4">
                                    <button 
                                        className="flex flex-1 justify-center bg-[#D9176C] cursor-pointer text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-[#D9176C] hover:outline hover:outline-2 hover:outline-[#D9176C] transition-all duration-200 flex items-center gap-2"
                                        type="button"
                                    >
                                        Add To Cart
                                    </button>

                                    <button
                                        className="bg-white text-[#D9176C] p-3 rounded-lg outline outline-2 cursor-pointer outline-[#D9176C] hover:bg-[#D9176C] hover:text-white transition-all duration-200"
                                        type="button"
                                    >
                                        <FaRegHeart className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center bg-white p-10 gap-10">
                            {/* Book Image */}
                            <img
                                className="w-44 h-auto object-cover"
                                src="/public/images/Swiper/TheDesign_of_Books.jpg"
                                alt="The Design of Book"
                            />

                            {/* Book Details */}
                            <div className="flex-1 flex flex-col gap-3">
                                {/* Title */}
                                <h2 className="text-[18px] font-bold text-[#222222]">
                                    The Design Of Books
                                </h2>

                                {/* Author */}
                                <h4 className="text-sm text-[#222222] font-semibold">
                                    <span className="text-[#22222280]">Author: </span>
                                    Debbie Berne
                                </h4>

                                {/* Description */}
                                <p className="text-[#22222280] text-sm leading-relaxed max-w-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                                    ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
                                    leo. Aliquam in justo varius.
                                </p>

                                {/* Rating & Price Section */}
                                <div className="flex items-end justify-between mt-2">
                                    {/* Rating Info */}
                                    <div className="flex flex-col gap-1">
                                        {/* Stars & Reviews */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-[#EBC305]">
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar className="text-[#22222233]" />
                                            </div>
                                            <span className="text-xs text-[#22222280]">(210 Review)</span>
                                        </div>

                                        {/* Rate Number */}
                                        <p className="text-sm text-[#22222280]">
                                            Rate: <span className="text-[#222222] font-semibold">4.2</span>
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <p className="text-[26px] font-semibold text-[#222222]">$40.00</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-4">
                                    <button
                                        className="flex flex-1 justify-center bg-[#D9176C] cursor-pointer text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-[#D9176C] hover:outline hover:outline-2 hover:outline-[#D9176C] transition-all duration-200 flex items-center gap-2"
                                        type="button"
                                    >
                                        Add To Cart
                                    </button>

                                    <button
                                        className="bg-white text-[#D9176C] p-3 rounded-lg outline outline-2 cursor-pointer outline-[#D9176C] hover:bg-[#D9176C] hover:text-white transition-all duration-200"
                                        type="button"
                                    >
                                        <FaRegHeart className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flash Sale */}
            <section className="max-w-390  border-t border-[#E5E5E5] mx-auto">
                <div className=" py-30  ">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-10 max-w-345 mx-auto">
                        <div>
                            <h1 className="text-[26px] font-bold text-[#222222] mb-2">
                                Flash Sale
                            </h1>
                            <p className="text-[#22222280] text-sm max-w-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="relative">
                            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                                {/* Background Circle */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="#E5E5E5"
                                    strokeWidth="4"
                                />
                                {/* Progress Circle */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    stroke="#D9176C"
                                    strokeWidth="4"
                                    strokeDasharray="339.292"
                                    strokeDashoffset="84.823"
                                    strokeLinecap="round"
                                />
                                {/* Small Circle at the end */}
                                <circle
                                    cx="60"
                                    cy="6"
                                    r="4"
                                    fill="#D9176C"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xl font-bold text-[#222222]">30:00:00</span>
                            </div>
                        </div>
                    </div>


                    {/* Flash Sale Slider */}
                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 gap-6 max-w-345 mx-auto">
                        <FlashSaleSliderCard/>
                    </div>
                </div>
            </section>

        </main >
    )
}

