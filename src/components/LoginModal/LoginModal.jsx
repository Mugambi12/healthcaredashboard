import { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ onLogin, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = btoa(`${username}:${password}`);
    onLogin(credentials);
  };

  return (
    <div className="login-modal">
      {loginError && <p className="error-message">{loginError}</p>}

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginModal;
