import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    function dismissToasts(e) {
      if (e.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", dismissToasts);

    return () => {
      window.removeEventListener("keydown", dismissToasts);
    };
  });

  function handleCreateToast(variant, message) {
    setToasts((current) => [
      ...current,
      { id: crypto.randomUUID(), variant, message },
    ]);
  }

  function handleDismiss(id) {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext value={{ toasts, handleCreateToast, handleDismiss }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
