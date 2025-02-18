import React from "react";

interface RatingModalDataProps {
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

const RatingModalData: React.FC<RatingModalDataProps> = ({
  modalVisible,
  setModalVisible,
  data,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-3 mx-auto px-10">
      <h2 className="text-2xl font-bold text-center mb-2">{data?.heading}</h2>
    </div>
  );
};

export default RatingModalData;
