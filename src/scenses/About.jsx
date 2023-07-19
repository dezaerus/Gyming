import React from "react";
import Program from "../components/Program";

function About() {
  return (
    <section>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-semibold mt-36 text-center">
          CHOOSE <span className="text-orange-500">PROGRAM</span>
        </h1>
        <img
          src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
          alt="waves"
          className="mt-5"
        />
        <p className="text-lg mt-6 text-center text-gray-500">
          Welcome to the world of fitness! we're here to help you find the
          perfect workout program to achieve your goals.
        </p>
        <div className="sm:grid sm:grid-cols-2 sm:gap-14 mt-20">
          <Program />
          <Program />
          <Program />
          <Program />
          <Program />
          <Program />
        </div>
      </div>
    </section>
  );
}

export default About;
