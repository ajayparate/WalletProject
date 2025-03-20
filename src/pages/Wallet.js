import React, { useState } from "react";
import WalletForm from "../components/Walletform";
import WalletBalance from "../components/WalletBalance";

const Wallet = () => {
  const [username, setUsername] = useState("");  // Track username input
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);
  const [isValidUser, setIsValidUser] = useState(false);  // Check user validation

  // Function to check if the username exists in the database
  const checkUsername = async () => {
    try {
      const response = await fetch(`http://localhost:8080/wallet/${username}/exists`);
      const exists = await response.json();
      
      if (exists) {
        setIsValidUser(true);
        setError(null);
        fetchBalance(); // Fetch balance if user is valid
      } else {
        setError("User does not exist!");
        setIsValidUser(false);
      }
    } catch (err) {
      setError("Error checking username. Please try again.");
      setIsValidUser(false);
    }
  };

  // Fetch the user's balance
  const fetchBalance = async () => {
    try {
      const response = await fetch(`http://localhost:8080/wallet/${username}/balance`);
      const balance = await response.json();
      setBalance(balance);
    } catch (err) {
      setError("Error fetching balance.");
    }
  };

  // Function to add money if user exists
  const addMoney = async (amount) => {
    if (!isValidUser) {
      setError("Invalid user. Please check the username first.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/wallet/${username}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("Transaction failed!");
      }

      const newBalance = await response.json();
      setBalance(newBalance);
      setError(null);
    } catch (err) {
      setError("Error processing transaction.");
    }
  };

  return (
    <div>
      <h2>Wallet System</h2>
      
      {/* Username Input & Validation */}
      <div>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={checkUsername}>Validate</button>
      </div>

      {/* Show error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show balance only if user is valid */}
      {isValidUser && (
        <>
          <WalletBalance balance={balance} />
          <WalletForm addMoney={addMoney} />
        </>
      )}
    </div>
  );
};

export default Wallet;
