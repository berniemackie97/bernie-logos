import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/data/Lookup";

function LogoDesc({onHandleInputChange, formData}) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />
      <input
        type="text"
        placeholder={Lookup.LogoDescTitle}
        className="bg-eggshell-400 p-4 mt-5 w-full border rounded-lg shadow-md outline-none"
        defaultValue={formData?.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;
