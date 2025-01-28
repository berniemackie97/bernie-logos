import React, { useEffect, useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/data/Lookup";
import axios from "axios";
import Prompt from "@/app/data/Prompt";
import { Loader2Icon } from "lucide-react";

function LogoIdea({ onHandleInputChange, formData }) {
  const [ideas, setIdeas] = useState(() => {
    // Retrieve ideas from localStorage on initial load
    const storedIdeas = localStorage.getItem("logoIdeas");
    return storedIdeas ? JSON.parse(storedIdeas) : null;
  });

  const [regen, setRegen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea);

  // Fetch initial logo design ideas when the component mounts
  useEffect(() => {
    if (!ideas) {
      generateLogoDesignIdea();
    }
  }, []);

  // Save ideas to localStorage whenever they are updated
  useEffect(() => {
    if (ideas) {
      localStorage.setItem("logoIdeas", JSON.stringify(ideas));
    }
  }, [ideas]);

  // Function to fetch logo design ideas
  const generateLogoDesignIdea = async () => {
    if (ideas && !regen && (selectedOption || formData?.idea)) {
      console.log(
        "Skipping API call as ideas and options are already available"
      );
      setIdeas(ideas); // Set the current ideas to state again (if needed)
      return; // Skip API call
    }

    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formData?.design.title
    )
      .replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoPrompt}", formData?.design.prompt);

    try {
      const result = await axios.post("/api/ai-design-ideas", {
        prompt: PROMPT,
      });

      // Update ideas state with the new results
      setIdeas(result.data.ideas);
    } catch (error) {
      console.error("Failed to fetch logo ideas:", error);
    }
    setLoading(false);
  };

  return (
    <div className="">
      {/* Button to regenerate logo design ideas */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setRegen(true);
            generateLogoDesignIdea();
          }}
          className="bg-powder-600 hover:bg-powder-700 text-white font-bold py-2 px-4 rounded-full"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Generating..." : "Regenerate Ideas"}
        </button>
      </div>
      <div className="my-10">
        <HeadingDescription
          title={Lookup.LogoIdeaTitle}
          description={Lookup.LogoIdeaDesc}
        />
        <div className="flex items-center justify-center">
          {loading && (
            <Loader2Icon className="animate-spin my-10 size-24 text-powder-600" />
          )}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          {!loading && ideas &&
            ideas.map((item, index) => (
              <h2
                key={index}
                onClick={() => {
                  setSelectedOption(item);
                  onHandleInputChange(item);
                }}
                className={`p-2 rounded-full bg-powder-500 text-lightsand-700 font-bold border px-3 cursor-pointer
            hover:border-powder-700 hover:text-white hover:bg-powder-600 ${
              selectedOption == item && "border-powder-600 text-white bg-powder-600"
            }`}
              >
                {item}
              </h2>
            ))}
          {!loading && (
            <h2
              onClick={() => {
                setSelectedOption("Let AI Select the best idea");
                onHandleInputChange("Let AI Select the best idea");
              }}
              className={`p-2 rounded-full bg-powder-500 text-lightsand-700 font-bold border px-3 cursor-pointer
            hover:border-powder-600 hover:text-white hover:bg-powder-600 ${
              selectedOption == "Let AI Select the best idea" &&
              "border-powder-600 text-white bg-powder-600"
            }`}
            >
              Let AI Select the best idea
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoIdea;
