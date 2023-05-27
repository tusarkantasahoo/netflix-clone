import NavbarItem from "./navbaritem";
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
             px-4
             md:px-16
             py-6
             flex
             flex-row
             items-center
             transition
             duration-500
             bg-zinc-900
             bg-opacity-90
             "
      >
        <img className="h-4 lg:h-7" src="./images/logo.png" alt="" />
        <div
          className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New &Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer">
          <p className="text-white text-sm">Browse</p>
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-400 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-400 cursor-pointer">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:h-10 lg:w-10 rounded-md overflow-hidden">
              <img src="./images/default-blue.png" />
            </div>
            <div className="text-gray-200 hover:text-gray-400 cursor-pointer">
              {/* <BsChevronDown /> */} Tusar
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
