"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Good Quality",
    name: "Netik Pareek",
    designation: "Student",
    src: "/netik.png"
  },
  {
    quote: "Nice Fabric",
    name: "Divya Kumari",
    designation: "Student",
    src: "/test1.png"
  },
  {
    quote: " Like The Finishing ",
    name: "Rakshit Jain",
    designation: "Student",
    src: "/test2.png"
  },
  {
    quote: "Nice Fit ",
    name: "Rajput Rahul",
    designation: "Student",
    src: "/test3.png"
  },
  {
    quote: "Faboulous Designs",
    name: "Tejasvini Dadhich",
    designation: "Student",
    src: "/test4.png"
  }
];

export const AnimatedTestimonials = ({ autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 font-sans antialiased">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image section */}
        <div className="relative w-[320px] h-[320px] mx-auto overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) =>
              index === active ? (
                <motion.img
                  key={`${testimonial.name}-${index}`}
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={320}
                  height={320}
                  draggable={false}
                  className="absolute w-full h-full object-cover rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Text section */}
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-lg text-black ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex gap-4 pt-12 md:pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-white transition-transform group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-white transition-transform group-hover/button:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
