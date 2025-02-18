"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button, user } from "@heroui/react";
import { useAppStore } from "@/stores/appStore";
import { v4 as uuidv4 } from "uuid";

type RatingModalDataProps = {
  modalVisible: boolean;
  setModalVisible: (show: boolean) => void;
  data: any;
};

const RatingModalData: React.FC<RatingModalDataProps> = ({
  modalVisible,
  setModalVisible,
  data,
}) => {
  const UUID = uuidv4();
  const [ratingValue, setRatingValue] = useState<number>(1);
  // const { userExternalId } = useUserStore();
  const { socket_ref, session_id } = useAppStore();
  // const { user } = useUser();

  const ratingChanged = (newRating: number) => {
    setRatingValue(newRating);
  };

  // useEffect(() => {
  //   if (modalVisible) {
  //     Vibration.vibrate();
  //     return () => {
  //       Vibration.cancel();
  //     };
  //   }
  // }, [modalVisible]);

  const Cancel = () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalVisible(false);
  };

  const Submit = (item: any) => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalVisible(false);
    const sampleData = {
      id: UUID,
      type: "request",
      // user_id: user?.id || userExternalId || "",
      timestamp: Math.floor(Date.now() / 1000),
      session_id: session_id,
      payload: {
        screen: "conversation",
        action: item?.cta_text,
        params: {
          json_data: {
            heading: data?.heading,
            subheading: data?.subheading,
            variant: data?.variant,
            card_type: data?.card_type,
            rating_value: ratingValue,
            scroll_data: [],
            cta_data: data?.cta_data,
          },
        },
      },
      metadata: {},
    };
    socket_ref?.send(JSON.stringify(sampleData));
  };

  return (
    <div className="pt-8">
      <p className="text-blue-400 dark:text-blue-50 text-[20px] font-bold text-center px-5">
        {data?.heading}
      </p>
      <p className="text-center text-[12px] dark:text-gray-200 py-2 px-5">
        {data?.subheading}
      </p>

      <div className="my-6 px-5 gap-3">
        {/* {ratingValue > 0 && (
          <p className="text-center text-[12px] dark:text-gray-200">
            {
              ["Terrible", "Bad", "Okay", "Good", "Great"][ratingValue - 1]
            }
          </p>
        )} */}
      </div>
      {/* <div>
        {data?.cta_data && (
          <div className="flex-row items-center justify-center gap-3 py-2 px-5">
            {data?.cta_data?.map((item: any, index: number) => {
              const variantClass =
                item.button_type === "primary"
                  ? "bg-[#38761D]"
                  : item.button_type === "secondary"
                    ? "bg-gray-100 dark:bg-white/20"
                    : "bg-red-600";
              return (
                <Button
                  key={index}
                  className={`py-4 rounded-full w-[150px] ${variantClass}`}
                  onPress={() => Submit(item)}
                >
                  <p
                    {item.cta_text}
                    className={`text-[12px] font-semibold text-center capitalize ${item.button_type === "primary" ? "text-white" : ""
                      }`}
                  />
                </Button>
              );
            })}
          </div>
        )}

      </div> */}
    </div>
  );
};

export default RatingModalData;
