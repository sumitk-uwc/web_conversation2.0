import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

interface ExpertCardProps {
  name: string;
  image: string;
  register_as: string;
  rating: number;
  reviews: number;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  image,
  register_as,
  rating,
  reviews,
}) => {
  return (
    <div className="w-full h-full p-4 gap-2 bg-slate-100 dark:bg-gray-700 rounded-lg">
      <div className="flex items-start gap-4">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="object-fill bg-gray-200 rounded-md overflow-hidden"
        />
        <div className="w-full h-full flex flex-col items-start justify-between text-left gap-1">
          <div>
            <h6 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
              {name}
            </h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {register_as}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {`Experience :(${8} yrs)`}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {`Can Speak : English`}
            </p>
          </div>
          {/* <p>{`Experience :(${experience})`}</p> */}
          {/* <p>{`Can Speak :(${language})`}</p> */}
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Next Available: <br />
            2nd Jan 2025
          </p>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          className="bg-green-600 rounded-full font-medium text-sm px-12 py-2"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;
