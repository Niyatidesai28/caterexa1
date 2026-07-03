import { useEffect, useState } from "react";
import "./EarlySignupModal.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function EarlySignupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    city: "",
    signupType: "",
    requirement: "",
    teamSize: "",
    message: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "earlySignupResponses"), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    alert("Thank you for signing up early!");

    setFormData({
      name: "",
      email: "",
      contact: "",
      company: "",
      city: "",
      signupType: "",
      requirement: "",
      teamSize: "",
      message: "",
    });

    onClose();
  };

  return (
    <div className="early-signup-overlay" onClick={onClose}>
      <div
        className="early-signup-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="early-signup-close"
          onClick={onClose}
          aria-label="Close early signup form"
        >
          ×
        </button>

        <div className="early-signup-header">
          <p>Early Access</p>
          <h2>Early Sign Up</h2>
          <span>
            Join Caterexa before launch. Tell us what you need and our team will
            reach out.
          </span>
        </div>

        <form className="early-signup-form" onSubmit={handleSubmit}>
          <div className="early-form-grid">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Contact No
              <input
                type="tel"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Company / Business Name
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleChange}
              />
            </label>

            <label>
              City
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              I am signing up as
              <select
                name="signupType"
                value={formData.signupType}
                onChange={handleChange}
                required
              >
                <option value="">Select one</option>
                <option value="Company / Office">Company / Office</option>
                <option value="Restaurant Partner">Restaurant Partner</option>
                <option value="Cloud Kitchen">Cloud Kitchen</option>
                <option value="Food Provider">Food Provider</option>
                <option value="Individual">Individual</option>
              </select>
            </label>

            <label>
              Requirement
              <select
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
              >
                <option value="">Select requirement</option>
                <option value="Daily Office Meals">Daily Office Meals</option>
                <option value="Event Catering">Event Catering</option>
                <option value="Meal Boxes">Meal Boxes</option>
                <option value="Partner With Caterexa">
                  Partner With Caterexa
                </option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Team Size / Order Size
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
              >
                <option value="">Select size</option>
                <option value="1-25">1-25 people</option>
                <option value="26-50">26-50 people</option>
                <option value="51-100">51-100 people</option>
                <option value="100+">100+ people</option>
              </select>
            </label>
          </div>

          <label className="early-full-width">
            Message
            <textarea
              name="message"
              placeholder="Tell us more about your meal requirement..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </label>

          <button type="submit" className="early-signup-submit">
            Submit Early Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}