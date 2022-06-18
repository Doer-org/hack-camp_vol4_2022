import "../../../styles/App.css";
export const NightResult = () => {
  return (
    //omikuzi
    <>
      {/* omikuzi results */}
      <section className="text-black flex justify-center mt-10 md:mt-10 lg:mt-20 mx-10 md:mx-40 lg:mx-80 overflow-auto z-10">
        <div className="container px-5 py-4 mx-auto border-8 shadow-2xl rounded-md bg-white result-night">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">大吉</h1>
            <p className="text-base lg:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              sunt.
            </p>
          </div>
        </div>
      </section>

      {/* okashi results */}
      <section className="text-gray-900 z-10">
        <div className="container sm:px-5 sm:py-24 mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-col md:flex-warp lg:flex-row">
            <div className="p-4 flex-1 ">
              <div className="h-full border-4 border-slate-600 rounded-2xl overflow-auto bg-white">
                <img
                  className="max-w-3xl max-h-48 lg:h-52 md:h-40 w-full object-cover object-center border-b-4 border-slate-600"
                  src="https://source.unsplash.com/random"
                />
                <div className="p-2 sm:p-6 ">
                  <h1 className="title-font text-2xl lg:text-4xl font-medium text-gray-900 text-center">
                    Name
                  </h1>
                  <h2 className="tracking-widest text-lg lg:text-2xl title-font font-medium text-gray-700 text-center pb-2">
                    Cost
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem qui, nisi, vitae, laboriosam quas odio velit quam non
                    minus quo laborum. Pariatur dolorum architecto, neque
                    suscipit corporis fugit id dolorem!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
