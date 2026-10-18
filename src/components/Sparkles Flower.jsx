import { useState, useEffect } from "react";
import "./Sparkles Flower.css";
const flowers = [
  "🌻",
  "🌸",
  "🌺",
  "🌼",
  "🌷",
  "🌹",
  "🌿",
  "🪷",
  "🏵",
  // "🪻",
  // "🩷",
  // "🧡",
  // "🩵",
  // "💙",
];
export default function FlowerShower({ sprinkleFlowers, setSprinkleFlowers }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (sprinkleFlowers) {
      sprinkleFlowersHandler();
    }
  }, [sprinkleFlowers]);

  const sprinkleFlowersHandler = () => {
    const newPetals = Array.from({ length: 60 }, (_, index) => ({
      id: `${Date.now()}-${index}`,
      flower: flowers[Math.floor(Math.random() * flowers.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      size: 16 + Math.random() * 24,
    }));
    setPetals((previous) => [...previous, ...newPetals]);
    setTimeout(() => {
      setPetals((previous) =>
        previous.filter(
          (petal) => !newPetals.some((item) => item.id === petal.id),
        ),
      );
    }, 7000);
    setSprinkleFlowers(!sprinkleFlowers);
  };

  return (
    <div>
      {" "}
      {/* <button className="flower-button" onClick={sprinkleFlowersHandler}>
        {" "}
        🌸 Sprinkle Flowers 🌸{" "}
      </button>{" "} */}
      <div className="flower-container">
        {" "}
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="flower-petal"
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              fontSize: `${petal.size}px`,
            }}
          >
            {" "}
            {petal.flower}{" "}
          </span>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
