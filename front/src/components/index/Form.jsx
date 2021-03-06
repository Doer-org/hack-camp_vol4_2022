import "../../styles/App.css";
import React from "react";
export const Form = ({
  handleSubmit,
  emotion,
  price,
  setEmotion,
  setPrice,
}) => {
  return (
    <div className="lg:max-w-5xl w-full mx-auto">
      <div
        className="
                text-center
                mt-14 sm:mt-20 md:mt-24 lg:mt-5 mx-3 md:mx-16 lg:mx-28
                rounded-2xl 
                shadow-2xl
                "
      >
        <p
          className="
                font-bold text-white
                text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                py-4 md:py-6 lg:py-8 
                rounded-tl-xl rounded-tr-xl
                shadow-1xl
                main-color
            "
        >
          お菓子を見つける
        </p>

        <div className="formField text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 md:md-6 mt-8 sm:mt-10 md:mt-18 lg:mt-24 mx-2 sm:mx-3.5 md:mx-5 lg:mx-16">
          {/* 気分選択 */}
          <div className="px-1 md:px-9 sm:px-20 overflow-auto">
            <div className="">
              <div className="selectEmotion">今の気持ち</div>

              <div>
                <label>
                  <input
                    checked={emotion === "happy"}
                    readOnly
                    type="radio"
                    name="option1"
                    id="option1"
                    className="hidden peer"
                    onClick={() => {
                      setEmotion("happy");
                    }}
                  />
                  <div
                    className="
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    lg:py-2 lg:px-4 my-4 sm:text-3xl hover:bg-gray-100 peer-checked:bg-yellow-200
                                    "
                  >
                    😄
                  </div>
                </label>

                <label>
                  <input
                    checked={emotion === "sad"}
                    readOnly
                    type="radio"
                    name="option1"
                    id="option1"
                    className="hidden peer"
                    onClick={() => {
                      setEmotion("sad");
                    }}
                  />
                  <div
                    className="
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                   lg:py-2 lg:px-4 my-4 sm:text-3xl hover:bg-gray-100 peer-checked:bg-blue-300
                                    "
                  >
                    😭
                  </div>
                </label>

                <label>
                  <input
                    checked={emotion === "angry"}
                    readOnly
                    type="radio"
                    name="option1"
                    id="option1"
                    className="hidden peer"
                    onClick={() => {
                      setEmotion("angry");
                    }}
                  />
                  <div
                    className="
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    lg:py-2 lg:px-4 my-4 sm:text-3xl hover:bg-gray-100 peer-checked:bg-red-300
                                    "
                  >
                    😡
                  </div>
                </label>

                <label>
                  <input
                    checked={emotion === "normal"}
                    readOnly
                    type="radio"
                    name="option1"
                    id="option1"
                    className="hidden peer"
                    onClick={() => {
                      setEmotion("normal");
                    }}
                  />
                  <div
                    className="
                                    flex flex-col w-full 
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    lg:py-2 lg:px-4 my-4 sm:text-3xl hover:bg-gray-100 peer-checked:bg-green-300
                                    "
                  >
                    😋
                  </div>
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
              <div
                className="
                                flex flex-col w-3/4
                                max-w-md mx-auto
                                text-center border-2 rounded-2xl border-gray-200 
                                sm:text-3xl hover:bg-gray-100 peer-checked:bg-green-300
                                "
              >
                <input
                  type="number"
                  min="0"
                  className="inputCost border-black py-2 px-4 w-full flex text-center rounded-2xl"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <br className="md:hidden" />
            <div className="md:justify-center w-full border-y-4 md:border-0 md:flex">
              <label className="mx-1">
                <input
                  readOnly
                  type="radio"
                  name="option2"
                  id="option2"
                  className="hidden peer"
                  onClick={() => {
                    setPrice(500);
                  }}
                />
                <div
                  className="
                                    flex flex-col w-1/2 md:w-full
                                    max-w-lg m-auto
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-1 px-4 sm:my-1 text-xl hover:bg-gray-100 
                                    "
                >
                  500
                </div>
              </label>

              <label className="mx-1">
                <input
                  readOnly
                  type="radio"
                  name="option2"
                  id="option2"
                  className="hidden peer"
                  onClick={() => {
                    setPrice(1000);
                  }}
                />
                <div
                  className="
                                    flex flex-col w-1/2 md:w-full
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-1 px-4 sm:my-1 text-xl hover:bg-gray-100
                                    "
                >
                  1000
                </div>
              </label>

              <label className="mx-1">
                <input
                  readOnly
                  type="radio"
                  name="option2"
                  id="option2"
                  className="hidden peer"
                  onClick={() => {
                    setPrice(1500);
                  }}
                />
                <div
                  className="
                                    flex flex-col w-1/2 md:w-full
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-1 px-4 sm:my-1 text-xl hover:bg-gray-100
                                    "
                >
                  1500
                </div>
              </label>

              <label className="mx-1">
                <input
                  readOnly
                  type="radio"
                  name="option2"
                  id="option2"
                  className="hidden peer"
                  onClick={() => {
                    setPrice(2000);
                  }}
                />
                <div
                  className="
                                    flex flex-col w-1/2 md:w-full
                                    max-w-lg mx-auto 
                                    text-center border-2 rounded-2xl border-gray-200 
                                    py-1 px-4 sm:my-1 text-xl hover:bg-gray-100
                                    "
                >
                  2000
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* submit button */}
        <div className="pb-4">
          <button
            type="submit"
            onClick={() => {
              handleSubmit(price, emotion);
            }}
            className="
            main-color
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
