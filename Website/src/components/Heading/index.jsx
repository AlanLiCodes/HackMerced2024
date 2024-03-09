import React from "react";

const sizes = {
  s: "text-[47px] font-bold leading-[59px]",
  md: "text-[69px] font-extrabold leading-[95px]",
  xs: "text-base font-semibold leading-[21px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
