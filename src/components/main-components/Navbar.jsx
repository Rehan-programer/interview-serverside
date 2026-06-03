

import {
  FaBell,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Input from "../resuable-components/Input";
import { IoMdSettings } from "react-icons/io";


export default function Navbar({ sidebarOpen, setSidebarOpen, modalOpen, setModalOpen }) {

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <header
      className={`
      w-full 
        text-black  bg-(--background)
        backdrop-blur-2xl
      `}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-4">

        <div className="flex items-center gap-3 w-full">

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`
              w-10 h-10 flex items-center justify-center bg-white
              rounded-full 
               cursor-pointer
              
              hover:scale-105 transition
            `}

          >
            {sidebarOpen ? (
              <FaTimes className="text-[#009cff] " />
            ) : (
              <FaBars className="text-[#009cff] " />
            )}
          </button>

          <div className="w-full md:max-w-md">
            <Input
              type="text"
              placeholder="Search ..."
            />
          </div>
        </div>

        <div className="flex items-center gap-0">

          <button
            className="
   flex items-center gap-2 group 
              px-0 py-2 rounded-xl
              transition cursor-pointer  
  "
          >
            <div
              className=" bg-white
      relative flex items-center justify-center
      w-10 h-10 rounded-full group 
      transition-all duration-300 
    "
            >
              <FaBell
                className="
        group-hover:text-[#009cff]
        text-lg
        transition-transform duration-300
        group-hover:scale-110
      "
              />

              <span
                className="
        absolute -top-1 -right-1
        w-3 h-3
        bg-[#009cff]
        border-2 border-white dark:border-zinc-900
        rounded-full
        animate-pulse
      "
              />
            </div>

            <div className="text-left hidden lg:block">
              <h3
                className=" 
        text-md font-semibold
        text-(--foreground)
        transition-colors duration-300
        group-hover:text-[#009cff]
      "
              >
                Notifications
              </h3>


            </div>
          </button>
          <button
            onClick={toggleModal}
            className="
   flex items-center gap-2 group 
              px-3 py-2 rounded-xl
              transition cursor-pointer  
  "
          >
            <div
              className=" bg-white
      relative flex items-center justify-center
      w-10 h-10 rounded-full group 
      transition-all duration-300 
    "
            >
              <IoMdSettings

                className="
        group-hover:text-[#009cff]
        text-lg
        transition-transform duration-300
        group-hover:scale-110
      "
              />


            </div>

            <div className="text-left hidden lg:block">
              <h3
                className=" 
        text-md font-semibold
        text-(--foreground)
        transition-colors duration-300
        group-hover:text-[#009cff]
      "
              >
                Settings
              </h3>


            </div>
          </button>

          <button
            className="
   flex items-center gap-2 group 
              px-0 py-2 rounded-xl
              transition cursor-pointer  
  "
          >
            <div
              className=" bg-white
      relative flex items-center justify-center
      w-10 h-10 rounded-full group 
      transition-all duration-300 
    "
            >
              <FaUserCircle

                className="
        group-hover:text-[#009cff]
        text-lg
        transition-transform duration-300
        group-hover:scale-110
      "
              />


            </div>

            <div className="text-left hidden lg:block">
              <h3
                className=" 
        text-md font-semibold
        text-(--foreground)
        transition-colors duration-300
        group-hover:text-[#009cff]
      "
              >
                Admin
              </h3>


            </div>
          </button>



        </div>

      </div>


      {/* <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
     /> */}
    </header>
  );
}