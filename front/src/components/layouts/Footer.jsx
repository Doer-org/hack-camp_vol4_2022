import "../../styles/App.css";
export const Footer = () => {
  return (
    <footer className="text-gray-600 title bg-gray-50 shadow-inner">
      <div className="footer">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-white text-xl font-semibold title">
              OKASHI OMIKUZI
            </span>
          </a>

          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 ">
            2022 Do'er —
            <a
              href="https://doer.vercel.app/"
              rel="doo'er_homepage"
              className="text-gray-600 ml-1 "
              target="_blank"
            >
              @HomePage
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href="https://mobile.twitter.com/du_doer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
