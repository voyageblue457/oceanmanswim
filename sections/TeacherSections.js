import React from "react";
import Image from "next/image";

const TeacherSections = () => {
  return (
    <section className="relative pt-10 ">
      <div className="absolute inset-0 bg-[#b9b6b7] z-0"></div>

      <div className="  relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
            OCEANMAN COACHES
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            _ Your journey starts today _
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden  h-[600px] group">
            <Image
              src="/images/find-coach.jpg"
              alt="Find a coach"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray/80 via-gray/40 to-transparent"></div>

          
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Find a coach
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6 max-w-md">
                Find a coach in your language and preferred experience and level
                up your skills and preparation for your next Open Water event.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-[#0b1d3b] font-bold py-3 px-8 rounded-full transition duration-300 uppercase tracking-wide w-fit">
                Find a coach
              </button>
            </div>
          </div>

         
          <div className="relative overflow-hidden h-[600px] group">
        
            <Image
              src="/images/become-coach.jpg" 
              alt="Become a coach"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 group-hover:scale-110"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Become a coach
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6 max-w-md">
                Become one of OCEANMAN certified coaches with our online course
                in English or Spanish, upgrade your skills and share experience
                with open water swimmers.
              </p>
              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-[#0b1d3b] font-bold py-3 px-8 rounded-full transition duration-300 uppercase tracking-wide w-fit">
                Become a coach
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSections;
