import React from "react";
import UserContextProvider from "../contexts/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <div>App</div>
    </UserContextProvider>
  );
};

export default App;
