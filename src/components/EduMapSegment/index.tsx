import { motion } from "framer-motion";

import { PointIcon } from "../IconButtons/Icons";
import LinePath from "../../helpers/linePath";
import Label from "../Label";

const EduMapSegment = () => {
  return (
    <div className="h-[1450px] mt-[30px] w-[1100px] m-auto flex mb-7 p-4 relative">
      <div className="bg-bg-highlight w-full flex flex-col items-center justify-between rounded-lg relative p-6 text-2xl text-center">
        <h3 className="text-7xl">Твоя мапа знань</h3>

        <motion.div
          className="absolute top-[160px] left-[100px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-end">
            <img
              src="/study-student-svgrepo-com.png"
              alt="student"
              className="w-[150px] mr-5"
            />
            <PointIcon />
            <div className="relative top-[-70px] bg-white w-[500px] p-4 rounded-xl">
              <Label label="Отримуй розібраний матеріал від власного викладача" />
            </div>
          </div>
        </motion.div>

        <LinePath
          startX={-230}
          startY={290}
          endX={220}
          endY={520}
          segments={20}
          delay={0.6}
          amplitude={20}
        />

        <motion.div
          className="absolute top-[400px] right-[100px] "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-end">
            <div className="relative left-[-130px] top-[30px] bg-white w-[500px] p-4 rounded-xl">
              <Label label="Виконуй домашнє завдання і тренуйся на інтерактивних прикладах" />
            </div>
            <PointIcon />
            <img
              src="/list-svgrepo-com.png"
              alt="student"
              className="w-[150px] ml-5"
            />
          </div>
        </motion.div>

        <LinePath
          startX={220}
          startY={540}
          endX={-230}
          endY={930}
          segments={20}
          delay={1.3}
          amplitude={-20}
        />

        <motion.div
          className="absolute top-[810px] left-[120px] flex items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <img
            src="/profits-payment-svgrepo-com.png"
            alt="student"
            className="w-[150px]"
          />
          <PointIcon />
          <div className="relative left-[130px] top-[30px] bg-white w-[500px] p-4 rounded-xl">
            <Label label="Отримуй розібраний матеріал від власного викладача" />
          </div>
        </motion.div>
        <LinePath
          startX={-220}
          startY={940}
          endX={230}
          endY={1300}
          segments={20}
          delay={2.6}
          amplitude={20}
        />

        <motion.div
          className="absolute top-[1170px] right-[100px] flex items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="relative left-[-130px] top-[30px] bg-white w-[500px] p-4 rounded-xl">
            <Label label="Отримуй розібраний матеріал від власного викладача" />
          </div>
          <PointIcon />
          <img
            src="/calendar-svgrepo-com.png"
            alt="student"
            className="w-[150px] ml-5"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EduMapSegment;
