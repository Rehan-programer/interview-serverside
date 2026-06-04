export default function Button({
  children,
  type = "button",

  variant = "primary",
  size = "md",
  rounded = "xl",

  align = "center",
  justify = "center",

  className = "",
  loading = false,
  disabled = false,

  leftIcon,
  rightIcon,

  ...props
}) {
  const variants = {
    primary: `
      bg-(--background)   cursor-pointer
      text-(--foreground) shadow-lg shadow-[#009cff]/20 
    `,
    secondary: `
      bg-(--background)   cursor-pointer
      text-(--foreground) 
      border border-gray-200 
      hover:bg-gray-100
    `,
    danger: `
      bg-red-600 hover:bg-red-700 cursor-pointer
      text-white shadow-lg shadow-red-500/20
    `,
    ghost: `
      bg-transparent  cursor-pointer
      text-(--foreground) cursor-pointer hover:shadow-lg hover:shadow-[#009cff]/20 
    `,
    cross:`
    rounded-full group hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center justify-center transition
    `
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-lg",
    lg: "rounded-2xl",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const itemsMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        cursor-pointer
        flex gap-2
        font-medium transition-all duration-200
        hover:scale-[1.02] active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed

        ${alignMap[justify]}
        ${itemsMap[align]}

        ${variants[variant]}
        ${sizes[size]}
        ${roundedStyles[rounded]}

        ${className}
      `}
      {...props}
    >
      {leftIcon && <span className="text-sm">{leftIcon}</span>}

      {loading ? "Loading..." : children}

      {rightIcon && <span className="text-sm">{rightIcon}</span>}
    </button>
  );
}