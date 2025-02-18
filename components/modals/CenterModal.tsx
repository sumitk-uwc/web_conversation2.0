import React from "react";
import { Modal, ModalContent } from "@heroui/react";

interface CenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const CenterModal: React.FC<CenterModalProps> = ({
  isOpen,
  onClose,
  children,
  size = "md",
}) => {
  console.log(size);
  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose} hideCloseButton={true}>
      <ModalContent className="w-full p-4">{children}</ModalContent>
    </Modal>
  );
};

export default CenterModal;
