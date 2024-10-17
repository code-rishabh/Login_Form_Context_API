import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import Logo from "./Logo";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };

  return (
    <div className="container mx-auto w-full min-h-screen flex flex-col items-center justify-center bg-zinc-800 text-4xl space-y-10 font-bold ">
      <Logo />

      <div className="text-zinc-100 flex w-[60%] h-32 hover:shadow-xl hover:shadow-black hover:bg-neutral-700 bg-zinc-900 font-black rounded-xl items-center justify-center transition-all duration-500">
        <h1>Login to your Account</h1>
      </div>
      <input
        className=" transition-all duration-500 hover:shadow-black hover:shadow-2xl rounded-lg p-5 bg-gray-300 text-zinc-700 outline-none"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        className="rounded-lg transition-all duration-500 hover:shadow-black hover:shadow-2xl  p-5 bg-gray-300 text-zinc-700 outline-none"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button
        className="h-28 w-40 text-zinc-200 hover:bg-zinc-400 hover:text-neutral-900 hover:font-black hover:shadow-black hover:shadow-xl bg-neutral-900 rounded-2xl transition-all duration-500"
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
