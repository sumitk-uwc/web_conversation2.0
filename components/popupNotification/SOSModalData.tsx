"use client";
import React, { useState, useRef } from "react";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SOSModalProps {
  modalVisible?: boolean;
  setModalVisible?: (show: boolean) => void;
  data: {
    variant?: "info" | "warning" | "success";
    heading?: string;
    subheading?: string;
    scroll_data?: {
      emergency_title: string;
      emergency_number: string;
      emergency_description: string;
    }[];
    cta_data?: {
      cta_text: string;
      button_type: "primary" | "secondary";
      action?: { type: string };
    }[];
  };
}

const SOSModalData: React.FC<SOSModalProps> = ({
  modalVisible,
  setModalVisible,
  data,
}) => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleCall = (callNumber: string) => {
    window.location.href = `tel:${callNumber}`;
  };

  const handleClose = () => {
    setModalVisible && setModalVisible(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 mx-auto px-10">
      {/* Header */}
      <h2
        className={`text-2xl font-bold text-center mb-2 
        ${
          data?.variant === "info"
            ? "text-blue-600"
            : data?.variant === "warning"
              ? "text-red-600"
              : "text-green-600"
        }`}
      >
        {data?.heading}
      </h2>
      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-4">
        {data?.subheading}
      </p>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`p-2 rounded-full shadow-md transition-all ${
            isBeginning
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 text-white cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`p-2 rounded-full shadow-md transition-all ${
            isEnd
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 text-white cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Swiper Section */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        className="mySwiper w-full"
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={1}
        centeredSlides={false}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {data?.scroll_data?.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="p-4 rounded-lg shadow-lg bg-slate-100 dark:bg-gray-700 cursor-pointer flex flex-col items-start w-full">
              <h3 className="text-lg font-bold text-gray-500 dark:text-white">
                {item.emergency_title}
              </h3>
              <h6 className="text-xl font-black text-gray-500 dark:text-gray-200 my-2">
                {item.emergency_number}
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.emergency_description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons Section */}
      <div className="flex flex-col gap-3 mt-4">
        {data?.cta_data?.map((item, index) => (
          <Button
            key={index}
            variant={item.button_type === "primary" ? "solid" : "light"}
            radius="full"
            size="md"
            className={`w-60 mx-auto ${item.button_type === "primary" ? "bg-green-600 text-white" : "bg-gray-200/10 text-gray-700"}`}
            onClick={() => {
              if (item?.action?.type === "dismiss") {
                handleClose();
              } else {
                const callNumber = item.cta_text.match(/\d+/)?.[0];
                if (callNumber) handleCall(callNumber);
              }
            }}
          >
            {item.cta_text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SOSModalData;
