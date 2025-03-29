import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const About = () => {
  return (
    <div id="About-us" className="bg-black text-white pt-10 md:px-20 m">
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className="flex items-center"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-10 ">
            <div className="w-full md:w-1/2">
              <img src="https://wallpapercave.com/wp/wp2168381.jpg" alt="Watch 1" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-400">
                Our company develops high-quality products, publishes design and code-related articles, and supports the Market. FS Industrie is created for digital designs where flexibility is essential.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img src="https://wallpaperaccess.com/full/3046105.jpg" alt="Watch 2" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-400">
                Designed by Phil Garnham and Fernando Mello, this font combines aesthetics with functional utility, delivering a precise and direct feel.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides if needed */}
      </Swiper>
    </div>
  );
};

export default About;
