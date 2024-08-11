const Firstpart = () => {
  return (
    <div className="container mx-auto relative h-[881px] max-w-[1100px]">
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
      <div className="absolute top-[250px] left-[20px] max-w-[400px] z-10 text-white text-2xl font-bold p-5 rounded-lg bg-bg-main transform rotate-[-10deg] origin-top-left">
        Школа іноземних мов №1
      </div>
      <div className="absolute top-[350px] left-[20px] max-w-[400px] z-10 text-white text-2xl font-bold p-5 rounded-lg bg-bg-main transform rotate-[5deg] origin-top-left">
        від 5 до 60 років
      </div>
      <div className="absolute bottom-[20px] rounded-lg left-0 w-full h-[5px] bg-gray-400"></div>
    </div>
  );
};

export default Firstpart;
