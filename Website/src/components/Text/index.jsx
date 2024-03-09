import React from "react";

const sizes = {
  xs: "text-base font-medium leading-[21px]",
  s: "text-[23px] font-medium leading-[35px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
