"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion ,AnimatePresence} from "motion/react";
import { cn } from "../lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/Cardanimate";
export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
     
      className="relative  h-[40vw] grid grid-cols-2 justify-start gap-5 space-x-10 overflow-y-auto rounded-md p-3"
      ref={ref}>
     
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden  h-110 w-full  overflow-hidden rounded-xl bg-white md:block",
          contentClassName
        )}>
      <div className="h-full w-full  flex justify-center items-center">

               <CardContainer className="inter-var h-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {content[activeCard].title}
        </CardItem>
    
        <CardItem translateZ="100" className="w-full mt-4">
          <motion.img
           initial={{
            scale:0.8,
            rotateY:14

           }}
           animate={{
scale:1,
rotateY:0
           }}

           transition={{
            duration:0.5
           }}
            src={content[activeCard].image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={content[activeCard].url}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <a href={content[activeCard].url}>view now →</a>
          </CardItem>
       
        </div>
      </CardBody>
    </CardContainer>
       
      </div>
      </div>
       <div className="div relative flex items-start px-4">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-5">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 flex items-center">
                    <p className="w-16 h-1  mr-3" style={{ background: backgroundGradient }}></p>
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm mt-7 font-sans w-full text-slate-300">
                {item.description}
              </motion.p>
               <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm mt-5 font-sans w-full text-slate-300">{
                    item.features.map((data,key)=>(
                        <li key={key} className="list-none text-sm pb-2 font-sans "><span className={`text-[${backgroundGradient}] mr-1 text-xl`}>+</span> {data}</li>
                    ))

                }
                
              </motion.div>
                             <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm mt-5 font-sans flex flex-row flex-wrap gap-1 space-x-1 p-2 w-full text-slate-300">{
                    item.library.map((data,key)=>(
                        <div key={key} className=" border border-white/40 py-2 rounded-full px-4 bg-black flex items-center text-sm pb-2 font-sans ">
<img src={data.icon} className="w-5 h-5 mr-1" alt="" />
<p className="text-sm">{data.name}</p>
                        </div>
                    ))

                }
                
              </motion.div>
               
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
