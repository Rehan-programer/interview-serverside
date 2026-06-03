"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { RxCross2 } from "react-icons/rx";
import { FiSun, FiMoon } from "react-icons/fi";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import Button from "./Button";

const Modal = ({ modalOpen, setModalOpen }) => {
    const {
        theme,
        setTheme,
        setSidebarSize,
    } = useThemeContext();

    return (
        <>
            <div
                onClick={() => setModalOpen(false)}
                className={`
                    fixed inset-0 z-[999]
                    bg-black/50 backdrop-blur-sm
                    transition-all duration-300
                    ${
                        modalOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }
                `}
            />

            <div
                className={`
                    fixed top-0 right-0 z-[1000]
                    h-screen w-full sm:w-[420px]
                    bg-(--background)
                    shadow-2xl
                    transition-all duration-300 ease-in-out
                    ${
                        modalOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 p-5">
                    <div>
                        <h2 className="text-xl font-bold text-(--foreground)">
                            Theme Settings
                        </h2>
                        <p className="text-sm text-gray-500">
                            Customize your dashboard
                        </p>
                    </div>

                    <Button 
                        onClick={() => setModalOpen(false)}
                        variant="cross"
                    >
                        <RxCross2  size={20} className=" text-(--foreground) group-hover:text-white" />
                    </Button>
                </div>

                <div className="p-6 space-y-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-(--foreground)">
                            Appearance
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setTheme("light")}
                                className={`
                                    p-4 rounded-xl border-2 cursor-pointer
                                    transition-all duration-200
                                    ${
                                        theme === "light"
                                            ? "border-blue-500 bg-blue-50 text-black"
                                            : "border-gray-200 hover:border-blue-300"
                                    }
                                `}
                            >
                                <FiSun className="text-2xl mx-auto mb-2 text-yellow-500" />
                                <p className="font-medium">Light</p>
                            </button>

                            <button
                                onClick={() => setTheme("dark")}
                                className={`
                                    p-4 rounded-xl border-2 cursor-pointer
                                    transition-all duration-200
                                    ${
                                        theme === "dark"
                                            ? "border-blue-500 bg-blue-50 dark:bg-zinc-800"
                                            : "border-gray-200 hover:border-blue-300"
                                    }
                                `}
                            >
                                <FiMoon className="text-2xl mx-auto mb-2 text-indigo-500" />
                                <p className="font-medium text-(--foreground)">Dark</p>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-(--foreground)">
                            Sidebar Size
                        </h3>

                        <div className="space-y-3">
                            {[
                                {
                                    label: "Default",
                                    value: "default",
                                    desc: "Normal sidebar width",
                                },
                                {
                                    label: "Compact",
                                    value: "compact",
                                    desc: "Smaller sidebar",
                                }
                            ].map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() =>
                                        setSidebarSize(item.value)
                                    }
                                    className="
                                        w-full cursor-pointer
                                        flex items-center gap-4
                                        p-4 rounded-xl
                                        border border-gray-200
                                        hover:border-blue-400
                                        hover:bg-blue-50
                                        text-(--foreground)
                                        transition
                                    "
                                >
                                    <TbLayoutSidebarLeftExpand className="text-2xl text-blue-500" />

                                    <div className="text-left">
                                        <h4 className="font-medium">
                                            {item.label}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;