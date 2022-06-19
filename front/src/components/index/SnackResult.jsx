import React, { useState } from "react";
import axios from "axios";
import "../../styles/btn/likeBtn.css";

export const SnackResult = ({ snackInfo, iine }) => {
  const [checkLike, setCheckLike] = useState(false);

  // いいね数更新用
  const updateSnackLikes = (id, iine) => {
    axios
      .get(`https://server-doer.herokuapp.com/snack/like/${id}?value=${iine}`)
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center my-5">
      <div className="border grid grid-cols-5 justify-center place-items-center justify-items-center rounded-lg border-r shadow-lg">
        <img
          src={snackInfo.imgUrl}
          alt="商品画像"
          className="object-fill w-full h-full border-r rounded-l-lg col-span-2"
        />
        <p className="text-xs mx-3 sm:text-lg col-span-2 sm:mx-3">
          {snackInfo.name}
        </p>
        {checkLike ? (
          <button
            type="button"
            className="
            w-10 h-10 sm:w-14 sm:h-14
                                m-1 lg:m-10
                                original-rotate-vert-center
                                justify-center
                                border border-pink-300 bg-pink-300
                                text-white focus:ring-4 
                                focus:outline-none focus:ring-pink-300
                                font-medium rounded-full 
                                text-sm p-1 text-center inline-flex items-center 
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
            {snackInfo.likes + iine}
          </button>
        ) : (
          <button
            type="button"
            className="
              w-10 h-10 sm:w-14 sm:h-14
                                justify-center
                                text-pink-300
                                border border-pink-200 hover:bg-pink-300
                                hover:text-white focus:ring-4 
                                focus:outline-none focus:ring-pink-300
                                font-medium circle
                                text-sm text-center 
                                inline-flex p-1 items-center 
                                "
            onClick={() => {
              setCheckLike(true);
              updateSnackLikes(snackInfo.id, iine);
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
