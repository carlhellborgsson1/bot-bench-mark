
import { Lightbulb, Shield, Heart } from "lucide-react";

const AboutValues = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
        <p className="text-blue-100 text-lg">
          The principles that guide everything we do
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Lightbulb className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
          <p className="text-blue-100 leading-relaxed">
            Constantly evolving our platform to provide the most up-to-date and relevant AI insights
          </p>
        </div>

        <div className="text-center group">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
          <p className="text-blue-100 leading-relaxed">
            Open and honest about our methodology, ensuring you can trust our recommendations
          </p>
        </div>

        <div className="text-center group">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Empowerment</h3>
          <p className="text-blue-100 leading-relaxed">
            Giving you the knowledge and tools needed to make confident AI technology decisions
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
