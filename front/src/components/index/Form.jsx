import "../../styles/App.css";
import React from "react";
import { useState } from "react";



export const Form = () => {


    const [emotion, setEmotion] = useState("");
    const [price, setPrice] = useState(1000);

    const handleSubmit = ()=>{
        console.log(emotion,price);
    }

    return (
    <div className="max-w-5xl mx-auto">
        <div className="
                mx-auto
                text-center
                

                mt-14 sm:mt-20 md:mt-24 lg:mt-44 
                mx-3 sm:mx-16 md:mx-32 lg:mx-70 
                rounded-2xl 
                shadow-2xl
                "
        >
        <p className="
                font-bold text-white
                text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                py-4 md:py-6 lg:py-8 
                rounded-tl-xl rounded-tr-xl
                shadow-1xl
                main-color
            ">
            お菓子を見つける
        </p>


            <div className="formField text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 md:md-6 mt-8 sm:mt-10 md:mt-18 lg:mt-24 mx-2 sm:mx-3.5 md:mx-5 lg:mx-16">
                {/* 気分選択 */}
                <div className="px-1 md:px-9 sm:px-20 overflow-auto">
                    <div className="">

                        <div className="selectEmotion">
                            今の気持ち
                        </div>

                        <div>
                            <label>
                                <input 
                                    checked={emotion==="happy"}
                                    readOnly
                                    type="radio"
                                    name="option" 
                                    id="option1" 
                                    className="hidden peer" 
                                    onClick={()=>{setEmotion("happy")}}
                                />
                                <div className="
                                    peer-checked:bg-blue-300
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-2 px-4 my-4 text-3xl hover:bg-gray-100 peer-checked:bg-yellow-200
                                    "
                                >😄</div>
                            </label>
                        
                            <label>
                                <input 
                                    checked={emotion==="sad"}
                                    readOnly
                                    type="radio"
                                    name="option" 
                                    id="option1" 
                                    className="hidden peer" 
                                    onClick={()=>{setEmotion("sad")}}
                                />
                                <div className="
                                    peer-checked:bg-blue-300
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-2 px-4 my-4 text-3xl hover:bg-gray-100 peer-checked:bg-blue-300
                                    "
                                >😭</div>
                            </label>

                            <label>
                                <input 
                                    checked={emotion==="angry"}
                                    readOnly
                                    type="radio"
                                    name="option" 
                                    id="option1" 
                                    className="hidden peer" 
                                    onClick={()=>{setEmotion("angry")}}
                                />
                                <div className="
                                    peer-checked:bg-blue-300
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-2 px-4 my-4 text-3xl hover:bg-gray-100 peer-checked:bg-red-300
                                    "
                                >😡</div>
                            </label>

                            <label>
                                <input 
                                    checked={emotion==="normal"}
                                    readOnly
                                    type="radio"
                                    name="option" 
                                    id="option1" 
                                    className="hidden peer" 
                                    onClick={()=>{setEmotion("normal")}}
                                />
                                <div className="
                                    peer-checked:bg-blue-300
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-2 px-4 my-4 text-3xl hover:bg-gray-100 peer-checked:bg-green-300
                                    "
                                >😋</div>
                            </label>

                        </div>


                    </div>
                </div>

                {/* お菓子の上限金額 */}
                <div className="my-4 sm:my-6 md:my-4 lg:my-10">
                    <div className="">
                        <label className="">予算</label>
                    </div>
                    <div>

                            <div className="
                                peer-checked:bg-blue-300
                                flex flex-col w-full 
                                max-w-lg mx-auto 
                                text-center border-2 rounded-2xl border-gray-200 
                                py-2 px-4 my-4 text-3xl hover:bg-gray-100 peer-checked:bg-green-300
                                "
                            >
                            <input 
                                type="number" 
                                min="0" 
                                className="inputCost rounded-md border-black w-full text-center"
                                value={price}
                                onChange={(e)=>{setPrice(e.target.value)}}
                            />
                            </div>
                    </div>
                </div>
                <br/>
            </div>

            {/* submit button */}
            <div className="pb-4">
                <button 
                    type="submit"
                    onClick={handleSubmit}
                    className="
                        submit button rounded-md
                        md:font-semibold text-base 
                        md:text-xl lg:text-2x text-white focus:outline-none 
                        py-2 px-8
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
