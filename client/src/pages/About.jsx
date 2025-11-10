export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">About CMN Solutions</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We are a global leader in BPO and RPO, connecting businesses with top talent and optimized processes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-success rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              10+
            </div>
            <h3 className="text-xl font-semibold text-primary">Years Experience</h3>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              50+
            </div>
            <h3 className="text-xl font-semibold text-primary">Global Clients</h3>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              24/7
            </div>
            <h3 className="text-xl font-semibold text-primary">Support</h3>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-success text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            To empower businesses with seamless outsourcing solutions that drive efficiency, reduce costs, and scale with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}