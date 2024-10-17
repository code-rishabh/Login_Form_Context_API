import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="container mx-auto w-full min-h-screen text-zinc-400 flex flex-col items-center justify-center bg-neutral-800 text-4xl space-y-10 font-bold ">
        Please Login
      </div>
    );

  return (
    <div className="container mx-auto w-full min-h-screen text-zinc-400 flex flex-col items-center justify-center bg-neutral-800 text-4xl space-y-10 font-bold ">
      WELCOME WELCOME WELCOME
      <div className="uppercase ">{user.Username}</div>
      <img
      className="size-96 rounded-full shadow-2xl shadow-black" src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Eliza" alt="" />
    </div>
  );
};

export default Profile;
