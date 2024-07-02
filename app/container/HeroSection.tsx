"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// import './homeCustom.css'; 
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaHubspot } from "react-icons/fa6";

import { motion } from 'framer-motion';


const HeroSection = () => {

  const images = [
    { id: 1, src: '/images/banner-1.jpg', alt: 'Slide 1', title: 'Thiết Kế Website Theo Yêu Cầu', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 2, src: '/images/banner-2.jpg', alt: 'Slide 2', title: 'Thiết Kế Landing Page Chạy Quảng Cáo', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 3, src: '/images/banner-3.jpg', alt: 'Slide 3', title: 'Dịch Vụ SEO Website Tổng Thể', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-[280px] md:h-[700px]">
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
                className="w-full h-full"
              />
              <div className="absolute container md:max-w-4xl md:right-0 md:bottom-[15%] bottom-0 md:left-0 text-white text-center py-9 z-10">
                <motion.h2 className="text-[19px] font-secondary md:text-4xl font-bold md:py-3 text-white"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay:0.3, ease:"easeInOut"}}
                >
                  {image.title}
                </motion.h2>
                <motion.p className = "text-[19px] hidden font-light md:flex py-4 leading-7 text-white"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay:0.5, ease:"easeIn" }}
                >
                  {image.description}
                </motion.p>
                <motion.button className="bg-primary hover:bg-secondary text-white capitalize font-secondary font-medium md:text-lg text-xs md:py-3 py-2 md:px-7 px-3 rounded-full mt-2 shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay:0.9, ease:"easeOut" }}
                >
                  <span className='flex items-center gap-1'><FaHubspot className='text-accent md:text-2xl text-sm' />chi tiết dịch vụ</span>
                </motion.button>
              </div>
              {/* Opacity background overlay */}
              <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom navigation buttons */}
        <div className="custom-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-4 z-10 hidden md:flex cursor-pointer"><HiChevronLeft  className="text-4xl text-[#c0c0c0] hover:text-accent" /></div>
        <div className="custom-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-4 z-10 hidden md:flex cursor-pointer"><HiChevronRight className="text-4xl text-[#c0c0c0] hover:text-accent" /></div>
      </Swiper>
    </section>
  );
}

export default HeroSection;
