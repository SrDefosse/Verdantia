const Button2 = ({ children, href, className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#DBB75F] focus:ring-offset-2"
  const colorClasses = "bg-[#DBB75F] text-[#122C19] hover:bg-[#DBB75F]/90 shadow-lg hover:shadow-xl"
  
  const classes = `${baseClasses} ${colorClasses} ${className}`
  
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

export default Button2
