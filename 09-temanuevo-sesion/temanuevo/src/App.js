import React, { useContext } from "react";
const UserContext = React.createContext({ name: null });

function App() {
  return (
    <UserContext.Provider value={{ name: null }}>
      <div className="App">
        hello koders
        <HomePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;

const HomePage = () => {
  const user = useContext(UserContext);
  return <div>Home Page</div>;
};
