import React from "react";

function InputText({ name, id, ...rest }) {
  return (
    <input type="text" className="border" id={id} name={name} {...rest}>
      {name}
    </input>
  );
}

export default InputText;
