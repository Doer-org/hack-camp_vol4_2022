import users from "../../../data/users.json";
import "../../../styles/about/NightAbout.css";

export const NightAbout = () => {
  return (
    <div className="text-center">
      <p className="text-xl text-white lg:text-3xl font-bold md:my-20 my-10">
        About
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-32 lg:mx-32 xl:mx-80 ">
        {users.map((user, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center rounded-2xl shadow-slate-300 shadow-lg m-5 md:m-10 md:p-10 p-5 break-all oneArea-Night"
            >
              <img
                src={user.image}
                alt="user_image"
                className="w-1/2 rounded-2xl justify-items-center"
              />
              <div>
                <a
                  href={`https://github.com/${user.name}`}
                  className="text-3xl font-medium lg:text-white"
                >
                  {user.name}
                </a>
                <p className="text-sm my-5 md:text-base">{user.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
