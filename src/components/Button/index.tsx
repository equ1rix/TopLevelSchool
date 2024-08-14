export const BUTTON_TYPE = {
  DEFAULT: "DEFAULT",
  DASHED: "DASHED",
  DISABLED: "DISABLED",
};

type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

const BUTTON_STYLE: Record<ButtonType, string> = {
  DEFAULT: "bg-bg-main rounded-3xl text-text-primary font-bold py-2 px-4 ",
  DASHED:
    "rounded-3xl bg-bg-main border border-dashed border-2 font-bold py-2 px-4 ",
  DISABLED: "bg-black rounded-3xl text-text-disabled font-bold py-2 px-4 ",
};

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  type?: ButtonType;
  isDisabled?: boolean;
};

const Button = ({
  onClick,
  text = "",
  type = BUTTON_TYPE.DEFAULT,
  isDisabled = false,
}: ButtonProps) => {
  const buttonStyle = isDisabled ? BUTTON_STYLE.DISABLED : BUTTON_STYLE[type];
  return (
    <button
      className={buttonStyle}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
