import { motion } from "framer-motion";

type LinePathProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  segments?: number;
  delay?: number;
  amplitude?: number;
};

const LinePath = ({
  startX,
  startY,
  endX,
  endY,
  segments = 10,
  delay = 0,
  amplitude = 30,
}: LinePathProps) => {
  const deltaX = (endX - startX) / segments;
  const deltaY = (endY - startY) / segments;

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {Array.from({ length: segments }).map((_, i) => {
        const waveY = amplitude * Math.sin((i / segments) * Math.PI * 2);

        return (
          <div
            key={i}
            className="w-2 h-2 bg-black rounded-full absolute"
            style={{
              left: `${startX + deltaX * i}px`,
              top: `${startY + deltaY * i + waveY}px`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default LinePath;
