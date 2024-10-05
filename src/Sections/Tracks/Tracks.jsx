import { useState } from "react";

import aiml from "./Assests/aiml (1).svg";
import environment from "./Assests/environment.svg";
import hardware from "./Assests/hardware.svg";
import openinnovation from "./Assests/openinnovation.svg";
import quantum from "./Assests/quantum (2).svg";
import web from "./Assests/web.svg";

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState("Quantum");

  const tracks = [
    {
      id: 1,
      name: "Quantum",
      icon: quantum,
      description: (
        <>
          The Core Quantum Track delves into the fundamental concepts of quantum
          computing and quantum technologies. Participants will embark on a
          quest to understand the principles behind quantum mechanics, quantum
          algorithms, and quantum hardware. The track aims to provide a hands-on
          experience in working with quantum programming languages, simulators,
          and actual quantum devices.
          <br />
          From exploring quantum superposition and entanglement to implementing
          quantum algorithms such as Shor's algorithm and Grover's algorithm,
          this track will challenge participants to stretch their minds and
          develop quantum solutions to real-world problems. Participants will
          gain insights into the unique advantages and limitations of quantum
          computing compared to classical computing.
        </>
      ),
    },
    {
      id: 2,
      name: "AI/ML",
      icon: aiml,
      description: (
        <>
          The AI ML Track is focused on exploring the vast potential of
          artificial intelligence and machine learning in solving complex
          challenges across various domains. Participants in this track will
          have the opportunity to work on cutting-edge projects, applying
          state-of-the-art algorithms and techniques to real-world datasets.
          <br />
          From predictive analytics and natural language processing to computer
          vision and reinforcement learning, the AI ML Track encompasses a wide
          range of exciting areas in the field of AI. Participants can choose
          projects aligned with their interests, enabling them to delve deep
          into specific subdomains of AI and build their expertise.
        </>
      ),
    },
    {
      id: 3,
      name: "Web2 & Web3",
      icon: web,
      description: (
        <>
          <u>Traditional Web Development</u>: In this part of the track,
          participants will immerse themselves in the world of traditional web
          development. From frontend design and user experience to backend
          infrastructure and database management, participants will tackle
          real-world challenges faced by modern web applications. They will have
          the opportunity to explore the latest frameworks, tools, and best
          practices to build responsive, dynamic, and visually appealing web
          applications.
          <br />
          <u>Web3 and Decentralized Applications</u>: The second part of the
          track focuses on the innovative realm of Web3 technologies.
          Participants will dive into the decentralized world of blockchain and
          smart contracts, discovering how to create DApps that are transparent,
          secure, and tamper-proof. They will explore blockchain networks, smart
          contract development, and decentralized storage systems to create
          solutions that leverage the unique features of blockchain technology.
        </>
      ),
    },
    {
      id: 4,
      name: "Health and Environment",
      icon: environment,
      description: (
        <>
          Healthcare Solutions: In this part of the track, participants will
          explore innovative ways to improve healthcare delivery, accessibility,
          and patient outcomes. From leveraging artificial intelligence for
          medical diagnostics to developing telemedicine platforms and health
          monitoring devices, participants will have the chance to create
          solutions that can enhance healthcare services and positively impact
          lives.
          <br />
          Environmental Sustainability: The second part of the track is
          dedicated to addressing pressing environmental challenges.
          Participants will work on projects aimed at mitigating climate change,
          conserving natural resources, and promoting sustainable practices.
          From building smart energy management systems to developing
          applications that encourage eco-friendly behaviors, participants will
          contribute to a greener and more sustainable planet.
        </>
      ),
    },
    {
      id: 5,
      name: "Hardware",
      icon: hardware,
      description: (
        <>
          The Hardware Track is all about hands-on learning and building.
          Participants will get the opportunity to work with a wide range of
          electronic components, microcontrollers, sensors, and actuators to
          create functional hardware prototypes. From wearable devices and
          Internet of Things (IoT) gadgets to robotics and automation systems,
          the track covers various domains where hardware plays a vital role.
          <br />
          Participants will learn about electronic circuits, schematic design,
          PCB layout, and the fundamentals of microcontroller programming. They
          will experiment with various sensors to gather data from the physical
          world and use actuators to interact with it. The track also encourages
          participants to explore low-power designs, rapid prototyping
          techniques, and cutting-edge hardware technologies.
        </>
      ),
    },
    {
      id: 6,
      name: "Open Innovation",
      icon: openinnovation,
      description: (
        <>
          The Open Innovation Track is a blank canvas where participants are
          encouraged to think outside the box and tackle problems from various
          domains. There are no predefined themes or restrictions in this track,
          allowing participants to explore a wide array of topics that spark
          their curiosity and passion. Whether it's developing cutting-edge
          technologies, addressing societal issues, or creating novel
          applications, the track invites participants to let their imaginations
          run wild and embrace the freedom to innovate.
          <br />
          Participants can choose to work on solo projects, form
          cross-functional teams, or collaborate with other participants during
          the Hackathon. They are encouraged to bring diverse skill sets,
          backgrounds, and perspectives to the table, fostering an environment
          of open dialogue and co-creation.
        </>
      ),
    },
  ];

  const selectedTrackData = tracks.find((track) => track.name === selectedTrack);

  return (
    <div
      className="min-h-screen max-h-full flex flex-col justify-center items-center"
      id="tracks"
    >
      <h1 className="flex font-pixeboy text-[#F0286A] font-bold text-5xl lg:text-6xl justify-center text-shadow">
        TRACKS
      </h1>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-start items-center gap-4 sm:gap-8 mt-10 w-max">
            {tracks.map(({ id, name, icon }) => (
        <div
        key={id}
        className={`h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full bg-white flex items-center justify-center duration-200 shadow-[0_0_15px_8px_rgba(0,0,0,0.5)] ${
          selectedTrack === name
            ? "border-8 border-pink-700"
            : "border-none"
        } ${selectedTrack !== name && "hover:scale-105"}`}
        onClick={() => setSelectedTrack(name)}
        >
        <img
          className={`h-[56px] w-[56px] sm:h-[72px] sm:w-[72px] md:h-[88px] md:w-[88px] lg:h-[104px] lg:w-[104px] duration-200 ${
            selectedTrack === name &&
            "h-[51px] w-[51px] sm:h-[68px] sm:w-[68px] md:h-[83px] md:w-[83px] lg:h-[199x] lg:w-[99px]"
          }`}
          src={icon}
          alt={name}
        />
       </div>
       ))}
    </div>
</div>

      <div className="flex flex-col items-center mt-16">
        <div className="w-auto lg:w-[915px] max-w-4/5 min-h-[440px] max-h-full bg-[#8691b0] rounded-lg p-8 text-black font-semibold shadow-[0_0_15px_8px_rgba(0,0,0,0.5)]">
          {selectedTrackData && (
            <>
              <h2 className="my-4 text-center uppercase font-bold text-xl md:text-2xl lg:text-3xl underline">
                {selectedTrackData.name}
              </h2>
              <p className="my-4 font-normal text-base md:text-lg lg:text-xl tracking-tighter md:tracking-tight lg:tracking-normal">
                {selectedTrackData.description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
