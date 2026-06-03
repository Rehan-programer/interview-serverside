"use client";

import {  useState } from "react";



import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaSearch,
  FaUsersSlash,
} from "react-icons/fa";
import Input from "./Input";
import Table from "./Table";

const UserClient = ({data}) => {
  const [search, setSearch] = useState("");
   const filteredUsers = data?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>

          <div className="relative mb-5">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

        <Input
          placeholder="Search users by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-1/3"
        />

      </div>

      {filteredUsers.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">

          <FaUsersSlash className="text-5xl text-black mb-4" />

          <h2 className="text-xl font-semibold text-(--foreground)">
            No Users Found
          </h2>

          <p className="text-black text-sm mt-2">
            Try changing your search or add new users.
          </p>

        </div>
      ) : (
        <Table
          columns={[
            { header: "User" },
            { header: "Email" },
            { header: "Company" },
            { header: "Phone" },
          ]}
          data={filteredUsers}

          renderRow={(user) => (
            <tr
              key={user.id}
              className="  border-1 border-[#009CFF] transition"
            >

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#009CFF] to-[#0026ff] flex items-center justify-center text-white font-bold shadow-md">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium text-black ">
                      {user.name}
                    </p>

                    <p className="text-xs text-black">
                      ID #{user.id}
                    </p>
                  </div>

                </div>
              </td>

              <td className="px-6 py-4 text-black">

                <div className="flex items-center gap-2">

                  <FaEnvelope className="text-[#009CFF] text-sm" />

                  <span className="truncate max-w-[180px]">
                    {user.email}
                  </span>

                </div>

              </td>

              <td className="px-6 py-4 text-black">

                <div className="flex items-center gap-2">

                  <FaBuilding className="text-[#009CFF] text-sm" />

                  <span>{user.company.name}</span>

                </div>

              </td>

              <td className="px-6 py-4 text-black">

                <div className="flex items-center gap-2">

                  <FaPhone className="text-[#009CFF] text-sm" />

                  <span>{user.phone}</span>

                </div>

              </td>

            </tr>
          )}

          renderCard={(user) => (
            <>
              <div className="flex items-center gap-3 mb-4">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#009CFF] to-[#0026ff] flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h2 className="font-semibold text-black truncate">
                    {user.name}
                  </h2>

                  <p className="text-xs text-black">
                    ID #{user.id}
                  </p>
                </div>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-start gap-2 text-black ">

                  <FaEnvelope className="text-[#009CFF] mt-1 shrink-0" />

                  <span className="break-all">
                    {user.email}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-black">

                  <FaBuilding className="text-[#009CFF] shrink-0" />

                  <span className="truncate">
                    {user.company.name}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-black">

                  <FaPhone className="text-[#009CFF] shrink-0" />

                  <span>{user.phone}</span>

                </div>

              </div>
            </>
          )}
        />
      )}
    </div>
  )
}

export default UserClient