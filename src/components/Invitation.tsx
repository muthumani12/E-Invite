import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, UserCheck, CalendarCheck, Navigation } from "lucide-react";
import Countdown from "./Countdown";
import Sparkles from "./Sparkles";
import Gallery from "./Gallery";
import InteractiveCalendar from "./InteractiveCalendar";
import RSVPModal from "./RSVPModal";
import photo2 from "../assets/Manyavar & Mohey Non-Apparel - How to Personalize Your Wedding Reception Décor_D.jpg";
import photoEngament from "../assets/Golden Betrothal Invitation_ Muthumani & Preethi.png";

// import Guestbook from "./Guestbook";

export default function Invitation() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <div className="min-h-screen w-full relative pb-24 overflow-x-hidden flex flex-col items-center bg-transparent font-serif text-brand-primary">
      {/* Responsive Decorative Background Corners */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-r-2 sm:border-r-[3px] border-t-2 sm:border-t-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-top-right pointer-events-none"
      />
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-brand-border m-3 sm:m-6 md:m-8 origin-bottom-left pointer-events-none"
      />

      <div className="max-w-4xl w-full px-4 sm:px-6 pt-12 sm:pt-20 md:pt-24 flex flex-col items-center text-center z-10">
        {/* <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 sm:mb-20 mt-4 sm:mt-8 w-full max-w-2xl px-2"
        >
        
          <p className="font-arabic text-lg sm:text-2xl md:text-3xl text-brand-primary leading-relaxed sm:leading-loose font-bold">
            You were my unexpected hello, and now you`re my forever
          </p>
        
        </motion.div> */}

        {/* Names Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 relative w-full"
        >
          <span className="absolute text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-sans font-black text-brand-faint -z-10 opacity-70 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            CELEBRATE
          </span>

          <h2
            className="font-arabic text-base sm:text-xl text-brand-primary font-extrabold tracking-[0.2em] mb-8 sm:mb-12 uppercase"
            dir="rtl"
          >
            ✨ We cordially invite you to our special day ✨
          </h2>

          <div className="relative inline-block w-full max-w-lg mt-2 sm:mt-6">
            <Sparkles count={18} />
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-brand-primary z-10 block relative tracking-tight">
              Muthumani
            </h1>
            <span className="text-3xl sm:text-5xl font-serif italic font-normal text-brand-accent block my-3 sm:my-6 relative z-10">
              &amp;
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-brand-primary z-10 block relative tracking-tight">
              Preethi
            </h1>
          </div>
        </motion.div>

        {/* Date & Countdown */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center"
        >
          <div className="inline-block tracking-[0.3em] text-[11px] sm:text-xs uppercase font-sans font-extrabold text-brand-primary mb-3">
            Save The Date
          </div>

          {/* Arabic Date */}
          {/* <h3 className="font-arabic text-2xl sm:text-4xl font-bold text-brand-primary mb-2">
            الجمعة، ٢٥ سبتمبر ٢٠٢٦
          </h3> */}

          {/* English Date with strict LTR isolation */}
          <p
            dir="ltr"
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="text-lg sm:text-2xl font-serif italic text-brand-accent font-semibold mb-8 sm:mb-12"
          >
            Sunday, November 29, 2026
          </p>

          <Countdown />
        </motion.div>

        {/* Interactive Calendar */}
        <InteractiveCalendar />

        <div className="w-screen max-w-none m-0 p-0 overflow-hidden">
          <img
            src={photoEngament}
            alt="Muthumani & Preethi Betrothal Ceremony"
            className="block w-full max-w-none h-auto"
          />
        </div>
        {/* RSVP Section */}
        {/* <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 sm:mb-24 w-full flex flex-col items-center relative"
        >
          <span className="absolute text-6xl sm:text-8xl md:text-[130px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            RSVP
          </span>

          <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-3">
            <CalendarCheck size={22} strokeWidth={1.5} />
          </div>

          <h2 className="font-serif tracking-[0.25em] text-xs sm:text-sm uppercase font-bold text-brand-primary mb-1">
            RSVP
          </h2>
          <h3 className="font-arabic text-2xl sm:text-3xl font-bold text-brand-accent mb-3">
            تأكيد الحضور
          </h3>
          <p className="font-arabic text-sm text-brand-secondary max-w-sm mx-auto mb-8 font-medium px-4">
            سعادتنا تكتمل بوجودكم، شاركونا فرحتنا وأكدوا حضوركم
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRSVPOpen(true)}
            className="flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer border-none rounded-full"
          >
            <UserCheck size={18} strokeWidth={1.8} />
            أكّد حضورك
          </motion.button>
        </motion.div> */}

        {/* Photo Gallery Section */}
        <Gallery />

        {/* Location Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full relative text-center flex flex-col items-center mb-16 sm:mb-24"
          dir="rtl"
        >
          {/* <span className="absolute text-6xl sm:text-8xl md:text-[140px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
            GALLERY
          </span> */}
          <div className="flex items-center gap-4 mb-8 justify-center bg-white/70 backdrop-blur-xs border border-brand-border/40 px-5 py-3 rounded-2xl shadow-xs">
            <div className="w-11 h-11 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="text-right" dir="ltr">
              <div className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-secondary">
                The Venue
              </div>
              <div className="text-sm font-sans font-bold text-brand-primary mt-0.5">
                JRV MAHAL
              </div>
            </div>
          </div>

          <p className="font-arabic text-lg sm:text-2xl text-brand-primary font-medium mb-8 leading-relaxed max-w-lg px-4">
            Wedding venue
            <br />
            234, Sivanthipuram Main Rd, Kalladaikurichi, Tamil Nadu 627416{" "}
          </p>

          {/* Map */}
          <div className="w-full max-w-2xl h-64 sm:h-80 md:h-96 bg-brand-bg relative mb-8 border border-brand-border/60 overflow-hidden rounded-2xl shadow-md">
            <div className="absolute inset-0 border-[6px] sm:border-[10px] border-brand-bg/30 z-10 pointer-events-none rounded-2xl"></div>

            <iframe
              title="JRV Mahal ✨"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4149.419835162023!2d77.46002171079665!3d8.69125099132116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04391870db47dd%3A0x9d6482c6dfa44eac!2sJRV%20MAHAL!5e1!3m2!1sen!2sin!4v1791571747884!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps?ll=8.691251,77.462602&z=16&t=h&hl=en&gl=IN&mapclient=embed&cid=11341333552292974252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 rounded-full shadow-md hover:shadow-xl"
          >
            <Navigation size={16} />
            Open Map
          </a>
        </motion.div>

        <div className="inline-block tracking-[0.3em] text-[11px] sm:text-xs uppercase font-sans font-extrabold text-brand-primary mb-3">
          Save The Date
        </div>

        {/* Arabic Date */}
        <h3 className="font-arabic text-2xl sm:text-4xl font-bold text-brand-primary mb-2">
          Reception
        </h3>

        {/* English Date with strict LTR isolation */}
        <p
          dir="ltr"
          style={{ direction: "ltr", unicodeBidi: "isolate" }}
          className="text-lg sm:text-2xl font-serif italic text-brand-accent font-semibold mb-8 sm:mb-12"
        >
          Sunday, December 06, 2026
        </p>

        <img
          src={photo2}
          alt={""}
          className="w-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full relative text-center flex flex-col items-center mb-16 sm:mb-24"
          dir="rtl"
        >
          {/* <span className="absolute text-6xl sm:text-8xl md:text-[140px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
            Reception
          </span> */}
          <div className="flex items-center gap-4 mb-8 justify-center bg-white/70 backdrop-blur-xs border border-brand-border/40 px-5 py-3 rounded-2xl shadow-xs">
            <div className="w-11 h-11 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="text-right" dir="ltr">
              <div className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-secondary">
                The Venue
              </div>
              <div className="text-sm font-sans font-bold text-brand-primary mt-0.5">
                Pandithar kamalam mandabam
              </div>
            </div>
          </div>

          <p className="font-arabic text-lg sm:text-2xl text-brand-primary font-medium mb-8 leading-relaxed max-w-lg px-4">
            HXG8+J4F, Hanumaan Nagar, Virudhunagar, Tamil Nadu 626001{" "}
          </p>

          {/* Map */}
          <div className="w-full max-w-2xl h-64 sm:h-80 md:h-96 bg-brand-bg relative mb-8 border border-brand-border/60 overflow-hidden rounded-2xl shadow-md">
            <div className="absolute inset-0 border-[6px] sm:border-[10px] border-brand-bg/30 z-10 pointer-events-none rounded-2xl"></div>

            <iframe
              title="Pandithar Kamalam Mandabam ✨"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4139.124923917449!2d77.96545859999999!3d9.576479499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d156aeaff23%3A0xa2f569c61c551f79!2sPandithar%20kamalam%20mandabam!5e1!3m2!1sen!2sin!4v1792084670806!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              style={{ border: 0 }}
              allowFullScreen={true}
              referrerPolicy="strict-origin-when-cross-origin"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps?cid=11742407903038218105&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.25em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 rounded-full shadow-md hover:shadow-xl"
          >
            <Navigation size={16} />
            Open Map
          </a>
        </motion.div>

        {/* Guestbook */}
        {/* <Guestbook /> */}

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 sm:mt-32 mb-10 text-center w-full relative"
        >
          <span className="absolute text-5xl sm:text-8xl md:text-[120px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            THANK YOU
          </span>
          <p className="font-arabic text-base sm:text-lg text-brand-accent font-bold tracking-[0.15em] z-10 relative">
            We request your Gracious Presence to Bless our Union 💕
          </p>
          <p className="font-serif italic text-3xl sm:text-5xl text-brand-primary mb-4 z-10 relative">
            Thank You
          </p>
        </motion.div>
      </div>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  );
}
