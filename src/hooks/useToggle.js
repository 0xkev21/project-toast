import React from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
};

export default useToggle;
