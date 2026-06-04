import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const handleEscape = React.useCallback(() => setToasts([]), []);
  useKeyDown("Escape", handleEscape);

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
