import { ReactNode } from "react";
import { mock } from "../../helpers";

type IconButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const IconButton = ({ onClick = mock, children }: IconButtonProps) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
