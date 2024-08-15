import { arrayAdvantages, arrayCardInformation } from "../../helpers";

const InfoSegment = () => {
  return (
    <div className="h-[850px] mt-[60px] w-[1100px] m-auto">
      <div className="flex justify-center mb-[30px]">
        <div className="flex space-x-16">
          {arrayCardInformation.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[300px] min-h-[400px] text-center shadow-lg rounded-lg p-4"
            >
              <h4 className="text-8xl font-bold">{el.title}</h4>
              <h6 className="text-4xl mt-[30px]">{el.subtitle}</h6>
              <p className="text-xl text-gray-400 mt-[30px]">{el.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-16 justify-center">
        <div className="w-[650px] h-[400px] bg-bg-main rounded-lg flex items-center">
          <div className="m-[40px] text-white w-full">
            <h3 className="text-5xl font-bold mb-8 bg-bg-textHighlight inline-block px-4 py-2 rounded-sm transform rotate-[2deg] origin-top-left">
              Наші переваги
            </h3>
            <ul className="list-disc list-inside text-xl font-semibold space-y-0  ">
              {arrayAdvantages.map((el, index) => (
                <li key={index} className="leading-snug">
                  {el.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[350px] h-[400px] bg-bg-card rounded-lg relative flex flex-col items-center py-9 px-5">
          <h3 className="text-3xl font-semibold mb-5 text-white bg-bg-textHighlight inline-block px-4 py-2 rounded-sm text-center transform rotate-[-2deg] origin-top-left">
            Завжди на зв'язку
          </h3>
          <p className="text-gray-500">
            Спілкуйся з викладачем та одногрупниками в будь-який час! Отримуй
            підтримку, відповіді на питання і розв'язуй завдання разом із
            командою.
          </p>
          <img
            className="w-[180px] h-[180px] absolute bottom-0 left-1/2 transform -translate-x-1/2"
            alt="phone"
            src="/image-removebg-preview.png"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSegment;
