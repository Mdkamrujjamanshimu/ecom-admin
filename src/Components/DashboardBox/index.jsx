"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Box from "./box";
import { GoGift } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";

const DashboardBoxes = () => {
  return (
    <div className="dashboardBoxes">
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper grid! grid-cols-2!"
      >
        <SwiperSlide>
          <Box
            title="New Orders"
            icon={<GoGift size={40} className="text-[#3b82f6]" />}
            color="#3b82f6"
            count={"1,390"}
            progress={true}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Box
            title="Sales"
            icon={<FiPieChart size={40} className="text-[#10b981]" />}
            color="#10b981"
            count={"$57,890"}
            progress={false}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Box
            title="Revenue"
            icon={<BsBank size={35} className="text-[#7928ca]" />}
            color="#7928ca"
            count={"$12,390"}
            progress={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            title="Total Users"
            icon={<LuUsers size={35} className="text-[#ff2aca]" />}
            color="#ff2aca"
            count={"538"}
            progress={true}
          />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default DashboardBoxes;
