import React, { useState } from "react";

const LikeContext = React.createContext({ name: null });

export const LikeContextProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const switchLike = () => {};

  const getLike = () => {
    return true;
  };
  return (
    <LikeContext.Provider value={{ switchLike, getLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeContext;
