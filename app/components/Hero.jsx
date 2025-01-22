import React from "react";
import Lookup from "../data/Lookup";

function Hero() {
  return (
    <div className="flex items-center mt-32 flex-col gap-5 bg-eggshell-500 rounded-3xl">
      <h2 className="text-lightsand-700 text-5xl text-center font-bold">{Lookup.HeroHeading}</h2>
      <h2 className="text-lightsand-600 text-5xl text-center font-bold">{Lookup.HeroSubheading}</h2>
      <p className="text-lightsand-600 text-lg">{Lookup.HeroDesc}</p>
    </div>
  );
}

export default Hero;
