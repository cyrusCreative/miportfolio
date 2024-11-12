import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 5,
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-slate-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-slate-300 text-justify mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
              Hello! I’m Olatimileyin Josiah Modupe (OJM), a frontend developer
              who’s passionate about creating responsive, user-friendly websites
              and webapps. With over five (5) years of experience, I’ve honed my
              skills in HTML, CSS, JavaScript, and tools like React, Tailwind
              CSS, Bootstrap and so on. I love working on projects that bring
              great design and smooth user experiences, and I’m dedicated to
              making each project i found doing a success.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semi bold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-slate-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{label}</p>
                </div>
              ))}
              <p className="ml-auto md:w-[100px] md:h-[40px]">#OJM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
