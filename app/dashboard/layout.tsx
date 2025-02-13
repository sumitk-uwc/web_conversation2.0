"use client";
import { getJWTData } from "@/config/utils";
import { useUser } from "@clerk/nextjs";
import { useAppStore } from "@/stores/appStore";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useUser();
  const UUID = uuidv4();
  const { setSessionId, setSocketRef, session_id, socket_ref } = useAppStore();
  const [userExternalId, setUserExternalId] = useState<string | null>(null);
  const [isConnectionAvailable, setIsConnectionAvailable] = useState(true);
  const [retryTimeout, setRetryTimeout] = useState<NodeJS.Timeout | null>(null);

  console.log("sessionId ===> ", session_id, socket_ref);

  useEffect(() => {
    if (user) {
      setUserExternalId(user.externalId);
    }
  }, [user]);

  useEffect(() => {
    // if (userExternalId) {
    connectWebSocket(userExternalId || "38133");
    // }
  }, []);
  // }, [userExternalId]);

  useEffect(() => {
    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [retryTimeout]);

  const connectWebSocket = async (user_id: string) => {
    try {
      const JWTData = {
        user_id: user_id,
      };

      const jwtData = await getJWTData(JWTData);

      const ws = new WebSocket(
        `wss://ws-stella.unitedwecare.com/v1/ws/${jwtData}`
      );

      ws.onopen = () => {
        console.log("WebSocket Connected");
        setSocketRef(ws);
        // setWsReconnectModal(false);
        // setReconnectWSCalled(false);
        setIsConnectionAvailable(true);
        // setRetryCount(0); // Reset retry count on successful connection
        if (retryTimeout) {
          clearTimeout(retryTimeout);
          setRetryTimeout(null);
        }
      };

      ws.onmessage = (event) => {
        // Handle incoming messages
        const data = JSON.parse(event.data);

        if (data?.session_id) {
          setSessionId(data?.session_id);
        }

        // if (data?.screen === "clinical" && data?.component === "screen") {
        //   setClinicalScreenData(data);
        // }
        // if (data?.screen === "notification" && data?.component === "screen") {
        //   // console.log(
        //   //   "================ notification JWT ======>",
        //   //   JSON.stringify(data)
        //   // );
        //   setNotificationFilterItems(data?.json_data?.notification_types);
        //   addNotification(data?.json_data?.notifications);
        // }
        // if (data?.screen === "conversation") {
        //   // console.log("WS data ===> ", data);
        //   switch (data?.component) {
        //     case "message":
        //       const newMessage = {
        //         _id: UUID,
        //         response: "server",
        //         message_id: data?.message_id,
        //         chain_of_thought: data?.json_data?.chain_of_thought,
        //         json_data: data?.json_data,
        //         sources: data?.json_data?.sources,
        //         external_recommendations:
        //           data?.json_data?.external_recommendations,
        //       };

        //       setIncomingMessage(newMessage);
        //       break;
        //     case "suggestion":
        //       setSmartStellaSuggestion(data);
        //       break;
        //     case "popup":
        //       console.log(
        //         "setSmartPopupSuggestion DATA ======> ",
        //         JSON.stringify(data)
        //       );
        //       setSmartPopupSuggestion(data);
        //       break;
        //     case "screen":
        //       setConversationScreenData(data);
        //       break;
        //     default:
        //       console.log("default case");
        //       break;
        //   }
        // }

        // if (data?.screen === "content" && data?.component === "screen") {
        //   setContentScreenDataLoading(false);
        //   //console.log(JSON.stringify(data?.json_data));

        //   if (data?.json_data?.channels?.length > 0) {
        //     setContentHeaderData(data?.json_data?.channels);
        //     setContentHeaderDataLoading(false);
        //   }
        //   if (data?.json_data?.content_lib?.length > 0) {
        //     if (data?.json_data?.content_lib[0]?.page === 1) {
        //       setContentScreenData(data?.json_data?.content_lib[0]?.content);
        //     } else if (data?.json_data?.content_lib[0]?.page > 1) {
        //       appendContentScreenData(data?.json_data?.content_lib[0]?.content);
        //       setNewContentLoading(false);
        //     }
        //     setContentScreenDataPage(data?.json_data?.content_lib[0]?.page);
        //     setContentScreenDataTotalPages(
        //       data?.json_data?.content_lib[0]?.total_pages
        //     );
        //   }

        //   // if (data?.json_data?.content_lib?.length < 1) return;

        //   // setTempContentScreenData(data?.json_data?.content_lib);
        //   // appendContentScreenData(data?.json_data?.content_lib);

        //   // setContentHeaderData(data?.screen_title);
        //   //
        // }

        // if (data?.screen === "profile" && data?.component === "screen") {
        //   setUserDetails(data?.json_data);
        //   setMyInterests(data?.json_data?.my_interests);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_assessments"
        // ) {
        //   setUserAssessments(data?.json_data);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_journals"
        // ) {
        //   setMyJournals(data?.json_data);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_reminders"
        // ) {
        //   setMyReminders(data?.json_data);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_appointments"
        // ) {
        //   setMyAppointments(data?.json_data);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_documents"
        // ) {
        //   setMyDocuments(data?.json_data);
        // } else if (
        //   data?.screen === "profile" &&
        //   data?.component === "my_programs"
        // ) {
        //   setMyPrograms(data?.json_data);
        // }
      };

      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setSocketRef(null);
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        //   handleReconnection(); // Start reconnection process

        setIsConnectionAvailable(false);
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
        //handleReconnection(); // Start reconnection process
        // setRetryCount((prev) => prev + 1);
        // setReconnectWSCalled(false);
        setIsConnectionAvailable(false);
      };
    } catch (error) {
      console.error("WebSocket connection error:", error);
      //handleReconnection(); // Start reconnection process
      setIsConnectionAvailable(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
