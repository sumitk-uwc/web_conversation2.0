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
