/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
const Button = ({ isOutline, buttonIcon, buttonText }) => {
  return (
    <>
      <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {buttonIcon}
        {buttonText}
      </button>
    </>
  );
};

export default Button;
