"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Modal from "../resuable-components/Modal";
import { useThemeContext } from "@/context/ThemeContext";

export default function DashboardWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

const { theme } = useThemeContext();


  console.log("DashboardLayout theme:", theme);

  return (
       <div data-theme={theme}
 className={`flex min-h-screen text-white overflow-hidden relative ${modalOpen ? "z-1000" : "z-0"} `}>

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="relative w-full">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />

        {/* <main className="h-full bg-white lg:mt-0 px-2 py-[2rem] md:p-6 overflow-y-auto"> */}
          {children}
        {/* </main> */}
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}