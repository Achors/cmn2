import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: POST to /api/auth/signup or /api/auth/login
    alert(isSignUp ? "Sign Up Successful!" : "Logged In!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-success flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Toggle Header */}
        <div className="bg-primary text-white p-6 text-center">
          <h1 className="text-3xl font-bold">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="mt-2 text-sm opacity-90">
            {isSignUp
              ? "Join CMN Solutions to manage your BPO & RPO projects"
              : "Sign in to access your dashboard"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Name Field (Sign Up Only) */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isSignUp ? 1 : 0,
              height: isSignUp ? "auto" : 0,
            }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:border-success transition">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required={isSignUp}
                className="w-full outline-none text-gray-700"
              />
            </div>
          </motion.div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:border-success transition">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 focus-within:border-success transition">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-success text-white py-3 rounded-lg font-bold hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            {isSignUp ? "Create Account" : "Sign In"} <FaArrowRight />
          </button>
        </form>

        {/* Toggle Link */}
        <div className="text-center pb-6">
          <p className="text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-accent font-semibold hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 text-center py-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CMN Solutions | Nairobi, Kenya</p>
        </div>
      </motion.div>
    </section>
  );
}