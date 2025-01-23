"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-lg bg-slate-00">
      <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
      <Button
        className={`${
          animate && "animate-rubberband"
        } text-lightsand-600 font-bold border shadow-md active:shadow-inner"`}
        onClick={() => {
          setAnimate(true);
        }}
        onAnimationEnd={() => setAnimate(false)}
      >
        Get Started
      </Button>
    </div>
  );
}

export default Header;
