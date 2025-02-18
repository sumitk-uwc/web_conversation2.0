import { create } from "zustand";

interface SmartSuggestionsState {
  smartStellaSuggestion: any | null;
  smartPopupSuggestion: any | null;
  setSmartStellaSuggestion: (suggestion: any) => void;
  setSmartPopupSuggestion: (suggestion: any) => void;
}

export const useSmartSuggestionsStore = create<SmartSuggestionsState>()(
  (set) => ({
    smartStellaSuggestion: null,
    // smartPopupSuggestion: null,
    smartPopupSuggestion: {
      id: "d9abe127-46ed-46f1-a261-23924ba800d8",
      user_id: "38133",
      session_id: "25320552af9142e6ad48a5009d97ccc3",
      screen: "conversation",
      component: "popup",
      message_id: "9275b7b7-39b6-42af-9d53-869ce98f975c",
      timestamp: 1739537393,
      json_data: {
        heading: "Emergency Detected",
        subheading:
          "It seems you are in an emergency situation. Call the below numbers to get help.",
        variant: "warning",
        card_type: "sos",
        scroll_data: [
          {
            id: "uuid",
            emergency_title: "National Emergency",
            emergency_description: "For any emergency situation",
            emergency_number: "112",
            action: {
              type: "external_route",
              route: "tel:112",
              params: {},
            },
          },
          {
            id: "1212",
            emergency_title: "DAD: John Doe",
            emergency_description: "EMAIL: johndoe@gmail.com",
            emergency_number: "+919876543210",
            action: {
              type: "external_route",
              route: "tel:+919876543210",
              params: {},
            },
          },
          {
            id: "uuid",
            emergency_title: "Ambulance",
            emergency_description: "For medical emergencies",
            emergency_number: "108",
            action: {
              type: "external_route",
              route: "tel:100",
              params: {},
            },
          },
          {
            id: "uuid",
            emergency_title: "Ambulance",
            emergency_description: "For medical emergencies",
            emergency_number: "108",
            action: {
              type: "external_route",
              route: "tel:108",
              params: {},
            },
          },
        ],
        cta_data: [
          {
            id: "ce3e7e99-d656-467e-a496-ba4ddb9c1b23",
            cta_text: "Call 112",
            button_type: "primary",
            action: {
              type: "external_route",
              route: "tel:112",
              params: {},
            },
          },
          {
            id: "055f29e3-e125-44f2-96ef-330523795255",
            cta_text: "I am not in an emergency",
            button_type: "secondary",
            action: {
              type: "dismiss",
              params: {},
            },
          },
        ],
      },
    },

    setSmartPopupSuggestion: (suggestion) =>
      set((state) => ({ ...state, smartPopupSuggestion: suggestion })),
    setSmartStellaSuggestion: (suggestion) =>
      set((state) => ({ ...state, smartStellaSuggestion: suggestion })),
  })
);
