import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/data/Lookup";
import LogoDesign from "@/app/data/LogoDesign";
import Image from "next/image";

function LogoDesigns({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-1 hover:border-2 border-powder-600 rounded-xl ${
              selectedOption == design.title &&
              "border-2 border-powder-600 rounded-xl"
            }`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[150px] object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;
