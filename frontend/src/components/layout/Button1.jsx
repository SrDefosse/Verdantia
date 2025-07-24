const Button1 = ({ children, href, size = "md", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#DBB75F] focus:ring-offset-2"
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const colorClasses = "bg-[#305122] text-white hover:bg-[#305122]/90 shadow-lg hover:shadow-xl"
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${colorClasses} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button1
