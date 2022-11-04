import React from "react";
import "./Link.css";
const index = ({ children, id, redirect, link, ...otherProps }) => {
  return (
    <a href={link} id={id} target={redirect} className="link" {...otherProps}>
      {children}
    </a>
  );
};

export default index;
