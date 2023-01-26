import { React, useRef } from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";

const Section2 = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </span>
            </h2>
            <p class="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 ">
            <AnimatePresence>
              <motion.div
                key="modal"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                exit="onscreen"
                className=""
              >
                <motion.img
                  variants={cardVariants}
                  class="w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                  alt="office content 1"
                />
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              className=""
            >
              <motion.img
                variants={cardVariants}
                class="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
