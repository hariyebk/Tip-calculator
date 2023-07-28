import { useState, React } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  // Drived state
  const tip = myTip + friendTip;
  const options = (
    <>
      <option value={0}> Dissatisfied (0%) </option>
      <option value={0.05}> It was okay (5%) </option>
      <option value={0.1}> It was good (10%) </option>
      <option value={0.2}> Absolutley amazing (20%) </option>
    </>
  );

  return (
    <div>
      <Bill bill={bill} onBill={setBill} /> &nbsp;
      <Me tip={myTip} onTip={setMyTip} options={options}>
        {" "}
        How did you like the service ?{" "}
      </Me>
      &nbsp;
      <Friend tip={friendTip} onTip={setFriendTip} options={options}>
        {" "}
        How did your friend liked the service ?{" "}
      </Friend>
      &nbsp;
      <Display bill={bill} tip={tip} /> &nbsp;
      <Reset onBill={setBill} onMyTip={setMyTip} onFriendTip={setFriendTip} />
    </div>
  );
}
function Bill({ bill, onBill }) {
  return (
    <div>
      How much was the bill ?{" "}
      <input
        type="number"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      />
    </div>
  );
}
function Me({ tip, onTip, children, options }) {
  return (
    <div>
      <label> {children} </label>
      <select value={tip} onChange={(e) => onTip(+e.target.value)}>
        {options}
      </select>
    </div>
  );
}
function Friend({ tip, onTip, children, options }) {
  return (
    <div>
      <label> {children} </label>
      <select value={tip} onChange={(e) => onTip(+e.target.value)}>
        {options}
      </select>
    </div>
  );
}
function Display({ bill, tip }) {
  const totaltip = Math.round(bill * tip);
  const totalbill = Math.round(bill + tip);
  const t = Math.round(totaltip / 2);
  return (
    <div>
      {bill && (
        <h1>
          {" "}
          You pay ${totalbill} ( {`$${bill} + $${t} tip`} )
        </h1>
      )}
    </div>
  );
}
function Reset({ onBill, onMyTip, onFriendTip }) {
  const handleReset = () => {
    onBill("");
    onMyTip(0);
    onFriendTip(0);
  };
  return <button onClick={handleReset}> Reset </button>;
}
