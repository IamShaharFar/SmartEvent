import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "add-to-calendar-button";
import CalenderButtons from "./components/CalenderButtons";
import Input from "./components/Input";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    document.title = 'Smart Event';
  }, []);

  const randomProps = {
    name: "Soccer Match",
    description: "A friendly soccer match with friends.",
    startDate: "2023-08-10",
    startTime: "14:00",
    options: ["Apple", "Google"],
    location: "City Park Soccer Field",
    endDate: "2023-08-10",
    endTime: "16:00",
    timeZone: "Asia/Jerusalem",
    organizer: "John Doe",
  };

  return (
    <div className="App">
      <script
        src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2"
        async
        defer
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      ></link>
      <script src="https://kit.fontawesome.com/199ad8a260.js" crossOrigin="anonymous"></script>
      <Header />
      <Hero />
      <Input />
      <Footer />
      {/* <CalenderButtons {...randomProps} /> */}
    </div>
  );
}

export default App;
