import React, { useState } from "react";
import Login from "./components/auth/Login";
import CreateAccount from "./components/auth/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [showCreateAccount, setShowCreateAccount] = useState(true);

  const toggleComponent = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        {showCreateAccount ? <CreateAccount setShowCreateAccount={setShowCreateAccount} /> : <Login setShowCreateAccount={setShowCreateAccount} />}
      </div>
    </>
  );
}

export default App;
