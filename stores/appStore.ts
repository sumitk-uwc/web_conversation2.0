import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AppState {
  socket_ref: WebSocket | null;
  session_id: string | null;
  device_id: string | null;
  setSocketRef: (socket: WebSocket | null) => void;
  setDeviceId: (deviceId: string | null) => void;
  setSessionId: (sessionId: string | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      socket_ref: null,
      device_id: null,
      session_id: null,
      setSocketRef: (socket) => set({ socket_ref: socket }),
      setDeviceId: (deviceId) => set({ device_id: deviceId }),
      setSessionId: (sessionId) => set({ session_id: sessionId }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage), // ✅ Use localStorage for Next.js
      partialize: (state) => ({
        session_id: state.session_id,
        device_id: state.device_id,
      }),
    }
  )
);
