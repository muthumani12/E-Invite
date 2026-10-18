import { motion } from "motion/react";
import Sparkles from "./Sparkles";
import photo2 from "../assets/Royal Gold M P Monogram Crest.png";

import ringsBg from "../assets/rings.png";
import type { Key } from "react";

interface CoverProps {
  key?: Key;
  onOpen: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cornerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.95,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(252, 249, 245, 0.62), rgba(252, 249, 245, 0.62)), url('${ringsBg}')`,
      }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: { duration: 0.9, ease: "easeInOut" },
      }}
    >
      {" "}
      {/* Responsive Decorative Corners */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-r-2 sm:border-r-[3px] border-t-2 sm:border-t-[3px] border-brand-border m-3 sm:m-6 md:m-8 z-10 origin-top-right pointer-events-none"
      />
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-brand-border m-3 sm:m-6 md:m-8 z-10 origin-bottom-left pointer-events-none"
      />
      <div className="relative flex flex-col items-center justify-center px-4 py-8 sm:p-8 max-w-lg mx-auto text-center z-10 w-full h-full">
        <motion.div
          className="flex flex-col items-center relative w-full justify-center my-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Watermark */}
          {/* <motion.span
            variants={itemVariants}
            className="absolute text-7xl sm:text-9xl md:text-[160px] font-sans font-black text-brand-faint -z-10 opacity-70 uppercase tracking-tighter pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none"
          >
            INVITE
          </motion.span> */}
          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="font-arabic text-base sm:text-xl text-brand-primary mb-4 sm:mb-6 font-extrabold tracking-[0.2em] uppercase"
          >
            INVITE YOU TO JOIN THEIR WEDDING CELEBRATION
          </motion.h2>
          {/* Main Names */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 w-full py-2"
          >
            <Sparkles count={15} />
            <img
              src={photo2}
              alt="Cover"
              className="w-full h-full object-contain object-bottom drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.08] text-brand-primary relative z-10 tracking-tight">
              M
              <span className="text-3xl sm:text-5xl font-serif italic font-normal text-brand-accent block my-2 sm:my-3">
                &
              </span>
              P
            </h1> */}
          </motion.div>
          {/* Date Tag */}
          <motion.p
            variants={itemVariants}
            dir="ltr"
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="font-sans text-[11px] sm:text-xs text-brand-secondary font-bold tracking-[0.3em] uppercase mt-6 sm:mt-10 mb-8 sm:mb-10 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-xs border border-brand-border/40"
          >
            25 November 2026
            <br />
            10.30 - 11.30 AM
          </motion.p>
          {/* <p
            dir="ltr"
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="text-lg sm:text-2xl font-serif italic text-brand-accent font-semibold mb-8 sm:mb-12"
          >
            10.30 - 11.30 AM
          </p> */}
          {/* Call to action button */}
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.06,
              y: -3,
              filter: "brightness(1.12)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            aria-label="Open our wedding invitation"
            className="
    group relative
    w-32 h-36 sm:w-36 sm:h-40
    flex flex-col items-center justify-center
    cursor-pointer
    border-0 outline-none
    bg-transparent
  "
          >
            {/* Soft golden glow */}
            <span
              className="
      absolute inset-2 rounded-[45%]
      bg-[#D9AD63]/20 blur-xl
      transition-all duration-500
      group-hover:bg-[#F0D49A]/35
    "
            />

            {/* Ornate gold invitation frame */}
            <span
              className="
      absolute inset-2
      rounded-t-[48%] rounded-b-[42%]
      border-2 border-[#D6B16E]
      bg-gradient-to-br
      from-[#8D2438] via-[#651627] to-[#3D0D1A]
      shadow-[0_10px_25px_rgba(48,10,20,0.35),inset_0_1px_5px_rgba(255,225,165,0.3)]
    "
            />

            {/* Fine inner frame */}
            <span
              className="
      absolute inset-[13px]
      rounded-t-[48%] rounded-b-[42%]
      border border-[#E9CC91]/70
      pointer-events-none
    "
            />

            {/* Decorative gold corners */}
            <span className="absolute top-4 left-5 text-[#F0D49A] text-lg">
              ❧
            </span>
            <span className="absolute top-4 right-5 text-[#F0D49A] text-lg -scale-x-100">
              ❧
            </span>

            {/* Floating butterflies */}
            <motion.span
              className="absolute -top-2 -right-1 text-xl"
              animate={{
                y: [0, -5, 0],
                rotate: [-8, 10, -8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🦋
            </motion.span>

            <motion.span
              className="absolute bottom-3 -left-1 text-sm"
              animate={{ y: [0, -4, 0], rotate: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.span>

            {/* Invitation lettering */}
            <span className="relative z-10 flex flex-col items-center text-[#F8E8C8]">
              <span className="font-serif text-[9px] tracking-[0.28em] uppercase opacity-90">
                Together
              </span>

              <span className="my-1 font-serif text-3xl italic drop-shadow-md">
                M <span className="text-[#EBC77F]">&</span> P
              </span>

              {/* <span className="w-12 h-px bg-[#E4C17D]/80 my-1" /> */}

              <span className="text-[8px] tracking-[0.22em] uppercase">
                Open Invitation
              </span>
            </span>

            {/* Tiny gold sparkle */}
            {/* <motion.span
              className="absolute top-1 left-1/2 text-[#FFE6A6] text-sm"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦
            </motion.span> */}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
