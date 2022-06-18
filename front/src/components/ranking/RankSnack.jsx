import React from 'react'
import heart from "../../data/images/heart.png";

export const RankSnack = ({rankSnackInfo}) => {
    return (
        <div className="flex justify-center my-10">
            <p className="sm:text-5xl my-auto sm:p-6 text-base p-3">{rankSnackInfo.ranking}</p>
            <div className="border flex justify-center rounded-lg border-r shadow-lg">
                <img
                    src={rankSnackInfo.imgUrl}
                    alt="お菓子おみくじロゴ"
                    className="sm:h-32 sm:w-32 h-16 w-16 border-r rounded-l-lg"
                />
                <p className="test-base w-32 mx-3 sm:text-2xl sm:w-64 my-auto sm:mx-6">
                    {rankSnackInfo.name}
                </p>
                <img
                    src={heart}
                    alt="いいね"
                    className="w-5 h-5 sm:w-8 sm:h-8 m-auto"
                />
                <p className="test-base w-6 mx-2 sm:text-2xl sm:w-12 my-auto sm:mx-4">
                    {rankSnackInfo.likes}
                </p>
            </div>
        </div>
    )
}
