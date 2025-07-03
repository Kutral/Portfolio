import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          KUTRALEESWARAN
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-lg text-neutral-400 flex items-center gap-4 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
           <span>B.Tech </span> <span>  kutraleeswaran2003@gmail.com</span>
          </motion.p>
          <motion.p
            className="text-2xl font-medium text-neutral-300 mt-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            High-achieving and ambitious Computer Science & Engineering graduate specializing in Networking and Cyber Security.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          KUTRALEESWARAN
        </motion.p>
        <motion.p
          className="text-base text-neutral-400 flex flex-col gap-1 mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          <span> 9597581629</span>
          <span> kutraleeswaran2003@gmail.com</span>
          <span>kutral kutraleeswaranb</span>
        </motion.p>
        <div>
          <motion.p
            className="text-lg font-black text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            High-achieving and ambitious Computer Science & Engineering graduate specializing in Networking and Cyber Security.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
