import React from "react";
import classnames from "classnames";

function Button({ name, id, onClick, children, className, ...rest }) {
  return (
    <button
      className={classnames(
        "bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4",
        className
      )}
      id={id}
      name={name}
      onClick={onClick}
      {...rest}
    >
      {name || children}
    </button>
  );
}

export default Button;
