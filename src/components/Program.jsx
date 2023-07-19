function Program() {
  return (
    <div className="flex items-start mb-7">
      <img
        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
        alt="First One"
        className="min-w-[100px] mt-2"
      />
      <div className="ml-4">
        <h4 className="text-lg font-bold mb-2">Basic Fitness</h4>
        <p className="text-sm text-gray-500 font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="text-lg text-orange-600 hover:text-orange-800 transition duration-150">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Program;
