import { mock } from "../../helpers";

import IconButton from "./iconButton";

import { InstagramIcon } from "./Icons";

type ButtonProps = {
  onClick: () => void;
};

const InstagramButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <InstagramIcon />
  </IconButton>
);

export default InstagramButton;
