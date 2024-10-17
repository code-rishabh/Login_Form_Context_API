import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="flex">
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  );
}

export default App;
