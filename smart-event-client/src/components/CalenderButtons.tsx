import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";

interface EventDetails {
  name?: string;
  description?: string;
  startDate?: string;
  startTime?: string;
  options?: any;
  location?: string;
  endDate?: string;
  endTime?: string;
  timeZone?: string;
  organizer?: string;
  lightMode?: string;
}

const CalenderButtons = (props: EventDetails) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="add-to-calender-btn">
        <AddToCalendarButton
          name={props.name}
          options={["Apple", "Google"]}
          location={props.location}
          startDate={props.startDate}
          endDate={props.endDate}
          startTime={props.startTime}
          endTime={props.endTime}
          timeZone="Asia/Jerusalem"
          lightMode="dark"
          buttonStyle="round"
          size="8"
          label="Hit me to save!"
        ></AddToCalendarButton>
      </div>
    </div>
  );
};

export default CalenderButtons;
