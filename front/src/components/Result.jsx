import "../App.css";
export const Result = () => {
  return (
  //omikuzi
  <>
      {/* omikuzi results */}
      <section class="text-black flex justify-center mt-10 md:mt-10 lg:mt-20 mx-10 md:mx-40 lg:mx-80 overflow-auto">
        <div class="container px-5 py-4 mx-auto border-8 shadow-2xl rounded-md results">
          <div class="text-center">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold">大吉</h1> 
            <p class="text-base lg:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt.</p>
          </div>

        </div>
        
      </section>

      {/* okashi results */}
      <section class="text-black">
        <div class="container sm:px-5 sm:py-24 mx-auto">
          <div class="flex flex-col sm:flex-col md:flex-warp lg:flex-row">

            {/* first column */}

            <div class="p-4 flex-1">
              <div class="h-full border-4 border-black border-opacity-50 rounded-2xl overflow-auto">
                <img class="max-w-3xl max-h-48 lg:h-52 md:h-40 w-full object-cover object-center border-b-4 border-black border-opacity-50" src="https://source.unsplash.com/random" />
                <div class="p-2 sm:p-6">
                  <h1 class="title-font text-2xl lg:text-4xl font-medium text-gray-900 text-center">Name</h1>
                  <h2 class="tracking-widest text-lg lg:text-2xl title-font font-medium text-gray-700 text-center">Cost</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem qui, nisi, vitae, laboriosam quas odio velit quam non minus quo laborum. Pariatur dolorum architecto, neque suscipit corporis fugit id dolorem!</p>
                </div>
              </div>
            </div>

          {/* second column */}
          <div class="p-4 flex-1">
            <div class="h-full border-4 border-black border-opacity-50 rounded-2xl overflow-auto">
              <img class="max-w-3xl max-h-48 lg:h-52 md:h-40 w-full object-cover object-center border-b-4 border-black border-opacity-50" src="https://source.unsplash.com/random" />
              <div class="p-2 sm:p-6">
                <h1 class="title-font text-2xl lg:text-4xl font-medium text-gray-900 text-center">Name</h1>
                <h2 class="tracking-widest text-lg lg:text-2xl title-font font-medium text-gray-700 text-center">Cost</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure vitae laudantium animi dolore ipsa accusantium qui? Possimus accusamus necessitatibus, molestiae dolorem voluptatum earum et nam asperiores repellat ut deleniti!</p>
              </div>
            </div>
          </div>

          {/* third column*/}

          <div class="p-4 flex-1">
            <div class="h-full border-4 border-black border-opacity-50 rounded-2xl overflow-auto">
              <img class="max-w-3xl max-h-48 lg:h-52 md:h-40 w-full object-cover object-center border-b-4 border-black border-opacity-50" src="https://source.unsplash.com/random" />
              <div class="p-2 sm:p-6">
                <h1 class="title-font text-2xl lg:text-4xl font-medium text-gray-900 text-center">Name</h1>
                <h2 class="tracking-widest text-lg lg:text-2xl title-font font-medium text-gray-700 text-center">Cost</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid molestiae praesentium corrupti nisi at! Optio, nulla ut. A similique laborum aut unde aspernatur eveniet voluptatibus earum tempora! Ducimus, perspiciatis doloribus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
  </>
  );
};


