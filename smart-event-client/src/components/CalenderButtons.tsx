import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const CalenderButtons = (props: any) => {
  return (
    <div className="d-flex justify-content-center">
      <AddToCalendarButton 
        name={props.name}
        description={props.description}
        startDate={props.startDate}
        startTime={props.startTime}
        options={["Apple", "Google"]}
        location={props.location}
        endDate={props.endDate}
        endTime={props.endTime}
        timeZone="Asia/Jerusalem"
        organizer={props.organizer}
        lightMode="dark"
      ></AddToCalendarButton>
    </div>
  );
};

export default CalenderButtons;
