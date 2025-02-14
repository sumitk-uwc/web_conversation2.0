import jwt from "jsonwebtoken";

export const getJWTData = async (data: any): Promise<string | undefined> => {
  try {
    if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
      throw new Error(
        "NEXT_PUBLIC_JWT_SECRET is not defined in environment variables"
      );
    }

    const token = jwt.sign(data, process.env.NEXT_PUBLIC_JWT_SECRET, {
      algorithm: "HS256",
    });

    return token;
  } catch (error) {
    console.error("JWT Generation Error:", error);
    return undefined;
  }
};

export const notificationList = [
  {
    id: 1,
    title: "Notification 1",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Notification 2",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Notification 3",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    title: "Notification 4",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    title: "Notification 5",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    title: "Notification 6",
    description: "Doctor’s appointment at 6:30pm, need to pick up files the way.",
    image: "https://picsum.photos/200",
  },
];
