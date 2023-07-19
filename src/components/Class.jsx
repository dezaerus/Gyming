function Class({ name, trainingClass, setTrainingClass }) {
  const handleClick = () => setTrainingClass(name);
  const TextColor =
    name === trainingClass ? " text-orange-600 transition duration-300" : "";
  return (
    <div className="flex justify-start bg-white rounded-lg shadow-lg p-6 my-10">
      <div className="min-w-fit">
        <img
          src="https://themewagon.github.io/training-studio/assets/images/tabs-first-icon.png"
          alt="card"
        />
      </div>

      <div className="ml-4">
        <button
          onClick={handleClick}
          className={`text-2xl font-bold ${TextColor}`}
        >
          {name}
        </button>
      </div>
    </div>
  );
}

export default Class;
