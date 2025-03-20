import React, { useState } from "react";

const Walletform = ({ addMoney }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMoney(parseFloat(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
      />
      <button type="submit">Add Money</button>
    </form>
  );
};

export default Walletform;
