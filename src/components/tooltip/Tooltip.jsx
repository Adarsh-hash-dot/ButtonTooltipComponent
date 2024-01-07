import React from "react";
import styles from "./tooltip.module.css";

const Tooltip = (props) => {
  const currLocation = props.currLocation;
  return (
    <>
      <div className={styles.tooltipContainer}>
        <div className={styles.tooltip}>Hover over me!</div>

        {/* tooltip info */}
        <div className={`${styles.tooltipInfo} ${styles[currLocation]} ${styles.fadeIn}`}>This is the tooltip info</div>
      </div>
    </>
  );
};

export default Tooltip;
