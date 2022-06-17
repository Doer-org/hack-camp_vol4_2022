import snack from "../../images/snack.jpeg";
import heart from "../../images/heart.png";

import React from 'react'

const Snack = ({snackInfo}) => {
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
            <img
                src={heart}
                alt="いいね"
                className="w-5 h-5 sm:w-8 sm:h-8 m-auto"
            />
            <p className="test-base w-6 mx-2 sm:text-2xl sm:w-12 my-auto sm:mx-4">
                {snackInfo.likes}
            </p>
        </div>
    </div>
  )
}

export default Snack