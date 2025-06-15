
export const StatsSection = () => {
  const stats = [
    { number: "15+", label: "AI Models Compared" },
    { number: "50+", label: "Features Analyzed" },
    { number: "10K+", label: "Users Helped" },
    { number: "99%", label: "Accuracy Rate" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
