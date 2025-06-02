
const AboutHero = () => {
  return (
    <div className="text-center mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10"></div>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        About ChatBot Compass
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
        Your trusted guide in the complex world of AI chatbots and virtual assistants
      </p>
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default AboutHero;
