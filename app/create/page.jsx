"use client";
import React, { useState } from "react";
import LogoTitle from "./components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CreateLogo() {
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);

  debugger;
  return (
    <div className="mt-28 p-10 border shadow-md shadow-lightsand-600 rounded-xl 2xl:mx-72">
      <LogoTitle />

      <div className="flex items-center justify-between mt-10">
        <Button
          className={`${
            leftAnimate && "animate-rubberband"
          } text-lightsand-600 font-bold border shadow-md p-6 rounded-md text-2xl active:shadow-inner shadow-slate-500`}
          onClick={() => {
            setLeftAnimate(true);
          }}
          onAnimationEnd={() => setLeftAnimate(false)}
        >
          <ArrowLeft /> Previous
        </Button>
        <Button
          className={`${
            rightAnimate && "animate-rubberband"
          } text-lightsand-600 font-bold border shadow-md p-6 rounded-md text-2xl active:shadow-inner shadow-slate-500`}
          onClick={() => {
            setRightAnimate(true);
          }}
          onAnimationEnd={() => setRightAnimate(false)}
        >
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
