import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [text, setText] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [isPop, setPop] = React.useState(false);

  // multiple toasts
  // const [variantes, setVariantes] = React.useState([]);

  const { variantes, setVariantes } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isPop && <Toast variant={variant} handleDismiss={""} />}

      {/* 
      -once a bit of individual state is passed, is up to each toast to do whatever with it
      -no state setters needed only state
       */}
      <ToastShelf />
      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          setVariantes([
            ...variantes,
            { id: crypto.randomUUID(), variant: variant, message: text },
          ]);
          setText("");
          setVariant("notice");
        }}
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
              className={styles.messageInput}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {/* <label htmlFor="variant-notice">
              <input
                id="variant-notice"
                type="radio"
                name="variant"
                value="notice"
              />
              notice
            </label> */}

            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

/*
-nombra de mejor manera los objetos, toast data
-funciones para una task es especifico, como crear nuevo data para un toast
-handleDismiss al final si lo usa Josh en ToastPlayground
  -es una solucion elegante puesto que se elimina por completo los datos de un toast
  -a partir de su id, entonces habra menos componentes renderizados
  -tu tambien tienes algo funcional, solo que no se si es lo mas optimo, bien de cualquier manera!
  

*/
