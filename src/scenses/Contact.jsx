import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    e.preventDefault();
  };

  return (
    <section className="py-48 mx-5">
      <div className="flex justify-end w-full">
        <div>
          <p className="font-semibold text-4xl text-orange-500">CONTACT US</p>
        </div>
      </div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <div className="basis-1/2 flex justify-center">
        <iframe
          title="googleMap"
          className="min-w-full h-[400px]"
          src="https://maps.google.com/maps?q=newyork&t=&z=12&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        </div>

        <div className="basis-1/2 mt-10 md:mt-0">
          <form target="_blank" onSubmit={onSubmit} method="POST">
            <input
              className="w-full bg-gray-100 font-semibold p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-600 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-gray-100 p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-gray-100 font-semibold p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />

            {errors.message && (
              <p className="text-red-600 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 text-white bg-orange-500 font-semibold mt-5 hover:bg-orange-600 transition duration-500"
              type="submit"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
