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
      json_data_expert: {
        heading: "Recommended Clinicians",
        subheading:
          "We have some recommended clinicians based on your locations and symptoms",
        variant: "info",
        card_type: "expert_suggestion",
        scroll_data: [
          {
            type: "expert_card_join",
            action: {
              type: "pwa_route",
              route:
                "https://booking.unitedwecare.com/profession/Psychiatrist/Dr%20Jasmine%20Heer/40258",
              params: {
                source: "app2.0",
              },
            },
            id: 40258,
            name: "Dr Jasmine Heer",
            register_as: "Psychiatrist",
            image_link:
              "https://firebasestorage.googleapis.com/v0/b/united-for-her.appspot.com/o/odoo%2Ffortis%2Fexperts%2FDr%20Jasmine%20heer%20photo.jpg?alt=media",
            country: "India",
            timezone: "IST",
            banner: "https://app.uwc.world/content/fortis_banner_image.png",
            date: "Tue, October 29",
            time: "06:00 PM",
            calling_mode: "Video Call",
            status: "Cancelled",
            duration: "30 min",
            join_url: "https://meet.google.com/upw-nswm-kcn",
            button: {
              text: "Join Call",
              class_name: "button-primary",
            },
          },
          {
            type: "expert_card_booking",
            action: {
              type: "external_route",
              route: "https://meet.google.com/uia-tzyz-ope",
              params: {},
            },
            id: 40258,
            name: "Dr Jasmine Heer",
            qualification: "MBBS, MD Psychiatry",
            experience: "7",
            image_link:
              "https://firebasestorage.googleapis.com/v0/b/united-for-her.appspot.com/o/odoo%2Ffortis%2Fexperts%2FDr%20Jasmine%20heer%20photo.jpg?alt=media",
            register_as: "Psychiatrist",
            country: "India",
            inr_fee: 1200,
            usd_fee: 50,
            currency: "INR",
            languages: "English, Hindi, Punjabi",
            location_required: false,
            timezone: "IST",
            banner: "https://app.uwc.world/content/fortis_banner_image.png",
            next_available_slot: "2025-01-06 16:00:00",
            button: {
              text: "Book Now",
              class_name: "button-primary",
            },
          },
          {
            type: "expert_card_booking",
            action: {
              type: "external_route",
              route: "https://meet.google.com/uia-tzyz-ope",
              params: {},
            },
            id: 40258,
            name: "Dr Jasmine Heer",
            qualification: "MBBS, MD Psychiatry",
            experience: "7",
            image_link:
              "https://firebasestorage.googleapis.com/v0/b/united-for-her.appspot.com/o/odoo%2Ffortis%2Fexperts%2FDr%20Jasmine%20heer%20photo.jpg?alt=media",
            register_as: "Psychiatrist",
            country: "India",
            inr_fee: 1200,
            usd_fee: 50,
            currency: "INR",
            languages: "English, Hindi, Punjabi",
            location_required: false,
            timezone: "IST",
            banner: "https://app.uwc.world/content/fortis_banner_image.png",
            next_available_slot: "2025-01-06 16:00:00",
            button: {
              text: "Book Now",
              class_name: "button-primary",
            },
          },
        ],
      },
      rating_data: {
        heading: "How Was Your Call?",
        subheading: "Please let us know how your experience went.",
        variant: "info",
        card_type: "rating",
        scroll_data: [],
        cta_data: [
          {
            id: "ce3e7e99-d656-467e-a496-ba4ddb9c1b23",
            cta_text: "Submit",
            button_type: "submit",
            // action: {
            //   type: "external_route",
            //   route: "tel:112",
            //   params: {},
            // },
          },
          {
            id: "055f29e3-e125-44f2-96ef-330523795255",
            cta_text: "Skip",
            button_type: "secondary",
            action: {
              type: "dismiss",
              params: {},
            },
          },
        ],
      },
      input_data: {
        heading: "Please Share Your Address",
        subheading: "We need to confirm you address to proceed further.",
        variant: "info",
        card_type: "input",
        scroll_data: [],
        cta_data: [
          {
            id: "055f29e3-e125-44f2-96ef-330523795255",
            cta_text: "Skip",
            button_type: "secondary",
            action: {
              type: "dismiss",
              params: {},
            },
          },
          {
            id: "ce3e7e99-d656-467e-a496-ba4ddb9c1b23",
            cta_text: "Submit",
            button_type: "primary",
            action: {
              type: "external_route",
              route: "tel:112",
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
