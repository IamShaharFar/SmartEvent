import CalenderButtons from "./CalenderButtons";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

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

const Input = () => {
  const props: EventDetails = {
    name: "Movie: Oppenheimer",
    description: "Planet - Rascheltz",
    startDate: "2023-07-27",
    startTime: "08:30",
    options: ["Apple", "Google"],
    location: "IMAX 5, Faradyan shahar",
    endDate: "2023-07-27",
    endTime: "11:00",
    timeZone: "Asia/Jerusalem",
    organizer: "Rascheltz Planet",
    lightMode: "dark",
  };

  const [message, setMessage] = useState("");
  const [details, setDetails] = useState<EventDetails | null>(props);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const apiUrl = "https://smart-event-server.onrender.com/";
      const response = await axios.post(apiUrl, {
        message: message,
      });

      setIsLoading(false);

      if (response.status === 400) {
        alert("You approached the limit of requests per day");
      } else {
        console.log(response.data);
        const event = JSON.parse(response.data.event);
        setDetails(event);
        console.log(event);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error calling API:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    prop: keyof EventDetails
  ) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [prop]: e.target.value,
    }));
  };

  return (
    <div className="input-container">
      <div className="centered-content">
        <h1 className="input-heading">
          This is an event management application that utilizes the AI to make a
          the add to calender procces much faster.
          <br />
          <br />
          Enter the invitation confirmation message:
        </h1>
        <textarea
          className="input-textarea"
          id="message"
          rows={10}
          value={message}
          maxLength={500}
          onChange={handleChange}
          placeholder="Please insert your event message"
        />
        <button className="input-button" onClick={handleSubmit}>
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Make an event"
          )}
        </button>
        {details && (
          <div className="details-container">
            <p>{details.startDate}</p>
            <div className="detail">
              <span className="detail-label">Name:</span>
              <input
                className="detail-input"
                value={details.name || ""}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">Description:</span>
              <input
                className="detail-input"
                value={details.description || ""}
                onChange={(e) => handleInputChange(e, "description")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">Start Date:</span>
              <input
                className="detail-input"
                value={details.startDate || ""}
                onChange={(e) => handleInputChange(e, "startDate")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">Start Time:</span>
              <input
                className="detail-input"
                value={details.startTime || ""}
                onChange={(e) => handleInputChange(e, "startTime")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">Location:</span>
              <input
                className="detail-input"
                value={details.location || ""}
                onChange={(e) => handleInputChange(e, "location")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">End Date:</span>
              <input
                className="detail-input"
                value={details.endDate || ""}
                onChange={(e) => handleInputChange(e, "endDate")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">End Time:</span>
              <input
                className="detail-input"
                value={details.endTime || ""}
                onChange={(e) => handleInputChange(e, "endTime")}
              />
            </div>
            <div className="detail">
              <span className="detail-label">Organizer:</span>
              <input
                className="detail-input"
                value={details.organizer || ""}
                onChange={(e) => handleInputChange(e, "organizer")}
              />
            </div>
          </div>
        )}
        <CalenderButtons {...details} />
      </div>
    </div>
  );
};

export default Input;
