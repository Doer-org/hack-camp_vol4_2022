import users from "../data/users.json";
import "../App.css";
export const About = () => {
  return (
    <div className="text-center">
      <p className="text-xl lg:text-3xl font-bold my-20">About</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:mx-60">
        {users.map((user, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center rounded-2xl shadow-lg lg:m-10 md:p-10 p-5 break-all"
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
