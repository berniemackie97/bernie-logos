"use client"
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitle({onHandleInputChange}) {
    const searchParam = useSearchParams();
    const [title, setTitle] = useState(searchParam?.get('title')??'');
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup.LogoTitleDesc}
      />

      <input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        className="bg-eggshell-400 p-4 mt-5 w-full border rounded-lg shadow-md outline-none"
        defaultValue={title}
        onChange={(e)=>onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoTitle;
