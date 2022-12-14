import React from "react";
import "./checkbox.css";

const Index = ({
  id,
  checked,
  label,
  name,
  classes,
  handleCheckboxChange,
  ...otherProps
}) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  const handleCheckbox = (e) => {
    setIsChecked((prev) => !prev);
    if (!isChecked) handleCheckboxChange(e.target.checked);
  };
  return (
    <div className={`checkbox-wrap ${classes}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
        {...otherProps}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

export default Index;
