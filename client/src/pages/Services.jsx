import { motion } from "framer-motion";
import { FaHeadset, FaDatabase, FaCalculator, FaUsers, FaChartBar, FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaHeadset,
      title: "Customer Support BPO",
      description: "24/7 multilingual support that delights your clients and scales with your business.",
      stats: "99.9% satisfaction • 40% faster response"
    },
    {
      icon: FaDatabase,
      title: "Data Entry & Processing",
      description: "Accurate, secure data management to free your team for high-value tasks.",
      stats: "Error-free accuracy • GDPR compliant"
    },
    {
      icon: FaCalculator,
      title: "Finance & Accounting BPO",
      description: "Streamlined bookkeeping, invoicing, and compliance for cost-effective operations.",
      stats: "30% cost savings • Real-time reporting"
    },
    {
      icon: FaUsers,
      title: "HR & Talent Acquisition RPO",
      description: "End-to-end recruitment outsourcing to build high-performing teams quickly.",
      stats: "60% faster hiring • 25% retention boost"
    },
    {
      icon: FaChartBar,
      title: "Process Consulting",
      description: "Custom analytics and optimization to analyze and enhance your workflows.",
      stats: "Data-driven insights • Scalable strategies"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Our BPO & RPO Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored outsourcing solutions that integrate seamlessly as an extension of your team. From customer support to talent acquisition, we handle it all with expertise and efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-success rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <p className="text-sm font-medium text-success text-center">{service.stats}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How We Work (Inspired by Oasis' 3 Steps) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white py-16 rounded-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-12">How We Deliver Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Integrate", desc: "We become an extension of your team, understanding your goals and processes deeply.", icon: "🔗" },
              { step: 2, title: "Manage", desc: "Our trained experts handle execution, training, and daily operations so you focus on growth.", icon: "👥" },
              { step: 3, title: "Analyze", desc: "Data-driven insights to measure success, spot patterns, and optimize for continuous improvement.", icon: "📊" }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="w-8 h-1 bg-success mx-auto mb-4"></div> {/* Line connector */}
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us (Oasis-Inspired Benefits) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Why CMN Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "24/7 Quick Response", desc: "Global support across time zones—no delays.", icon: FaArrowRight },
              { title: "10+ Years Experience", desc: "Proven expertise in BPO, RPO, and digital transformation.", icon: FaChartBar },
              { title: "Unmatched Quality", desc: "Satisfaction guaranteed with rigorous standards and feedback loops.", icon: FaHeadset },
              { title: "Fully Managed Teams", desc: "We handle training, welfare, and motivation for seamless delivery.", icon: FaUsers },
              { title: "Massively Scalable", desc: "Scale up/down effortlessly—pay only for what you need.", icon: FaDatabase },
              { title: "Transparent Communication", desc: "Clear, plain-English updates to keep you informed every step.", icon: FaCalculator }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white transition">
                  <Icon className="text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Trusted Clients (Oasis-Style Logos – Placeholders) */}
        <section className="py-12 bg-white rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-center text-primary mb-8">Trusted Globally</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["Uber", "Google", "Microsoft", "Amazon", "Salesforce"].map((logo) => (
              <div key={logo} className="p-4 bg-gray-100 rounded-lg">
                <span className="text-gray-500 text-sm font-medium">{logo}</span> {/* Replace with real images */}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Teaser (Accordion-Style, but Simple for Now) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "What BPO services do you offer?", a: "Customer support, data entry, finance, and more—tailored for your industry." },
              { q: "How does RPO work with CMN?", a: "We manage full recruitment pipelines, from sourcing to onboarding, reducing time-to-hire by 60%." },
              { q: "Is data secure?", a: "Yes—ISO-certified, GDPR-compliant with end-to-end encryption." }
            ].map((faq) => (
              <details key={faq.q} className="bg-white p-4 rounded-lg shadow-md">
                <summary className="font-semibold text-primary cursor-pointer">{faq.q}</summary>
                <p className="text-gray-600 mt-2 pl-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Blog Teaser (Like Oasis) */}
        <section className="py-12 bg-primary text-white rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The True Value of BPO in 2025", excerpt: "Why outsourcing drives innovation beyond cost savings.", link: "/blog/bpo-value" },
              { title: "RPO: Building Teams That Last", excerpt: "Strategies for 60% faster hiring and higher retention.", link: "/blog/rpo-teams" },
              { title: "Scaling Customer Support Globally", excerpt: "24/7 strategies that boost satisfaction without burnout.", link: "/blog/support-scaling" }
            ].map((post) => (
              <div key={post.title} className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-sm mb-4 opacity-90">{post.excerpt}</p>
                <a href={post.link} className="text-accent hover:underline flex items-center gap-1">
                  Read More <FaArrowRight className="text-xs" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Outsource?</h3>
          <a
            href="/contact"
            className="bg-success text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition inline-flex items-center gap-2"
          >
            Get a Free Quote <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}