import axios from 'axios';
import React from 'react';
import { useState } from "react";

// import heart from "../../data/images/heart.png";

export const RankSnack = ({ rankSnackInfo, index }) => {

    console.log(index);

    const [checkLike, setCheckLike] = useState(false);

    const updateSnackLikes = (id) => {
        axios
            .get(`https://localhost:8000/snack/like/${id}`)
            .then((deta) => {
            })
            .catch((err) => {
                console.log(err);
            });

        // (let id = 1; i <= 10; id++) {
        //     console.log(id);
    };


    return (
        <div className="flex justify-center my-10">
            <p className="sm:text-5xl my-auto sm:p-6 text-base p-3">{index + 1}</p>
            <div className="border flex justify-center rounded-lg border-r shadow-lg">
                <img
                    src={rankSnackInfo.imgUrl}
                    alt="お菓子おみくじロゴ"
                    className="sm:h-32 sm:w-32 h-16 w-16 border-r rounded-l-lg"
                />
                <p className="test-base w-32 mx-3 sm:text-2xl sm:w-64 my-auto sm:mx-6">
                    {rankSnackInfo.name}
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
                                text-sm p-1 text-center 
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
                        {rankSnackInfo.likes + 1}
                    </button>
                ) : (
                    <button
                        type="button"
                        className="w-10 h-10 sm:w-14 sm:h-14
                                justify-center
                                my-auto
                                mx-2
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
                            updateSnackLikes(rankSnackInfo.id);
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
                        {rankSnackInfo.likes}
                    </button>
                )}
            </div>
        </div>
    );
};
