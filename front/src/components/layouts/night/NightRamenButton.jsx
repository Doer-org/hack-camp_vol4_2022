import { Link } from "react-router-dom";

export const NightRamenButton = () => {
  return (
    <div className="text-center mt-10 mb-0">
      <Link
        to="/"
        className="
                lg:mt-12 mt-6
                shadow-lg 
                lg:px-6 lg:py-4 px-3 py-3
                bg-slate-800
                text-base md:text-lg text-white font-semibold 
                rounded  hover:bg-slate-600 hover:shadow-sm hover:translate-y-0.5
                transform transition
            "
      >
        ラーメンが呼んでいる🍜🍜
      </Link>
    </div>
  );
};
