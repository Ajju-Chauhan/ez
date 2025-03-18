import React, { useState } from "react";
import "./FormComponent.css"; // Import the CSS file

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.status === 422) {
        setError(data.error || "Invalid email domain");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="title">EZ Works</h1>
        <p className="subtitle">Suite Of Business Support Services</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">Contact Me</button>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>

      {/* Right Section */}
      <div className="right-section">
        {[
          "Presentation Design",
          "Audio-Visual Production",
          "Translation Services",
          "Graphic Design",
          "Research & Analytics",
          "Data Processing"
        ].map((service, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{service}</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormComponent;
