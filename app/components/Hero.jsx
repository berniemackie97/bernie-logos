"use client";
import React, { useState } from "react";
import Lookup from "../data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [animate, setAnimate] = useState(false);
  const [logoTitle, setLogoTitle] = useState();
  return (
    <div className="flex items-center mt-24 flex-col gap-5 bg-eggshell-500 rounded-3xl p-5">
      <h2 className="text-lightsand-700 text-5xl text-center font-bold">
        {Lookup.HeroHeading}
      </h2>
      <h2 className="text-lightsand-600 text-5xl text-center font-bold">
        {Lookup.HeroSubheading}
      </h2>
      <p className="text-lightsand-600 text-lg text-center">
        {Lookup.HeroDesc}
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mt-10">
        <input
          placeholder={Lookup.InputTitlePlaceholder}
          className="bg-eggshell-400 p-3 border rounded-md w-full shadow-md outline-none"
          onChange={(event) => setLogoTitle(event?.target.value)}
        />
        <Link href={"/create?title=" + logoTitle}>
          <Button
            className={`${
              animate && "animate-rubberband"
            } bg-powder-500 text-lightsand-100 font-bold border shadow-md w-full p-6 rounded-md text-2xl active:shadow-inner shadow-slate-500`}
            onClick={() => {
              setAnimate(true);
            }}
            onAnimationEnd={() => setAnimate(false)}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
