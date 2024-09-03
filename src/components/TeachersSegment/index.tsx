import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../helpers/firebaseConfig";
import Button from "../Button";

interface CallbackUser {
  name: string;
  id: string;
  descr: string;
  exp: string;
  imgSrc: string;
}

const TeachersSegment = () => {
  const [data, setData] = useState<CallbackUser[]>([]);
  const [teacher, setTeacher] = useState<number>(0);
  const [totalTeachers, setTotalTeachers] = useState<number>(0);

  const swapTeacherHandler = (prev: number, num: number) => {
    setTeacher((prev) => {
      const newTeacher = (prev + num + totalTeachers) % totalTeachers;
      return newTeacher;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        const teachersData: CallbackUser[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData;
          const user: CallbackUser = {
            name: data.name || "",
            id: doc.id,
            descr: data.descr || "",
            exp: data.exp || "",
            imgSrc: `/${doc.id}.jpg`,
          };
          teachersData.push(user);
        });

        setData(teachersData);
        setTotalTeachers(teachersData.length);

        if (teachersData[teacher]) {
          setData([teachersData[teacher]]);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [teacher, totalTeachers]);

  return (
    <div className="h-[700px] mt-[30px] w-[1100px] m-auto flex mb-7 p-4">
      <div className="bg-bg-highlight w-full flex items-center justify-between rounded-lg relative p-4">
        <div className="flex flex-col h-full mx-12 items-center justify-end w-[500px] pb-4 text-lg font-semibold">
          <h4 className="absolute top-[10px] text-6xl">Наші вчителі</h4>
          <div className="flex items-center">
            <img
              src="/certificate-svgrepo-com (2).png"
              alt="certificate"
              className="w-[130px] mr-5"
            />
            <p className="">
              Мають міжнародні сертифікати, що підтверджують рівень володіння
              іноземною мовою
            </p>
          </div>
          <div className="flex items-center">
            <p className="">Щодня спілкуються з носіями мови</p>
            <img
              src="/conversation-svgrepo-com (1).png"
              alt="speaking"
              className="w-[130px] ml-5"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/education-graduation-learning-school-study-svgrepo-com (1).png"
              alt="education"
              className="w-[130px]  mr-5"
            />
            <p className="">
              Кожні пів року проходять курси підвищення кваліфікації
            </p>
          </div>
          <div className="flex items-center">
            <p className="">Мають індивідуальний підхід до кожного учня</p>
            <img
              src="/teacher-light-skin-tone-svgrepo-com (1).png"
              alt="teacher"
              className="w-[130px] ml-5"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="h-[540px] flex items-center">
            <Button
              text="<"
              onClick={() => swapTeacherHandler(teacher, -1)}
              type="SWITCHER"
            />
          </div>

          <div className="flex space-x-4 items-center">
            {data.map((el, index) => (
              <div
                key={el.id}
                className="flex flex-col items-center w-[300px] h-[580px] text-center shadow-lg rounded-lg p-4"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={el.imgSrc}
                    alt={`Teacher ${index + 1}`}
                    className="w-[250px] rounded-full"
                  />
                  <h4 className="text-3xl font-bold mt-4">{el.name}</h4>
                  <h6 className="text-2xl mt-[10px]">
                    {el.exp}{" "}
                    {el.exp === "2" || el.exp === "3" || el.exp === "4"
                      ? "роки"
                      : "років"}
                  </h6>
                </div>

                <div className="flex-grow flex items-center justify-center">
                  <p className="text-xl text-gray-400">{el.descr}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[540px] flex items-center">
            <Button
              text=">"
              onClick={() => swapTeacherHandler(teacher, 1)}
              type="SWITCHER"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersSegment;
