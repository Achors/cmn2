import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaArrowRight } from "react-icons/fa";

export default function Careers() {
  const jobs = [
    {
      title: "Customer Support Specialist (Remote)",
      location: "Global (EMEA/APAC)",
      type: "Full-Time",
      salary: "$28K – $35K",
      perks: ["Health Insurance", "Remote Work", "Paid Training"],
      desc: "Join our 24/7 support team. Multilingual skills a plus."
    },
    {
      title: "RPO Recruitment Coordinator",
      location: "Nairobi, Kenya",
      type: "Full-Time",
      salary: "$32K – $40K",
      perks: ["Visa Sponsorship", "Career Growth", "Performance Bonus"],
      desc: "Manage end-to-end hiring for global clients."
    },
    {
      title: "Data Processing Analyst",
      location: "Remote",
      type: "Contract",
      salary: "$20/hr",
      perks: ["Flexible Hours", "Weekly Pay", "Tools Provided"],
      desc: "High-volume data entry with 99.9% accuracy target."
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
          <h1 className="text-5xl font-bold text-primary mb-4">Join the CMN Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work with global clients, grow your career, and be part of a team that values innovation, diversity, and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                <span className="flex items-center gap-1"><FaClock /> {job.type}</span>
              </div>
              <p className="text-success font-semibold mb-3 flex items-center gap-1">
                <FaDollarSign /> {job.salary}
              </p>
              <p className="text-gray-700 mb-4">{job.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.perks.map((perk) => (
                  <span key={perk} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {perk}
                  </span>
                ))}
              </div>
              <a
                href="/contact?role=apply"
                className="text-accent font-semibold hover:text-yellow-600 flex items-center gap-1"
              >
                Apply Now <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-primary to-success text-white p-10 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Can’t Find Your Role?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We’re always looking for talented individuals in BPO, RPO, tech, and operations.
          </p>
          <a
            href="/contact?role=general"
            className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            Send Your CV <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}