import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import Cover from "./components/Cover";
import Invitation from "./components/Invitation";
import AudioPlayer from "./components/AudioPlayer";
import ringsBg from "./assets/rings.png";
import musicTrack from "./assets/vachindamma.mp3";
import SparklesFlower from "./components/Sparkles Flower";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sprinkleFlowers, setSprinkleFlowers] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
    setSprinkleFlowers(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main
      className="relative min-h-screen font-serif text-brand-primary selection:bg-brand-accent selection:text-brand-bg bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(252, 249, 245, 0.60), rgba(252, 249, 245, 0.60)), url('${ringsBg}')`,
      }}
    >
      <audio ref={audioRef} loop>
        <source src={musicTrack} type="audio/mp3" />
      </audio>

      <AnimatePresence>
        {!isOpened && <Cover key="cover" onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpened && (
        <>
          <Invitation />
          <SparklesFlower
            sprinkleFlowers={sprinkleFlowers}
            setSprinkleFlowers={setSprinkleFlowers}
          />
          <AudioPlayer
            isPlaying={isPlaying}
            onToggle={toggleAudio}
            audioRef={audioRef}
          />
        </>
      )}
    </main>
  );
}
