import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Scrollspy from "react-scrollspy";

const menuItems = [
  { key: 1, page: "Home" },
  { key: 2, page: "About" },
  { key: 3, page: "Classes" },
  { key: 5, page: "Contact" },
];

const MenuItem = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-orange-500" : ""
      } hover:text-orange-500 transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const navbarColor =
    isTopOfPage === true ? "bg-gray-700 bg-opacity-40" : "bg-gray-100";

  const textColor = isTopOfPage === true ? "text-white" : "text-black";
  
  return (
    <nav
      className={`${navbarColor}  transition duration-300 ease-in-out z-40 w-full fixed top-0 py-6`}
    >
      <div className="flex items-center mx-auto justify-between w-5/6">
        <h4 className={`text-4xl font-bold ${textColor}`}>Gyming</h4>
        {isAboveSmallScreens ? (
          <Scrollspy
            items={["home", "about", "classes", "schedules", "contact"]}
            offset={-120}
            onUpdate={(currentElement) =>
              setSelectedPage(currentElement?.id || "")
            }
          >
            <div
              className={`flex justify-between gap-14 text-lg font-medium ${textColor}`}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.key}
                  page={item.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </Scrollspy>
        ) : (
          <button
            className="rounded-full bg-black bg-opacity-60 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              src="https://raw.githubusercontent.com/ed-roh/react-portfolio/ae1cafae162c0f2c075f7c5c79c8b4bd284df70b/src/assets/menu-icon.svg"
              alt="open"
            />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-black w-[250px]">
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img
                  src="https://raw.githubusercontent.com/ed-roh/react-portfolio/ae1cafae162c0f2c075f7c5c79c8b4bd284df70b/src/assets/close-icon.svg"
                  alt="close"
                />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[15%] text-2xl text-white">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.key}
                  page={item.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
