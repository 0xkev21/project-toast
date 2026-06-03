import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast";

import useToggle from "../../hooks/useToggle";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [formData, setFormData] = React.useState({
    message: "",
    variant: VARIANT_OPTIONS[0],
  });
  const [isToastShown, toggleToastShown] = useToggle(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast
        isShown={isToastShown}
        handleDismiss={toggleToastShown}
        variant={formData.variant}
        message={formData.message}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          toggleToastShown(true);
        }}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={formData.variant === option}
                  onChange={(e) => {
                    setFormData({ ...formData, variant: e.target.value });
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
