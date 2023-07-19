import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => (
  <section>
    <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://themewagon.github.io/training-studio/assets/images/gym-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-50 z-10"></div>
      <div className="relative z-20 flex justify-center items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white text-center font-bold"
        >
          <p className="text-2xl">WORK HARDER, GET STRONGER</p>
          <h1 className="text-7xl mt-4">
            EASY WITH OUR <span className="text-orange-500">GYM</span>
          </h1>
          <AnchorLink
            className="bg-orange-500 py-4 px-3 hover:bg-orange-600 transition duration-200 inline-block mt-8"
            href="contact"
            onClick={() => setSelectedPage("contact")}
          >
            BECOME A MEMBER
          </AnchorLink>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Landing;
