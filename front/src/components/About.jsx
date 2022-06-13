import users from "../data/users.json";
import "../About.css";
export const About = () => {
  return (
    <div className="text-center">
      <p className="text-xl lg:text-3xl font-bold md:my-20 my-10">About</p>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-20 lg:mx-40 ">
        {users.map((user, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center rounded-2xl shadow-2xl m-5 md:m-10 md:p-10 p-5 break-all oneArea"
            >
              <img
                src={user.image}
                alt="user_image"
                className="w-1/2 rounded-2xl justify-items-center"
              />
              <div>
                <a href={`https://github.com/${user.name}`}>{user.name}</a>
                <p className=" text-sm">{user.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
