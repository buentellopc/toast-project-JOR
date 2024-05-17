import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [text, setText] = React.useState("");
  const [variant, setVariant] = React.useState("warning");

  const [variantes, setVariantes] = React.useState([]);

  // React.useEffect(() => {
  //   window.addEventListener("keydown", removeAllLToasts);

  //   return () => {
  //     window.removeEventListener("keydown", removeAllLToasts);
  //   };
  // }, []);

  useEscapeKey(removeAllLToasts);

  return (
    <ToastContext.Provider
      value={{
        variantes,
        setVariantes,
        handleDismiss,
        removeAllLToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );

  function handleDismiss(idToDelete) {
    console.log("handleDismiss - toastId" + idToDelete);

    setVariantes((prevToasts) => {
      return prevToasts.filter((toast) => {
        return toast.id !== idToDelete;
      });
    });
  }

  function removeAllLToasts() {
    console.log("TOAST provider - removeAll Toasts");
    setVariantes([]);
  }
}

export default ToastProvider;
