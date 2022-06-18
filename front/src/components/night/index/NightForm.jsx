import "../../../styles/App.css";
import React from "react";
import { useState } from "react";

export const NightForm = () => {
  const [emotion, setEmotion] = useState("");
  const [price, setPrice] = useState(1000);

  const handleSubmit = () => {
    console.log(emotion, price);
  };

  return (
    <div className="lg:max-w-5xl w-4/5 mx-auto z-10">
      <div
        className="
                mx-auto
                text-center
                mt-14 sm:mt-20 md:mt-24 lg:mt-44 
                sm:mx-16 md:mx-32 lg:mx-70 
                rounded-2xl 
                shadow-slate-300 
                shadow-lg
                "
      >
        <p
          className="
                font-bold text-white
                text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                py-4 md:py-6 lg:py-8 
                rounded-tl-xl rounded-tr-xl
                shadow-1xl
                night-color
            "
        >
          ラーメンを見つける
        </p>

        {/* submit button */}
        <div className="pb-4 bg-white rounded-b-2xl">
          <button
            type="submit"
            onClick={handleSubmit}
            className="
                        night-color
                        submit button rounded-md
                        md:font-semibold text-base 
                        md:text-xl lg:text-2x text-white focus:outline-none 
                        py-2 px-8 mt-3
                        hover:bg-red-600
                    "
            value="Submit"
            id="submit_bg"
          >
            見つける
          </button>
        </div>
      </div>
    </div>
  );
};
