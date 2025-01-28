"use client";
import React, { useEffect, useState } from "react";
import LogoTitle from "./components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./components/LogoDesc";
import LogoColorPallete from "./components/LogoColorPallete";
import LogoDesigns from "./components/LogoDesigns";
import LogoIdea from "./components/LogoIdea";

function CreateLogo() {
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();

    // Clear localStorage when the component mounts
    useEffect(() => {
      localStorage.removeItem("logoIdeas");
    }, []);

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="mt-28 p-10 border bg-eggshell-500 shadow-md shadow-lightsand-600 rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(value) => onHandleInputChange("title", value)}
          formData={formData}
        />
      ) : step == 2 ? (
        <LogoDesc
          onHandleInputChange={(value) => onHandleInputChange("desc", value)}
          formData={formData}
        />
      ) : step == 3 ? (
        <LogoColorPallete
          onHandleInputChange={(value) => onHandleInputChange("pallete", value)}
          formData={formData}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(value) => onHandleInputChange("design", value)}
          formData={formData}
        />
      ) : step == 5 ? (
        <LogoIdea
          onHandleInputChange={(value) => onHandleInputChange("idea", value)}
          formData={formData}
        />
      ) : null}

      <div className="flex items-center justify-center gap-2 mt-10 md:justify-between">
        {step != 1 && (
          <Button
            className={`${
              leftAnimate && "animate-rubberband"
            } bg-powder-500 text-lightsand-100 font-bold border shadow-md p-6 rounded-md text-2xl w-36 md:w-44 active:shadow-inner shadow-slate-500`}
            onClick={() => {
              setLeftAnimate(true);
              setStep(step - 1);
            }}
            onAnimationEnd={() => setLeftAnimate(false)}
          >
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button
          className={`${
            rightAnimate && "animate-rubberband"
          } bg-powder-500 text-lightsand-100 shadow-slate-500 font-bold border shadow-md p-6 rounded-md text-2xl w-36 md:w-44 active:shadow-inner `}
          onClick={() => {
            setRightAnimate(true);
            setStep(step + 1);
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
