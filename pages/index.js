import Image from "next/image";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import joker from "../public/images/joker.webp";
import suicide from "../public/images/suicide.webp";
import godzilla from "../public/images/godzilla.webp";
import inception from "../public/images/inception.webp";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

export const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
  name,
  classes,
  ids,
}) => {
  return (
    <motion.div
      variants={variants}
      // className={`absolute origin-center flex items-center justify-center ${classes}`}
      className={`image-block ${classes}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        className="w-full object-fill"
        src={id}
        // fallback={`/images/${id}.jpg`}
        alt={name}
      />
    </motion.div>
  );
};
// <div className="overflow-hidden h-screen">

export default function Home() {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div className="loader">
          <motion.div
            variants={container}
            // onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="loader-inner"
          >
            {/* <ImageBlock variants={item} id={joker} name='joker' classes="w-[400px] left-[4/25] bottom-[7/50]" /> */}
            <ImageBlock
              variants={item}
              id={joker}
              name="joker"
              classes="image-1"
            />
            {/* <motion.div variants={itemMain} className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center"> */}
            <motion.div variants={itemMain} className="transition-image">
              <motion.img
                className="w-[800px] flex"
                layoutId="main-image-1"
                src="/images/john.webp"
              />
            </motion.div>
            {/* <ImageBlock variants={item} id={suicide} name='suicide' classes="w-[300px] right-[3/25] top-[2/25]" /> */}
            <ImageBlock
              variants={item}
              id={suicide}
              name="suicide"
              classes="image-3"
            />
            {/* <ImageBlock variants={item} id={inception} name='inception' classes="max-w-[400px] w-[2/5] right-[1/5] bottom-[1/10]"/> */}
            <ImageBlock
              variants={item}
              id={inception}
              name="inception"
              classes="image-4"
            />
            {/* <ImageBlock variants={item} id={godzilla} name='godzilla' classes="w-[280px] left-[7/50] top-[3/25]"/> */}
            <ImageBlock
              variants={item}
              id={godzilla}
              name="godzilla"
              classes="image-5"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

{
  /* </div> */
}
