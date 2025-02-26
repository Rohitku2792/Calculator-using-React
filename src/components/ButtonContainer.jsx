import React from "react";
import styles from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonClick }) {
  const buttonsNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "=",
    "0",
    "."
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonsNames.map((buttonsName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonsName)}
        >
          {buttonsName}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
