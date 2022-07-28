import Image from "next/image";
import { AnimatePresence, motion, useTime } from "framer-motion";
import john from "../public/images/john.webp";
import widow from "../public/images/black-widow.webp";
import lion from "../public/images/the-lion-king.webp";
import { useState } from "react";

export default function Header() {
  const [animItem, setAnimItem] = useState({
    scale: 0.75,
    x: "-50%",
    zIndex: 0,
  });
  const [animItem1, setAnimItem1] = useState({
    scale: 0.75,
    x: "50%",
    zIndex: 0,
  });
  const [animItem2, setAnimItem2] = useState({ scale: 1, x: "0%", zIndex: 10 });
  // const [item,setItem] = useState()
  // const container = {
  //   hidden: {
  //     repeat: Infinity,
  //   },
  //   show: {
  //     transition: {
  //       delayChildren: 0.35,
  //       ease: "easeInOut",
  //       repeat: Infinity,
  //       repeatDelay: 2,
  //       // duration:
  //     },
  //   },
  // };
  const container = {
    // hidden: {
    //   repeat: Infinity,
    // },
    show: {
      x: "0",
      scale: 1,
      zIndex: 10,
      transition: {
        ease: [0.41, 0.41, 0.69, 0.69],
        duration: 1.6,
        // repeat: Infinity,
        // repeatDelay: 2,
      },
      transition: {
        delayChildren: 0.35,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
        // duration:
      },
    },
  };

  const [item, setItem] = useState({
    hidden: { scale: 0.75, x: "-50%", zIndex: 0 },
    show: {
      x: "0",
      scale: 1,
      zIndex: 10,
      transition: {
        ease: [0.41, 0.41, 0.69, 0.69],
        duration: 1.6,
        // repeat: Infinity,
        // repeatDelay: 2,
      },
    },
    exit: {
      scale: 0.75,
      x: "-50%",
      z: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  });

  const item1 = {
    hidden: { scale: 0.75, x: "50%", zIndex: 0 },
    show: {
      scale: 0.75,
      x: "-50%",
      zIndex: 0,
      transition: {
        ease: [0.41, 0.41, 0.69, 0.69],
        duration: 1.6,
        // repeat: Infinity,
        // repeatDelay: 2,
      },
    },
    exit: {
      scale: 0.75,
      x: "-50%",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  const item2 = {
    hidden: { scale: 1, x: "0%", zIndex: 10 },
    show: {
      scale: 0.75,
      x: "50%",
      zIndex: 0,
      transition: {
        ease: [0.41, 0.41, 0.69, 0.69],
        duration: 1.6,
        // repeat: Infinity,
        // repeatDelay: 2,
      },
    },
    exit: {
      scale: 0.75,
      x: "-50%",
      z: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  const time = useTime();
  const setLoading = () => {
    console.log(time);
    // time.hasAnimated = true;
    setItem(item1);
  };
  const determineVariants = (itm) => {
    if (itm.x == "0%") {
      return { scale: 0.75, x: "50%", zIndex: 0 };
    }
    if (itm.x == "50%") {
      return { scale: 0.75, x: "-50%", zIndex: 0 };
    }
    if (itm.x == "-50%") {
      return { scale: 1, x: "0%", zIndex: 10 };
    }
  };
  const handleAnimItem = (definition, name) => {
    console.log(definition);
    if (name == "widow") {
      let itm = determineVariants(animItem);
      setAnimItem(itm);
    }
    if (name == "john") {
      let itm = determineVariants(animItem1);
      setAnimItem1(itm);
    }
    if (name == "lion") {
      let itm = determineVariants(animItem2);
      setAnimItem2(itm);
    }
  };
  return (
    <div className="bg-white lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:py-8">
          <a
            href="/"
            className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="w-6 h-auto text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            WMDB
          </a>
          <nav className="hidden lg:flex gap-12">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 hover:bg-indigo-50 rounded-2xl p-3"
            >
              Home
            </a>
            <a
              href="#"
              className="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1 hover:bg-indigo-50 rounded-2xl p-3"
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 hover:bg-indigo-50 rounded-2xl p-3"
            >
              Propose New Addition
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 hover:bg-indigo-50 rounded-2xl p-3"
            >
              Vote
            </a>
          </nav>
          <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <a
              href="#"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Connect Your Wallet
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>

        <div className="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          <section className="flex items-center justify-center">
            {/* <h2>Side Slide</h2>
            <button>Toggle effect</button> */}
            {/* <figure className="stack stack-sideslide active:"> */}
            {/* <motion.div */}
            {/* <AnimatePresence> */}
            <motion.div
              className="my-5 mx-auto w-[400px] p-0 relative max-w-full inline-grid place-items-center items-end"
              // className="stack stack-sideslide"
              // variants={container}
              // transition={{
              //   delayChildren: 2,
              //   repeatDelay: 2,
              //   delay: 2,
              //   repeat: Infinity,
              // }}
              // onAnimationEnd={() => setLoading()}
              // initial="hidden"
              // animate="show"
              // exit="exit"
            >
              <motion.img
                // className="max-w-full absolute top-0 left-0 transition-all outline-1 outline outline-transparent translate-x-2/4 -scale-75 rotate-180"
                className="max-w-full absolute top-0 left-0 transition-all outline-1 outline outline-transparent"
                initial={{ scale: 0.75, x: "50%", zIndex: 0 }}
                // variants={item1}
                animate={animItem}
                onAnimationComplete={(definition) =>
                  handleAnimItem(definition, "widow")
                }
                // onAnimationEnd={()}
                // animate={{
                //   x: ["50%", "-50%", "0%"],
                //   scale: [0.75, 0.75, 1],
                //   zIndex: [0, 0, 2],
                // }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatDelay: 2,
                  delay: 2,
                  // x: {
                  //   delay: 2,
                  // },
                }}
                src="/images/black-widow.webp"
                alt="img06"
              />
              <motion.img
                className="max-w-full absolute top-0 left-0 transition-all outline-1 outline outline-transparent z-10"
                initial={{ scale: 1, x: "0%", zIndex: 10 }}
                animate={animItem1}
                onAnimationComplete={(definition) =>
                  handleAnimItem(definition, "john")
                }
                // variants={item2}
                // animate={{
                //   x: ["0%", "50%", "-50%"],
                //   scale: [1, 0.75, 0.75],
                //   zIndex: [2, 0, 0],
                // }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatDelay: 2,
                  delay: 2,
                  // x: {
                  //   delay: 2,
                  // },
                }}
                src="/images/john.webp"
                alt="img04"
              />
              <motion.img
                // className="max-w-full absolute top-0 left-0 transition-all outline-1 outline outline-transparent -translate-x-2/4 -scale-75 rotate-180"
                className="max-w-full top-0 left-0 transition-all outline-1 outline outline-transparent"
                initial={{ scale: 0.75, x: "-50%", zIndex: 0 }}
                animate={animItem2}
                onAnimationComplete={(definition) =>
                  handleAnimItem(definition, "lion")
                }
                // variants={item}
                // animate={{
                //   x: ["-50%", "0%", "50%"],
                //   scale: [0.75, 1, 0.75],
                //   zIndex: [0, 2, 0],
                // }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatDelay: 2,
                  delay: 2,
                  // x: {
                  //   delay: 2,
                  // },
                }}
                src="/images/the-lion-king.webp"
                alt="img05"
              />
            </motion.div>
            {/* </AnimatePresence> */}
            {/* </figure> */}
          </section>
        </div>
      </div>
    </div>
  );
}
