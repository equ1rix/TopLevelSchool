import InstagramButton from "../IconButtons/instagramButton";

import { mock } from "../../helpers";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white h-[200px] flex py-5">
      <div className="container mx-auto max-w-[1100px] flex">
        <div className="container mx-auto  flex">
          <InstagramButton onClick={mock} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
