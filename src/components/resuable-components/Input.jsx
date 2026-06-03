import { FaSearch } from "react-icons/fa";

export default function Input({
  label,
  type = "text",
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full group">
      
      {label && (
        <label className="block mb-2 text-sm font-medium text-black ">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        
        <FaSearch className="absolute left-4 text-black hover:text-[#009CFF] " />

        <input
          type={type}
          className={`
            w-full pl-11 pr-4 py-2.5 rounded-xl

            bg-white 
            border border-gray-200 

            text-black 

            outline-none
            focus:border-[#009cff]

            transition

            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}