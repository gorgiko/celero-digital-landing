
import { Building2, Globe, Cpu, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Building2, text: "European Technology Company" },
    { icon: Globe, text: "Global Industry Focus" },
    { icon: Cpu, text: "AI & Cloud Engineering" },
    { icon: TrendingUp, text: "Future-Ready Solutions" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Celero Digital</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Celero Digital is a European technology company providing cutting-edge solutions in software development, IT infrastructure, cloud engineering, and AI technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in industries such as banking, finance, postal services, embedded systems, and e-commerce, delivering innovative solutions that drive digital transformation and operational efficiency.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-2xl p-8 shadow-2xl">
              <div className="h-full bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto flex items-center justify-center">
                    <Cpu size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Innovation First</h3>
                  <p className="text-gray-600 max-w-xs">
                    Leveraging cutting-edge AI and cloud technologies to solve complex business challenges
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
