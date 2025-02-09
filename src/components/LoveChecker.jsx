import { useState } from "react";
import LoveCard from "./LoveCard";
import axios from "axios";

const LoveChecker = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, gender } = formData;

    if (!name || !age || !gender) {
      setMessage("Please fill all fields!");
      return;
    }

    if (gender === "male") {
      setMessage("I'm not a gay man!! 🚫 ");
      return;
    }

    if (gender === "female" && (age < 18 || age > 40)) {
      setMessage("Sorry apu, you are not capable for me! 🙅‍♂️");
      return;
    }

    setMessage(` ${name.toUpperCase()}`);

    // Send data to Google Sheets
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzhf29AWSch0RoadGBjAkoW_b2bAcYifWFOxfxWcXyVVEPm39a9NmU9SJwK1j24a1D0yA/exec";
    try {
      await axios.post(scriptURL, formData);
      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <LoveCard
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
};

export default LoveChecker;
