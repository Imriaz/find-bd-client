import React from "react";
import moment from "moment-timezone";

const Timezone = () => {
  const [JPTime, setJPTime] = React.useState(moment().tz("JAPAN"));
  const [USATime, setUSATime] = React.useState(
    moment().tz("America/Los_Angeles")
  );
  const [ESTTime, setESTTime] = React.useState(moment().tz("EST"));

  const timeZone = () => {
    setJPTime(moment().tz("JAPAN"));
    setUSATime(moment().tz("America/Los_Angeles"));
    setESTTime(moment().tz("EST"));
  };

  React.useEffect(() => {
    setInterval(() => timeZone(), 1000);
  }, []);

  return (
    <div className="timezone">
      <p>Japan - {JPTime.format("h:mm a")}</p>
      <p>USA - {USATime.format("h:mm a")}</p>
      <p>EST - {ESTTime.format("h:mm a")}</p>
    </div>
  );
};

export default Timezone;
