'use client';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science (Bsc. Incomplete)',
      institution: 'Dhaka College, Department of Mathematics',
      year: '2020 - 2023',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Mirpur Cantonment School & College, Science',
      year: '2016 - 2018',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-6 py-4 bg-white/5 hover:bg-white/10 transition rounded-md shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
