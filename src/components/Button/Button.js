import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", ...delegated }) {
  console.log("button" + delegated);

  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
      onClick={() => {}}
    />
  );
}

export default Button;
