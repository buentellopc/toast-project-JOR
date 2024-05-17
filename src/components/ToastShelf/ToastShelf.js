import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { variantes } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
      {variantes.map((data) => {
        console.log("NOW WHAT IS DATA" + data);
        return (
          <li key={data.id}>
            <Toast id={data.id} variant={data.variant}>
              {data.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
