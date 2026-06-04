import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault();
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeyDown;
