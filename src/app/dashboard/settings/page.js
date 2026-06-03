"use client";

import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import Button from "@/components/resuable-components/Button";
import { useThemeContext } from "@/context/ThemeContext";

const SettingsPage = ({ setModalOpen }) => {
  const { theme, setTheme, sidebarSize, setSidebarSize } = useThemeContext();

  const themeOptions = [
    {
      label: "Light Theme",
      icon: <FiSun className="text-3xl text-yellow-500" />,
      active: theme === "light",
      onClick: () => setTheme("light"),
    },
    {
      label: "Dark Theme",
      icon: <FiMoon className="text-3xl text-indigo-400" />,
      active: theme === "dark",
      onClick: () => setTheme("dark"),
    },
  ];

  const sidebarOptions = [
    {
      label: "Default Sidebar",
      icon: <TbLayoutSidebarLeftExpand className="text-3xl text-[#009cff]" />,
      active: sidebarSize === "default",
      onClick: () => setSidebarSize("default"),
    },
    {
      label: "Compact Sidebar",
      icon: (
        <TbLayoutSidebarLeftExpand className="text-3xl text-cyan-500 rotate-180" />
      ),
      active: sidebarSize === "compact",
      onClick: () => setSidebarSize("compact"),
    },
  ];

  const OptionCard = ({ icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center gap-3 p-5 rounded-2xl border-2 
        transition-all duration-200 cursor-pointer w-full
        ${active
          ? "border-[#009cff] bg-blue-50 dark:bg-blue-950/30"
          : "border-gray-200 dark:border-zinc-700 hover:border-[#009cff]/60 hover:bg-zinc-800/50"
        }
      `}
    >
      {icon}
      <span
        className={`text-sm font-medium ${active
            ? "text-[#009cff]"
            : "text-(--foreground) group-hover:text-[#009cff]"
          }`}
      >
        {label}
      </span>
    </button>
  );

  return (
    <div className="h-full flex items-center justify-center bg-(--background) px-6">
      <div className="max-w-xl w-full ">
        <div className="relative overflow-hidden rounded-3xl border border-(--foreground)   bg-(--background) shadow-xl px-10 py-12">



          <div className="relative z-10 flex flex-col items-center text-center gap-6 ">

            <div className="w-20 h-20 rounded-2xl bg-[#009cff] flex items-center justify-center shadow-md">
              <IoMdSettings className="text-4xl text-white animate-spin-slow" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-(--foreground)">
                Settings Center
              </h1>
              <p className="mt-2 text-sm text-(--foreground) max-w-sm mx-auto leading-relaxed">
                Personalize your dashboard with theme, appearance and sidebar preferences.
              </p>
            </div>

            <div className="w-full" />

            <div className="w-full text-left">
              <p className="text-xs font-semibold text-(--foreground) uppercase tracking-widest mb-3">
                Theme
              </p>
              <div className="grid grid-cols-2 gap-3">
                {themeOptions.map((item) => (
                  <OptionCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="w-full text-left">
              <p className="text-xs font-semibold text-(--foreground) uppercase tracking-widest mb-3">
                Sidebar
              </p>
              <div className="grid grid-cols-2 gap-3">
                {sidebarOptions.map((opt) => (
                  <OptionCard key={opt.label} {...opt} />
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;