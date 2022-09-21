import React, { useState } from "react";

const LikeContext = React.createContext({ name: null });

export const LikeContextProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const switchLike = (id) => {
    if (likes[id]) {
      const newLikes = { ...likes };
      newLikes[id] = undefined;
      setLikes(newLikes);
    } else {
      setLikes({ ...likes, [id]: true });
    }
  };

  const getLike = (id) => {
    return likes[id];
  };
  return (
    <LikeContext.Provider value={{ switchLike, getLike, likes }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeContext;
