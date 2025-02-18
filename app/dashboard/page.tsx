"use client";
import React, { useState } from "react";
import { title } from "@/components/primitives";
import CenterModal from "@/components/modals/CenterModal";
import { Button } from "@heroui/react";
import { useSmartSuggestionsStore } from "@/stores/smartSuggestionsStore";
import SOSModalData from "@/components/popupNotification/SOSModalData";
import RatingModalData from "@/components/popupNotification/RatingModalData";
import ExpertSuggestionModalData from "@/components/popupNotification/ExpertSuggestionModalData";
import InputModaldata from "@/components/popupNotification/InputModaldata";

export default function DashboardPage() {
  const { smartPopupSuggestion } = useSmartSuggestionsStore();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <h1 className={title()}>I am a Dashboard</h1>
      <Button onPress={() => setModalVisible(true)}>Open Modal</Button>
      <CenterModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size="md"
      >
        <InputModaldata
          data={smartPopupSuggestion?.input_data}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {/* <SOSModalData
          data={smartPopupSuggestion?.json_data}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
        {/* <RatingModalData
          data={smartPopupSuggestion?.rating_data}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
        {/* <ExpertSuggestionModalData
          data={smartPopupSuggestion?.json_data_expert}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> */}
      </CenterModal>
    </div>
  );
}
