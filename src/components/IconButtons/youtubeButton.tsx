import { mock } from "../../helpers";

import IconButton from "./iconButton";
import { YoutubeIcon } from "./Icons";

type ButtonProps = {
  onClick: () => void;
};

const YoutubeButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <YoutubeIcon />
  </IconButton>
);

export default YoutubeButton;
