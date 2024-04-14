import React from "react";
import ComingSoon from "../../components/ComingSoon";

const Trainings = () => {
  const colors = ["#521A25", "#25521A", "#1A4152", "#471A52"];
  const attendees = [
    {
      title: "Future Focused",
      text: "Our University is structured to prepare students in line with the future of digital transformation across all Faculties and departments.",
    },
    {
      title: "Practical",
      text: "The programs have a mentorship and internship structure that allows practical execution of every knowledge that our students have gained.",
    },
    {
      title: "Job Placements",
      text: "During their internship phase, we are able to fix you with various organizations and talents that will retain you upon completion of the programs.",
    },
    {
      title: "Scholarship",
      text: "Our scholarship structure allows students access our educational infrastructure without having issues of financial restraints.",
    },
  ];

  const technologies = [
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-training/courses.png" />
      ),
      title: "Blockchain Technology",
      description:
        "Our University is structured to prepare students in line with the future of digital transformation across all Faculties and departments.",
      price: "$100",
      duration: "6 months",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-training/courses.png" />
      ),
      title: "Cyber Security",
      description:
        "The programs have a mentorship and internship structure that allows practical execution of every knowledge that our students have gained.",
      price: "$100",
      duration: "6 months",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-training/courses.png" />
      ),
      title: "Product Designing",
      description:
        "During their internship phase, we are able to fix you with various organizations and talents that will retain you upon completion of the programs.",
      price: "$100",
      duration: "6 months",
    },
    {
      icon: (
        <img src="https://spcimagestorage001.blob.core.windows.net/spc-training/courses.png" />
      ),
      title: "Software Engineering",
      description:
        "Our scholarship structure allows students access our educational infrastructure without having issues of financial restraints.",
      price: "$100",
      duration: "6 months",
    },
  ];
  return (
    <>
      <div
        className="w-full md:h-[617px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center"
        style={{
          backgroundImage: `url(${"https://spcimagestorage001.blob.core.windows.net/spc-training/training-hero.png"})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#471A52]/85 z-[2]"></div>
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between relative z-[3] p-4">
          <div className="md:w-[561px]">
            <p className="text-3xl md:text-6xl font-primarySemibold text-gray-200 md:w-[777px] mb-2 text-center md:text-left">
              The Future of Digital Transformation is
              <br /> now so close to us
            </p>
            <p className="md:text-xl font-primaryRegular text-gray-100 text-center md:text-left my-4">
              Enroll Into Our University Programmes Today And Get A Glimpse Of
              The Future
            </p>
          </div>
          <div>
            <img
              src="https://spcimagestorage001.blob.core.windows.net/spc-training/student.png"
              className="h-[350px] md:h-[501px]"
            />
          </div>
        </div>
      </div>
      {/* why SPC university */}
      <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-10 2xl:px-20 my-6">
        <div className="flex flex-col md:w-[461px]">
          <div className="font-primarySemibold text-2xl md:text-3xl text-gray-900">
            Why Silverspoon University?
          </div>
          <div className="w-[330px] md:w-[400px] h-1 md:h-2 bg-[#471A52]"></div>
          <p className="font-primaryRegular md:text-lg text-gray-500 py-2">
            Silverspoon University is the first educational infrastructure with
            a key focus on the future of digital transformation
          </p>
        </div>
        <div>
          <div className="w-full grid md:grid-cols-2 gap-10 md:px-10 2xl:px-20">
            {attendees.map((attend, index) => (
              <div
                key={index}
                className={`border border-[#471A52] md:w-[348.18px] rounded-xl flex flex-col items-center justify-center shadow-xl p-2`}
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <p className="text-lg md:text-3xl text-white font-primarySemibold">
                  {attend.title}
                </p>
                <p className="text-center p-2 text-sm text-white font-primaryRegular">
                  {attend.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F4EBFF] flex flex-col  p-4 md:p-10 2xl:px-20">
        <div className="hidden md:flex flex-col md:items-center md:justify-center font-primarySemibold text-3xl md:text-4xl text-gray-900">
          Our Faculties
          <div className="w-[200px] md:w-[250px] h-1 md:h-2 bg-[#471A52]"></div>
        </div>
        <div className="md:hidden flex flex-col md:items-center md:justify-center font-primarySemibold text-3xl md:text-4xl text-gray-900">
          Our Courses
          <div className="w-[200px] md:w-[250px] h-1 md:h-2 bg-[#471A52]"></div>
        </div>
        {/* Technology */}
        <div>
          <div className="hidden md:block font-primarySemibold text-3xl md:text-4xl text-gray-900">
            Technology
          </div>
          <div className="hidden md:block w-[160px] md:w-[200px] h-1 md:h-2 bg-[#471A52]"></div>
          <div>
            <div className="w-full md:grid md:grid-cols-4 gap-4 md:gap-10 py-4">
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className="w-full md:w-[302px] h-[405px] border border-gray-200 bg-white rounded-xl flex flex-col shadow my-4 p-4"
                >
                  <div className="w-full">{technology.icon}</div>
                  <p className="text-lg text-gray-900 font-primarySemibold my-2">
                    {technology.title}
                  </p>
                  <p className="text-sm text-gray-500 font-primaryRegular">
                    {technology.description}
                  </p>
                  <div className="w-full flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <p className="text-xs font-primaryRegular text-gray-400">
                        Price
                      </p>
                      <p className="font-primarySemibold text-gray-900">
                        {technology.price}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs font-primaryRegular text-gray-400">
                        Duration
                      </p>
                      <p className="font-primarySemibold text-gray-900">
                        {technology.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Accelerator Programs */}
        <div>
          <div className="font-primarySemibold text-3xl md:text-4xl text-gray-900">
            Accelerator Programs
          </div>
          <div className="w-[250px] md:w-[300px] h-1 md:h-2 bg-[#471A52]"></div>
        </div>
      </div>
      {/* read to explore */}
      <div className="w-full bg-white flex flex-col items-center justify-center my-0 md:my-20 p-4 md:p-10 2xl:px-20">
        <p className="font-primarySemibold text-2xl md:text-4xl text-gray-900">
          Ready to explore?
        </p>
        <p className="w-full md:w-[768px] text-lg md:text-xl font-primaryRegular text-gray-600 text-center my-4">
          Through our various infrastructures, we are able to build on new
          transformative and digital solutions.
        </p>
        {/* <div className="w-full md:w-[120px] bg-[#471A52] h-10 rounded-xl p-2 mt-4 font-primarySemibold text-white flex items-center justify-center">
        Get Started
      </div> */}
      </div>
    </>
  );
};

export default Trainings;
