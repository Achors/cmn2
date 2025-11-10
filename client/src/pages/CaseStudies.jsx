import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaUsers, FaClock, FaDollarSign } from "react-icons/fa";

export default function CaseStudies() {
  const studies = [
    {
      client: "TechFlow Inc.",
      industry: "SaaS / Customer Support BPO",
      challenge: "High churn due to slow support response times.",
      solution: "Deployed 24/7 multilingual support team with AI ticketing.",
      results: [
        { icon: FaChartLine, label: "CSAT Score", value: "96%" },
        { icon: FaClock, label: "Response Time", value: "Under 2 mins" },
        { icon: FaUsers, label: "Churn Reduced", value: "42%" }
      ],
      quote: "CMN became our customer success engine. We scaled support without scaling costs.",
      cta: "See BPO in Action"
    },
    {
      client: "Global Retail Co.",
      industry: "E-commerce / RPO",
      challenge: "Hiring 200+ seasonal staff in 3 weeks across 5 countries.",
      solution: "End-to-end RPO: sourcing, screening, onboarding.",
      results: [
        { icon: FaUsers, label: "Hires Made", value: "217" },
        { icon: FaClock, label: "Time-to-Hire", value: "14 days" },
        { icon: FaDollarSign, label: "Cost per Hire", value: "$1,200" }
      ],
      quote: "We hit peak season fully staffed. CMN delivered.",
      cta: "Scale Your Team"
    },
    {
      client: "FinSecure Bank",
      industry: "Finance / Data & Compliance BPO",
      challenge: "Manual KYC backlog risking regulatory fines.",
      solution: "Automated data processing + compliance audit team.",
      results: [
        { icon: FaDatabase, label: "Records Processed", value: "50K/month" },
        { icon: FaCheckCircle, label: "Compliance Rate", value: "100%" },
        { icon: FaDollarSign, label: "Fines Avoided", value: "$2.1M" }
      ],
      quote: "Accuracy and speed we couldn’t achieve in-house.",
      cta: "Secure Your Data"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Real Results, Real Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CMN Solutions transformed operations for businesses like yours with BPO and RPO.
          </p>
        </motion.div>

        <div className="space-y-20">
          {studies.map((study, index) => (
            <motion.article
              key={study.client}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary to-success rounded-xl h-80 flex items-center justify-center text-white text-6xl font-bold">
                {study.client.charAt(0)}
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-medium text-success uppercase tracking-wider">{study.industry}</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-4">{study.client}</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Solution:</strong> {study.solution}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((res) => {
                    const Icon = res.icon;
                    return (
                      <div key={res.label} className="text-center">
                        <Icon className="text-success text-2xl mx-auto mb-1" />
                        <p className="text-2xl font-bold text-primary">{res.value}</p>
                        <p className="text-xs text-gray-600">{res.label}</p>
                      </div>
                    );
                  })}
                </div>

                <blockquote className="italic text-gray-600 border-l-4 border-success pl-4 mb-6">
                  "{study.quote}"
                </blockquote>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-yellow-600 transition"
                >
                  {study.cta} <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-primary mb-4">Your Success Story Starts Here</h3>
          <a
            href="/contact"
            className="bg-success text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition inline-flex items-center gap-2"
          >
            Get Your Free Audit <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}