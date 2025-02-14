"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { Bell } from "lucide-react";
import { notificationList } from "@/config/utils";

const NotificationPopover: React.FC = () => {
  const [notifications, setNotifications] = useState(notificationList);
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <div className="relative flex items-center gap-2 cursor-pointer">
          <Bell size={24} className="text-black dark:text-white" />
          <span className="absolute bottom-0.5 right-0 p-2 text-[11px] z-10 text-white bg-green-600 rounded-full w-4 h-4 flex items-center justify-center">
            5
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2 py-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="px-2 py-2 bg-slate-100 dark:bg-blue-950/50 rounded-md flex items-start gap-2"
            >
              <div className="flex items-center gap-2 relative">
                <Image
                  src={notification.image}
                  alt="Notification"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                {/* {!notification.read && ( */}
                <span className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-green-600 rounded-full"></span>
                {/* )} */}
              </div>
              <div className="flex flex-col gap-1 max-w-[300px]">
                <div className="text-tiny">{notification.description}</div>
                <Button
                  variant="light"
                  size="sm"
                  className="text-xs font-semibold text-gray-500 w-fit"
                >
                  Mark as Done
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500">28 h ago</div>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
