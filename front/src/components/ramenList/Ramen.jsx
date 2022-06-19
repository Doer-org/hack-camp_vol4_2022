import React, { useState } from "react";
import axios from "axios";

import "../../styles/btn/likeBtn.css";

const Ramen = ({ ramenInfo }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="border grid grid-cols-5 justify-center place-items-center justify-items-center rounded-lg border-r shadow-lg">
        <img
          src={ramenInfo.imgUrl}
          alt="商品画像"
          className="object-fill w-full h-full border-r rounded-l-lg col-span-2"
        />
        <p className="text-xs mx-3 sm:text-lg col-span-2 sm:mx-3">
          {ramenInfo.name}
        </p>
      
      </div>
    </div>
  );
};

export default Ramen;
