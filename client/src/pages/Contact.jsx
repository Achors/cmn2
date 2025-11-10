import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("/api/contact", formData);
      setStatus("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("Error. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-primary mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Ready to scale with BPO or RPO? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success"
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success"
          />
          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-success text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}