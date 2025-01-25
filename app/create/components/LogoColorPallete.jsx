"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/data/Lookup";
import Colors from "@/app/data/Colors";

function LogoColorPallete({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.pallete);
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoColorpalleteTitle}
        description={Lookup.LogoColorPalleteDesc}
      />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mt-5">
        {Colors.map((pallete, index) => (
          <div
            className={`flex p-1 ${
              selectedOption == pallete.name &&
              "border-4 border-powder-400 rounded-lg"
            }`}
            key={index}
          >
            {pallete?.colors.map((color, index) => (
              <div
                className="h-24 w-full cursor-pointer"
                key={index}
                onClick={() => {
                  setSelectedOption(pallete.name);
                  onHandleInputChange(pallete.name);
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColorPallete;
