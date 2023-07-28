import CalenderButtons from "./CalenderButtons";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

interface EventDetails {
  name?: string;
  description?: string;
  startDate?: string;
  startTime?: string;
  location?: string;
  endDate?: string;
  endTime?: string;
  organizer?: string;
}

const Input = () => {
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState<EventDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const apiUrl = "http://localhost:5000";
      const response = await axios.post(apiUrl, {
        message: message,
      });

      setIsLoading(false);

      // Check if the response status is 400 and show an alert
      if (response.status === 400) {
        alert("You approached the limit of requests per day");
      } else {
        console.log(response.data);
        const event = response.data.event;
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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="form-group">
            <h1>Enter the invitation confirmation message:</h1>
            <textarea
              className="form-control"
              id="message"
              rows={4}
              value={message}
              onChange={handleChange}
              placeholder="Please insert your event message"
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
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
            <div>
              <div>
                <span>Name: </span>
                <input
                  value={details.name || ""}
                  onChange={(e) => handleInputChange(e, "name")}
                />
              </div>
              <div>
                <span>Description: </span>
                <input
                  value={details.description || ""}
                  onChange={(e) => handleInputChange(e, "description")}
                />
              </div>
              <div>
                <span>StartDate: </span>
                <input
                  value={details.startDate || ""}
                  onChange={(e) => handleInputChange(e, "startDate")}
                />
              </div>
              <div>
                <span>StartTime: </span>
                <input
                  value={details.startTime || ""}
                  onChange={(e) => handleInputChange(e, "startTime")}
                />
              </div>
              <div>
                <span>Location: </span>
                <input
                  value={details.location || ""}
                  onChange={(e) => handleInputChange(e, "location")}
                />
              </div>
              <div>
                <span>EndDate: </span>
                <input
                  value={details.endDate || ""}
                  onChange={(e) => handleInputChange(e, "endDate")}
                />
              </div>
              <div>
                <span>EndTime: </span>
                <input
                  value={details.endTime || ""}
                  onChange={(e) => handleInputChange(e, "endTime")}
                />
              </div>
              <div>
                <span>Organizer: </span>
                <input
                  value={details.organizer || ""}
                  onChange={(e) => handleInputChange(e, "organizer")}
                />
              </div>
            </div>
          )}
          <CalenderButtons {...details} />
        </div>
      </div>
    </div>
  );
};

export default Input;
