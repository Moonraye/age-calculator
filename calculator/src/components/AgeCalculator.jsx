import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdayDate = new Date(birthDate);
    let age = today.getFullYear() - birthdayDate.getFullYear();
    const monthDifference = today.getMonth() - birthdayDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };
  const resetCalculator = () => {
    setBirthDate("");
    setAge(0);
  };
  return (
    <>
      <div className="age-calculator-container flex w-1/2 justify-evenly border-2 p-4 rounded-3xl bg-white shadow-lg text-black gap-4">
        <div className="right border-r-2 w-1/2 justify-left text-left">
          <div>
            <h4>Enter your birth date:</h4>
            <input
              className="bg-slate-300 text-center w-1/2 border-2 rounded-2xl p-2 mt-2"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <div className=" flex flex-col gap-4 mt-4">
              <button
                className="border-2 rounded-2xl bg-slate-300 w-1/2"
                onClick={calculateAge}
              >
                Calculate your Age
              </button>
              <button
                className="border-2 rounded-2xl bg-slate-300 w-1/2"
                onClick={resetCalculator}
              >
                Reset Calculator
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="left w-1/2 text-left">
          <div>
            <h1 className="text-lg">Your age in: </h1>
            <hr className="border-0.5 border-black" />
            <h1>Years: {age > 0 ? `${age}` : ""}</h1>
            <h1>Months: {age > 0 ? `${age * 12}` : ""}</h1>
            <h1>Weeks: {age > 0 ? `${age * 52}` : ""}</h1>
            <h1>Days: {age > 0 ? `${age * 365}` : ""}</h1>
            <h1>Hours: {age > 0 ? `${age * 365 * 24}` : ""}</h1>
            <h1>Minutes: {age > 0 ? `${age * 365 * 24 * 60}` : ""}</h1>
            <h1>Seconds: {age > 0 ? `${age * 365 * 24 * 60 * 60}` : ""}</h1>
            <h1>
              Milliseconds:{age > 0 ? `${age * 365 * 24 * 60 * 60 * 1000}` : ""}
            </h1>
          </div>
        </div>
      </div>``
    </>
  );
};

export default AgeCalculator;
