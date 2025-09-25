import React from "react";

const VideoSections = () => {
  return (
    <section className="relative pt-16 bg-[#0b1d3b]">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-4">
            OCEANMAN COMMUNITY
          </h2>
        </div>

        {/* Video Container */}
        <div className="w-full overflow-hidden mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <iframe
              src="https://www.youtube.com/embed/jrw0SHVA-U8"
              title="OCEANMAN Chania, Crete, Greece 2024"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSections;
