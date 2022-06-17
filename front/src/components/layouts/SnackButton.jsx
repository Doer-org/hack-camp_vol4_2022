import { Link as Scroll } from 'react-scroll';

export const SnackButton = () => {
  return <div className="text-center">
      <Scroll 
        to="home" 
        smooth={true} 
        duration={800} 
        offset={10}
        style={{
            "color":"white"
        }}
      >
        <button
            className='
                lg:mt-12 mt-6
                shadow-lg 
                lg:px-6 lg:py-4 px-3 py-3
                bg-blue-400
                text-lg text-white font-semibold 
                rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5
                transform transition
            '
        >
            今すぐお菓子に出会う🍪🍩
        </button>
      </Scroll>
  </div>;
};
