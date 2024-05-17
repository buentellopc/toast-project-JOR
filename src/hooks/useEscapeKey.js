import { useEffect } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    function escapeFun(event) {
      if (event.key === "Escape") {
        console.log("Escape pressed calling", callback);
        callback();
      }
    }

    window.addEventListener("keydown", escapeFun);

    return () => {
      window.removeEventListener("keydown", escapeFun);
    };
  }, [callback]);
}

export default useEscapeKey;
