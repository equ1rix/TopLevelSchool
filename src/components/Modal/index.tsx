import { ReactNode } from "react";

import { mock } from "../../helpers";

import Button from "../Button";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal = ({ onClose = mock, children, title = "" }: ModalProps) => (
  <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center bg-opacity-50 z-50">
    <div className="max-w-[500px] w-[100%] min-h-[230px] bg-bg-highlight p-[15px] rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-white fz font-bold text-3xl">{title}</h3>
        <Button text="X" onClick={onClose} />
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
