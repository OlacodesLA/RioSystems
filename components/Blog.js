import React from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";
import { blogData } from "../components/data";

const Blog = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      //   rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="">
          <h2 className="mb-6  font-sans text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative px-1 ">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
              <span className="relative inline-block text-deep-purple-accent-400 ">
                Our Blog
              </span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogData.map((mydata, index) => {
            const { image, description, date, title, content, button } = mydata;
            return (
              <div key={index}>
                <motion.div
                  className=""
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  exit="onscreen"
                >
                  <motion.div
                    variants={cardVariants}
                    className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
                  >
                    <img
                      src={image}
                      className="object-cover w-full h-64"
                      alt=""
                    />
                    <div className="p-5 border border-t-0">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                          href="/"
                          className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                          aria-label="Category"
                          title="traveling"
                        >
                          {description}
                        </a>
                        <span className="text-gray-600">— {date}</span>
                      </p>
                      <a
                        href="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        {title}
                      </a>
                      <p className="mb-2 text-gray-700">{content}</p>
                      <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                        {button}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
