export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden w-full
        rounded-3xl p-4 sm:p-6

        bg-(--background) 
        text-(--foreground)

        border border-gray-200 dark:border-white/10

        backdrop-blur-xl
        shadow-2xl

        transition-all duration-300
        hover:shadow-indigo-500/10
        hover:border-[#009CFF]

        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}