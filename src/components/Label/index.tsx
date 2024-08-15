type LableProps = {
  label: string;
};

const Label = ({ label = "" }: LableProps) => (
  <label className="text-black">{label}</label>
);

export default Label;
