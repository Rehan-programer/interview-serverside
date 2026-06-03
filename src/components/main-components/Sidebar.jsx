"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  FaUsers,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import Button from "../resuable-components/Button";
import { useThemeContext } from "@/context/ThemeContext";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarSize } = useThemeContext();
  const sizeClasses = {
    default: "w-64",
    compact: "w-20",
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 bg-black/50 z-40 xl:hidden w-full right-0 left-0  ${sizeClasses[sidebarSize]}
          transition-all duration-500 ease-in-out
          ${sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `}
      />

      <aside
        className={`
          fixed xl:relative top-0 right-0 left-0 z-50 overflow-hidden
          h-screen   ${sizeClasses[sidebarSize]}
          bg-(--background) shadow-2xl
          flex flex-col
         transition-all duration-500 ease-in-out

          ${sidebarOpen
            ? "translate-x-0 xl:w-0"
            : "-translate-x-full s xl:translate-x-0"
          }
        `}
      >
        <div className="px-6 py-4">
          <h1 className={`text-2xl font-bold bg-gradient-to-r from-[#009CFF] to-[#0026ff]  bg-clip-text text-transparent`}>
            {sizeClasses[sidebarSize] === sizeClasses.default ? 'AdminPro' : 'AP'}
          </h1>

          {sizeClasses[sidebarSize] === sizeClasses.default && (
            <p className="text-sm text-gray-500">
              Admin Dashboard
            </p>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <Button
                key={item.path}
                variant={active ? "primary" : "ghost"}
                size="md"
                rounded="xl"
                align="center"
                justify="start"
                className={`
                  w-full justify-start
                  transition-all duration-200
                  ${active
                    ? ""
                    : "hover:translate-x-1"
                  }
                `}
                leftIcon={
                  <span
                    className={`
                      text-lg transition-transform duration-200
                      ${active
                        ? "scale-110"
                        : "group-hover:scale-110"
                      }
                    `}
                  >
                    {item.icon}
                  </span>
                }
                onClick={() => {
                  router.push(item.path);

                  if (window.innerWidth < 1280) {
                    setSidebarOpen(false);
                  }
                }}
              >
                {sizeClasses[sidebarSize] === sizeClasses.default ? item.name : ''}
                {active && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse" />
                )}
              </Button>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 p-4">
          <div
            className="
      rounded-2xl
      border border-gray-200
      bg-(--background)
      shadow-sm
      p-3
      transition-all duration-300
      hover:shadow-md
    "
          >
            {sizeClasses[sidebarSize] === sizeClasses.default ? (
              <div className="flex items-center gap-3">
                <div
                  className="
            w-12 h-12 rounded-full
            bg-gradient-to-br from-blue-500 to-cyan-400
            flex items-center justify-center
            text-white
            shadow-md
          "
                >
                  <FaUserCircle className="text-2xl" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">
                    Logged in as
                  </p>

                  <h3 className="font-semibold text-(--foreground) truncate">
                    Admin User
                  </h3>

                  <p className="text-xs text-gray-400 truncate">
                    Administrator
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div
                  className="
           rounded-full
            bg-gradient-to-br from-blue-500 to-cyan-400
            flex items-center justify-center
            text-white
            shadow-md
            transition-all duration-300
            hover:scale-110
            cursor-pointer
          "
                >
                  <FaUserCircle className="text-2xl" />
                </div>
              </div>
            )}
          </div>

          <Button
            variant="danger"
            size="md"
            className={`mt-3 w-full ${sizeClasses[sidebarSize] !== sizeClasses.default
              ? "justify-center"
              : ""
              }`}
            leftIcon={<FaSignOutAlt />}
            onClick={handleLogout}
          >
            {sizeClasses[sidebarSize] === sizeClasses.default && "Logout"}
          </Button>
        </div>
      </aside>
    </>
  );
}