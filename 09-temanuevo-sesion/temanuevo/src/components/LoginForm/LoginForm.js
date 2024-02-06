import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <div>
          <labe htmlFor="username"> Username</labe>
          <input id="username" name="username" />
        </div>
        <div>
          <label htmlFor="passwrod"> password</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};
