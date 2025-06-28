
import { Code, Cloud, Brain, CreditCard } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "SaaS, ERP, and platform solutions tailored to your business needs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure Engineering",
      description: "Scalable, secure, and efficient cloud solutions and infrastructure management",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Document & Workflow Automation",
      description: "Intelligent automation solutions that streamline business processes",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: CreditCard,
      title: "Banking & Fintech System Integrations",
      description: "Specialized solutions for financial services and banking systems",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl from-blue-600 to-purple-600"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-blue-600 to-purple-600 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
