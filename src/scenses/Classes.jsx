import { useState } from "react";
import Class from "../components/Class";
import ClassInfo from "../components/CLassInfo";

function Classes() {
  const [trainingClass, setTrainingClass] = useState("First Training Class");

  return (
    <section>
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-3xl font-semibold mt-36 text-center">
          OUR <span className="text-orange-500">CLASSES</span>
        </h1>
        <img
          src="https://themewagon.github.io/training-studio/assets/images/line-dec.png"
          alt="waves"
          className="mt-5"
        />
        <p className="text-lg mt-6 text-center text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        </p>
        <div className="md:flex md:justify-between md:items-center md:gap-14 md:h-full py-10 mx-auto">
          <div className="mx-4">
            <Class
              name="First Training Class"
              trainingClass={trainingClass}
              setTrainingClass={setTrainingClass}
            />
            <Class
              name="Second Training Class"
              trainingClass={trainingClass}
              setTrainingClass={setTrainingClass}
            />
            <Class
              name="Third Training Class"
              trainingClass={trainingClass}
              setTrainingClass={setTrainingClass}
            />
            <Class
              name="Fourth Training Class"
              trainingClass={trainingClass}
              setTrainingClass={setTrainingClass}
            />
          </div>
          <div className="mx-4">
            <ClassInfo trainingClass={trainingClass} />
            <button className="text-white font-semibold bg-orange-500 py-4 px-3 hover:bg-orange-600 transition duration-200 inline-block mt-4">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classes;
