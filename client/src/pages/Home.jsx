import { useEffect, useState } from "react";
import axios from "axios";
import { FaGlobe, FaUsers, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [backendMsg, setBackendMsg] = useState("Connecting...");

  useEffect(() => {
    axios.get("/api/hello")
      .then(res => setBackendMsg(res.data.message))
      .catch(() => setBackendMsg("Flask API Ready"));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-success text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Connected Minds Network
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Scalable BPO & RPO solutions that connect your business to global talent and streamlined operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2"
            >
              Get Started <FaArrowRight />
            </a>
            <a
              href="/about"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Backend Status: <span className="font-semibold text-success">{backendMsg}</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Why Choose CMN Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Access talent pools in 20+ countries with 24/7 operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-success rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Expert Teams</h3>
              <p className="text-gray-600">
                Certified BPO & RPO specialists with 10+ years experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaChartLine className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Proven Results</h3>
              <p className="text-gray-600">
                40% cost reduction • 60% faster hiring • 99.9% uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 50+ companies scaling smarter with CMN Solutions.
          </p>
          <a
            href="/contact"
            className="bg-success text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition inline-flex items-center gap-2"
          >
            Start Your Free Consultation <FaArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}