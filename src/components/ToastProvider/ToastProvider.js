import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

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
