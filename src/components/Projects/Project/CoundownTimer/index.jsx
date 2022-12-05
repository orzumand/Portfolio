import React, { useEffect, useState } from "react";

import { Container } from "./style";

const Timer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const [Time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const newYears = `${month} ${day}, ${year} 23:59:0`;
  const newYearDate = new Date(newYears);
  const TotalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(TotalSeconds / 3600 / 24);
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const minutes = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;
  useEffect(() => {
    const TimeId = setInterval(() => {
      setTime(`${days}day,${hours}hours,${minutes}minutes,${seconds}seconds`);
    }, 1000);
    return function cleeanup() {
      clearInterval(TimeId);
    };
  });
  const onSelect = (e) => {
    setMonth(e.target.value);
  };
  const onChange = (e) => {
    if (e.target.value > 0 && e.target.value <= 31) {
      setDay(e.target.value);
    }
  };
  return (
    <Container>
      <h1>{Time}</h1>
      {year}

      <label>Choose a Month:</label>
      <select
        defaultValue={"Choose"}
        onChange={(e) => onSelect(e)}
        id="month"
        name="Months"
      >
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <input type="number" onChange={(e) => onChange(e)} />
      <h2>{day}</h2>
      <h2>{month}</h2>
    </Container>
  );
};

export default Timer;
