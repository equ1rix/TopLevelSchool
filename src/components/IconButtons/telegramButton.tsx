import { mock } from "../../helpers";

import IconButton from "./iconButton";
import { TelegramIcon } from "./Icons";

type ButtonProps = {
  onClick: () => void;
};

const TelegramButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <TelegramIcon />
  </IconButton>
);

export default TelegramButton;
