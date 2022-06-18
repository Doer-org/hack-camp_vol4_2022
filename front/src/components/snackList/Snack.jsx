import heart from "../../data/images/heart.png";
import React, { useState } from "react";
import axios from "axios";

import "../../styles/btn/likeBtn.css";

const Snack = ({ snackInfo }) => {
  const [checkLike, setCheckLike] = useState(false);

  // いいね数更新用
  const updateSnackLikes = (id) => {
    axios
      .get(`http://localhost:8000/snack/like/${id}`)
      .then((data) => {
        // console.log("success")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center my-10">
      <div className="border flex justify-center rounded-lg border-r shadow-lg">
        <img
          src={snackInfo.imgUrl}
          alt="商品画像"
          className="sm:h-32 sm:w-32 h-16 w-16 border-r rounded-l-lg"
        />
        <p className="test-base w-32 mx-3 sm:text-2xl sm:w-64 my-auto sm:mx-6">
          {snackInfo.name}
        </p>
        {checkLike ? (
          <button
            type="button"
            className="
                                original-rotate-vert-center
                                justify-center
                                my-auto
                                mr-4
                                h-3/5
                                w-2/12
                                border border-pink-300 bg-pink-300
                                text-white focus:ring-4 
                                focus:outline-none focus:ring-pink-300
                                font-medium rounded-full 
                                text-sm p-2.5 text-center 
                                inline-flex items-center 
                                "
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            {snackInfo.likes + 1}
          </button>
        ) : (
          <button
            type="button"
            className="
                                justify-center
                                my-auto
                                mr-4
                                h-3/5
                                w-2/12
                                text-pink-300
                                border border-pink-200 hover:bg-pink-300
                                hover:text-white focus:ring-4 
                                focus:outline-none focus:ring-pink-300
                                font-medium rounded-full 
                                text-sm p-2.5 text-center 
                                inline-flex items-center 
                                "
            onClick={() => {
              setCheckLike(true);
              updateSnackLikes(snackInfo.id);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            {snackInfo.likes}
          </button>
        )}
      </div>
    </div>
  );
};

export default Snack;
