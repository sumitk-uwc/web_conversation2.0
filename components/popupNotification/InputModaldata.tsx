import React, { useState } from "react";
import { Button, DatePicker, DateValue, Input } from "@heroui/react";
import { useSmartSuggestionsStore } from "@/stores/smartSuggestionsStore";
import { useAppStore } from "@/stores/appStore";
import { useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
// import { useUserStore } from "@/stores/userStore";
import { v4 as uuidv4 } from "uuid";

type InputModaldataProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  data: any;
};

const InputModaldata: React.FC<InputModaldataProps> = ({
  modalVisible,
  setModalVisible,
  data,
}) => {
  const { user } = useUser();
  const { socket_ref, session_id } = useAppStore();
  const { smartPopupSuggestion } = useSmartSuggestionsStore();
  // const { userExternalId } = useUserStore();

  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState<DateValue | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [countdown, setCountdown] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  const Cancel = () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalVisible && setModalVisible(false);
    const sampleData = {
      id: uuidv4(),
      type: "request",
      // user_id: user?.externalId || userExternalId || "",
      timestamp: Math.floor(new Date().getTime() / 1000),
      session_id: session_id,
      payload: {
        screen: "conversation",
        action: "skip",
        params: {
          json_data: {
            heading: data?.heading,
            subheading: data?.subheading,
            variant: data?.variant,
            card_type: data?.card_type,
            input_value: inputValue,
            scroll_data: [],
            cta_data: data?.cta_data,
          },
        },
      },
      metadata: {},
    };

    //  console.log("data ===> ", sampleData);

    socket_ref?.send(JSON.stringify(sampleData));
  };

  const Submit = () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    //setIsLoading(true);
    //setCountdown(15);
    setModalVisible(false);
    const payload = {
      ...smartPopupSuggestion?.json_data,

      input_value: inputValue,
    };

    const sampleData = {
      id: uuidv4(),
      type: "request",
      // user_id: user?.externalId || userExternalId || "",
      timestamp: Math.floor(new Date().getTime() / 1000),
      session_id: session_id,
      payload: {
        screen: "conversation",
        action: "submit",
        params: {
          json_data: {
            heading: data?.heading,
            subheading: data?.subheading,
            variant: data?.variant,
            card_type: data?.card_type,
            input_value: inputValue,
            scroll_data: [],
            cta_data: data?.cta_data,
          },
        },
      },
      metadata: {},
    };

    //  console.log("data ===> ", sampleData);

    socket_ref?.send(JSON.stringify(sampleData));

    // setTimeout(() => {
    //   setIsLoading(false);
    //   setModalVisible(false);
    // }, 15000);
  };

  const renderInput = ({ type }: { type: string }) => {
    switch (type) {
      case "date":
        return (
          <>
            <Button
              onPress={() => setShowDatePicker(true)}
              className="border border-gray-300 rounded-xl px-2 py-3.5"
            >
              {dateValue
                ? dayjs(dateValue).format("MMMM D, YYYY")
                : "Select Date"}
            </Button>

            {showDatePicker && (
              <DatePicker
                isRequired
                value={dateValue}
                display={"default"}
                onChange={(e) => setDateValue(e)}
                className="max-w-[284px]"
                label="Birth date"
              />
            )}
          </>
        );
      case "slider":
        return <div>SLIDER</div>;
      default:
        return (
          <Input
            placeholder={data?.input_data?.input_placeholder || "Enter Details"}
            value={inputValue}
            className="rounded-lg dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-300"
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
    }
  };

  return (
    <div className="p-4 gap-2">
      <h6
        className={`text-2xl font-bold text-center mx-auto ${
          data?.variant === "info"
            ? "text-blue-600 dark:text-blue-50"
            : data?.variant === "warning"
              ? "text-red-400 dark:text-red-50"
              : data?.variant === "success"
                ? "text-green-400 dark:text-green-50"
                : "text-black-400 dark:text-black-50"
        }`}
      >
        {data?.heading}
      </h6>
      <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-4 max-w-[284px] mx-auto">
        {data?.subheading}
      </p>
      <div className="my-6">{renderInput({ type: data })}</div>
      <div className="flex items-center justify-between gap-3">
        {data?.cta_data?.map((item: any, index: any) => {
          const variantClass =
            item.button_type === "primary"
              ? "bg-[#38761D]"
              : item.button_type === "secondary"
                ? "bg-gray-100 dark:bg-white/20"
                : "bg-red-600"; // Default fallback
          return (
            <Button
              key={index}
              className={`rounded-full w-full ${variantClass}`}
              onPress={() => {
                if (item?.action?.type === "dismiss") {
                  Cancel(); // Call the Cancel function
                } else {
                  Submit();
                }
              }}
            >
              <p
                className={`text-[12px] font-semibold text-center capitalize ${
                  item.button_type === "primary" ? "text-white" : ""
                }`}
              >
                {item.cta_text}
              </p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default InputModaldata;
