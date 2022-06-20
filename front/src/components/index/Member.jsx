import React from 'react'
import twitter from "../../data/images/twitter_logo.png";
import github from "../../data/images/git-logo.jpg";
import mahiro from "../../data/images/mahiro.png";
import kengo from "../../data/images/kengo.png";
import mao from "../../data/images/mao.jpeg";
import kai from "../../data/images/kai.jpeg";
import hikari from "../../data/images/hikari.jpeg";

const Member = () => {
  return (
    <div className="container px-5 py-10 my-30 mx-auto">
    <footer className="text-center">
      <div className="w-full px-4">
        <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">
          CREATORS &amp; CONTRIBUTORS
        </h2>

        <div className="py-2 text-gray-600 hover:text-gray-800 flex-col object-center">
          {/* mahiro */}
          <div className="flex justify-center py-3">
            <div className="px-2">
              <img
                className="max-h-10 max-w-10 rounded-full"
                src={mahiro}
              ></img>
            </div>
            <div className="py-2 w-52">mahiro72（Backend）</div>
            <div className="px-2">
              <a href="https://twitter.com/sino0042900">
                <img className="max-h-10 max-w-10" src={twitter}></img>
              </a>
            </div>
            <div className="px-2">
              <a href="https://github.com/mahiro72">
                <img
                  className="max-h-10 max-w-10 rounded-full mx-1/3"
                  src={github}
                ></img>
              </a>
            </div>
          </div>

          {/* kengo */}
          <div className="flex justify-center py-3">
            <div className="px-2">
              <img
                className="max-h-10 max-w-10 rounded-full"
                src={kengo}
              ></img>
            </div>
            <div className="py-2 w-52">nisi0929（Frontend）</div>
            <div className="px-2">
              <a href="https://twitter.com/donennnn">
                <img className="max-h-10 max-w-10" src={twitter}></img>
              </a>
            </div>
            <div className="px-2">
              <a href="https://github.com/nisi0929">
                <img
                  className="max-h-10 max-w-10 rounded-full"
                  src={github}
                ></img>
              </a>
            </div>
          </div>

          {/* mao */}
          <div className="flex justify-center py-3">
            <div className="px-2">
              <img
                className="max-h-10 max-w-10 rounded-full"
                src={mao}
              ></img>
            </div>
            <div className="py-2 w-52">Meow520（Frontend）</div>
            <div className="px-2">
              <a href="https://twitter.com/cat_d_cis">
                <img className="max-h-10 max-w-10" src={twitter}></img>
              </a>
            </div>
            <div className="px-2">
              <a href="https://github.com/Meow520">
                <img
                  className="max-h-10 max-w-10 rounded-full"
                  src={github}
                ></img>
              </a>
            </div>
          </div>

          {/* kai */}
          <div className="flex justify-center py-3">
            <div className="px-2">
              <img
                className="max-h-10 max-w-10 rounded-full"
                src={kai}
              ></img>
            </div>
            <div className="py-2 w-52">kai-0307（Backend）</div>
            <div className="px-2">
              <a href="https://twitter.com/midnightsun0307">
                <img className="max-h-10 max-w-10" src={twitter}></img>
              </a>
            </div>
            <div className="px-2">
              <a href="https://github.com/kai-0307">
                <img
                  className="max-h-10 max-w-10 rounded-full"
                  src={github}
                ></img>
              </a>
            </div>
          </div>

          {/* hikari */}
          <div className="flex justify-center py-3">
            <div className="px-2">
              <img
                className="max-h-10 max-w-10 rounded-full"
                src={hikari}
              ></img>
            </div>
            <div className="py-2 w-52">hikari-8（Frontend）</div>
            <div className="px-2">
              <a href="https://twitter.com/hikari_pint">
                <img className="max-h-10 max-w-10" src={twitter}></img>
              </a>
            </div>
            <div className="px-2">
              <a href="https://github.com/hikari-8">
                <img
                  className="max-h-10 max-w-10 rounded-full"
                  src={github}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Member