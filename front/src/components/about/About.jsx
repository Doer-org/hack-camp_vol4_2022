import users from "../../data/users.json";
import "../../styles/about/About.css";
export const About = () => {
  return (
    <div className="text-center">
      <p className="text-xl lg:text-3xl font-bold md:my-20 my-10">About</p>

      <div className="mt-2 sm:mt-30 md:mt-25 lg:mt-50 ">
        <div className="shadow-2xl rounded-br-3xl rounded-3xl mx-2 my-2 lg:mx-28 ">
          <div className="main-color p-2 m-25 rounded-tl-3xl rounded-tr-3xl font-bold text-white md:text-xl ">
            {" "}
            作った経緯{" "}
          </div>
          <div className="p-4 ">
            お買い物でお菓子を買うとき、ただ選ぶのではなく、ちょっとひと工夫あれば面白いかなと思って作りました。
          </div>
          <div className="p-6 ">
            自分の感情からお菓子を提案したり、値段を決めてその金額内でいくつかお菓子を提案します。
          </div>
        </div>

        <div className="shadow-2xl rounded-3xl mt-10 mb-10 mx-2 my-2 lg:mx-28 ">
          <div className="main-color p-2 m-25 font-bold rounded-tl-3xl rounded-tr-3xl text-white md:text-xl ">
            Skills
          </div>
          <div className="p-4 ">
            Frontend：JavaScript, React, tailwind.css
            <br />
            Backend: Golang, Gin <br />
            その他：PostgreSQL, Docker, Heroku, Vercel
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-32 lg:mx-32 xl:mx-80"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-32 lg:mx-32 xl:mx-80 ">
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
                <a
                  href={`https://github.com/${user.name}`}
                  className="text-2xl font-medium lg:text-white "
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
