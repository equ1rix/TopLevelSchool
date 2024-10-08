import { mock } from "../../helpers";

import Button from "../Button";

type MainSegmentProps = {
  openModal: () => void;
};

const MainSegment = ({ openModal = mock }: MainSegmentProps) => {
  return (
    <div className="container mx-auto relative h-[881px] max-w-[1100px] font-Ubuntu">
      <div className="absolute inset-0 rounded-lg py-3">
        <img
          src="/3174050.png"
          alt="background image"
          className="w-full h-[750px] object-cover rounded-2xl"
        />
      </div>
      <div className="absolute inset-0 rounded-lg py-3 top-[320px] left-[520px]">
        <img
          src="/3d-casual-life-group-of-young-people-discussing-something-while-working (2).png"
          alt="foreground image"
          className="w-[550px] object-cover rounded-2xl"
        />
      </div>
      <h1 className="absolute top-[220px] left-[20px] max-w-[700px] z-10 text-white text-7xl font-bold  p-5 rounded-lg bg-bg-textHighlight transform rotate-[-10deg] origin-top-left">
        Школа іноземних мов №1
      </h1>
      <h2 className="absolute top-[400px] left-[20px] max-w-[500px] z-10 text-white text-5xl font-bold p-5 rounded-lg bg-bg-textHighlight transform rotate-[5deg] origin-top-left">
        від 5 до 60 років
      </h2>
      <div className="absolute top-[550px] left-[90px] z-10 w-[180px] h-[60px]">
        <Button onClick={openModal} text="Записатися" />
      </div>
      <div className="absolute bottom-[20px] rounded-lg left-0 w-full h-[5px] bg-gray-400"></div>
    </div>
  );
};

export default MainSegment;
