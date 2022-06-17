import { Link as Scroll } from 'react-scroll';

export const HeadHighlight = () => {
  return <div className="text-center">
      <Scroll to="home" smooth={true} duration={800} offset={10}
      className="bg-white rounded px-4 py-3 font-medium mb-6 border border-gray-900 text-xs sm:text-base sm:px-6 sm:py-4">
        今すぐお菓子に出会う
      </Scroll>
  </div>;
};
