const classesList = {
  "First Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-01.jpg",
    description: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia. Natus nam quas aperiam libero ea accusamus. Earum minima ad, facilis iusto incidunt, architecto perspiciatis doloremque, recusandae suscipit vero quae.
    `,
  },
  "Second Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-02.jpg",
    description: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia. Natus nam quas aperiam libero ea accusamus. Earum minima ad, facilis iusto incidunt, architecto perspiciatis doloremque, recusandae suscipit vero quae.
    `,
  },
  "Third Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-03.jpg",
    description: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia. Natus nam quas aperiam libero ea accusamus. Earum minima ad, facilis iusto incidunt, architecto perspiciatis doloremque, recusandae suscipit vero quae.
    `,
  },
  "Fourth Training Class": {
    image:
      "https://themewagon.github.io/training-studio/assets/images/training-image-04.jpg",
    description: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia. Natus nam quas aperiam libero ea accusamus. Earum minima ad, facilis iusto incidunt, architecto perspiciatis doloremque, recusandae suscipit vero quae.
    `,
  },
};

function CLassInfo({ trainingClass }) {
  const image = classesList[trainingClass].image;
  const description = classesList[trainingClass].description;
  const name = trainingClass;
  return (
    <div className="flex flex-col items-start">
      <img src={image} alt="class" className="min-w-full" />
      <h1 className="text-2xl font-bold my-6">{name}</h1>
      <p className="text-sm text-gray-500 font-medium mb-4 max-w-[700px]">
        {description}
      </p>
    </div>
  );
}

export default CLassInfo;
