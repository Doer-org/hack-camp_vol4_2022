import "../App.css";
import React from "react";
import { useState } from "react";



export const Form = () => {

  const [emotion, setEmotion] = useState("");
  const [money, setMoney] = useState(0);

  const handleEmotion = (e) => {
    setEmotion(e.target.value);
  }

  const handleMoney = (e) => {
    setMoney(e.target.value);
    if (e.target.value < 0) {
      setMoney(0)
    }
  }

  const handleSubmit = () => {
    console.log(`emotion:${emotion} money:${money}`);
  }


  return (
    <>
      <div className="text-center mt-14 sm:mt-20 md:mt-24 lg:mt-44 mx-3 sm:mx-16 md:mx-32 lg:mx-70 border-4 rounded-2xl border-black border-opacity-70">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl py-4 md:py-6 lg:py-8 rounded-tl-xl rounded-tr-xl border-black border-opacity-70 border-b-4 main-color">お菓子を見つける</p>


        <div className="formField text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:md-6 mt-8 sm:mt-10 md:mt-18 lg:mt-24 mx-2 sm:mx-3.5 md:mx-5 lg:mx-16">
          {/* 気分選択 */}
          <div className="px-1 md:px-9 sm:px-20 overflow-auto">
            <div className="grid grid-cols-2 gap-4">

              <div className="selectEmotion text-left pb-4">
                今の気持ち
              </div>

              <div>
              <select size="4" className="emotion text-center rounded-md border-2 border-black w-full" value={emotion} onChange={handleEmotion}>
                {/* <option value="" className="selected"></option> */}
                <option value="nomal" className="selected">普通</option>
                <option value="joy" className="selected">楽しい</option>
                <option value="sad" className="selected">悲しい</option>
                <option value="angry" className="selected">怒り</option>
              </select>
              </div>
            </div>

            {/* お菓子の上限金額 */}
            <div className="grid grid-cols-2 gap-4 my-2 sm:my-6 md:my-10 lg:my-20">
              <div className="text-left">
              <label className="number_button">お菓子の総金額</label>
              </div>
              <div>
              <input type="number" min="0" className="inputCost border-2 rounded-md border-black w-full text-right" value={money} onChange={handleMoney}
              />
              </div>
            </div>
            <br />
          </div>

          {/* submit button */}
          <>
            <button type="submit" onClick={handleSubmit} className="submit button border-2 rounded-md md:font-semibold border-black text-base md:text-xl lg:text-2x text-white focus:outline-none py-2 px-8 hover:bg-yellow-300" value="Submit" id="submit_bg">見つける</button>
          </>
        </div>
      </div>
    </>
  );
};
