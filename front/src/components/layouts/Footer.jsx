import "../../styles/App.css";
import twitter from "../../data/images/twitter_logo.png";
import github from "../../data/images/git-logo.jpg";
import mahiro from "../../data/images/mahiro.png";
import kengo from "../../data/images/kengo.png";
import mao from "../../data/images/mao.jpeg";
import kai from "../../data/images/kai.jpeg";
import hikari from "../../data/images/hikari.jpeg";
export const Footer = () => {

  return (
    <footer className="text-gray-600 title">
      <div className="container px-5 py-10 mx-auto">
        <footer className="text-center">

          <div className="w-full px-4">
            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">CREATORS &amp; CONTRIBUTORS</h2>

            <div className="py-2 text-gray-600 hover:text-gray-800 flex-col object-center">
              {/* mahiro */}
              <div className="flex justify-center gap-4 py-3">
                <div>
                  <img className="max-h-10 max-w-10 rounded-full" src={mahiro}></img>
                </div>
                <div className="py-2">mahiro72（Backend）</div>
                <div>
                  <a href="https://twitter.com/sino0042900">
                  <img className="max-h-10 max-w-10" src={twitter}></img>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/mahiro72">
                  <img className="max-h-10 max-w-10 rounded-full" src="https://images-ext-1.discordapp.net/external/XDdgWt7CNuE1HKb65ApWRvnOK6yPYPkQBkY8CQBD63Y/https/prtimes.jp/i/14901/40/ogp/d14901-40-386781-0.jpg"></img>
                  </a>
                </div>
             
              </div>

              {/* kengo */}
              <div className="flex justify-center gap-5 py-3">
                <div>
                  <img className="max-h-10 max-w-10 rounded-full" src={kengo}></img>
                </div>
                <div className="py-2">nisi0929（Frontend）</div>
                <div>
                  <a href="https://twitter.com/donennnn">
                  <img className="max-h-10 max-w-10" src={twitter}></img>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/nisi0929">
                  <img className="max-h-10 max-w-10 rounded-full" src={github}></img>
                  </a>
                </div>
              </div>

              {/* mao */}
              <div className="flex justify-center gap-4 py-3">
                <div>
                  <img className="max-h-10 max-w-10 rounded-full" src={mao}></img>
                </div>
                <div className="py-2">Meow520（Frontend）</div>
                <div>
                  <a href="https://twitter.com/cat_d_cis">
                  <img className="max-h-10 max-w-10" src={twitter}></img>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Meow520">
                  <img className="max-h-10 max-w-10 rounded-full" src={github}></img>
                  </a>
                </div>
              </div>
              
              {/* kai */}
              <div className="flex justify-center gap-4 py-3">
                <div>
                  <img className="max-h-10 max-w-10 rounded-full" src={kai}></img>
                </div>
                <div className="py-2">kai-0307（Backend）</div>
                <div>
                  <a href="https://twitter.com/midnightsun0307">
                  <img className="max-h-10 max-w-10" src={twitter}></img>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/kai-0307">
                  <img className="max-h-10 max-w-10 rounded-full" src={github}></img>
                  </a>
                </div>
              </div>

              {/* hikari */}
              <div className="flex justify-center gap-5 py-3">
                <div>
                  <img className="max-h-10 max-w-10 rounded-full" src={hikari}></img>
                </div>
                <div className="py-2">hikari-8（Frontend）</div>
                <div>
                  <a href="https://twitter.com/hikari_pint">
                  <img className="max-h-10 max-w-10" src={twitter}></img>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/hikari-8">
                  <img className="max-h-10 max-w-10 rounded-full" src={github}></img>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </footer>
      </div>
      <div className="footer mt-10">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-white text-xl font-semibold title">OKASHI OMIKUZI</span>
          </a>

          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 ">2022 Do'er —
            <a href="https://doer.vercel.app/" rel="doo'er_homepage" className="text-gray-600 ml-1 " target="_blank">@HomePage</a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500" href="https://mobile.twitter.com/du_doer">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div >
    </footer>

  );
};



