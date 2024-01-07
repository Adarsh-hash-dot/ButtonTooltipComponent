import React from 'react'
import styles from './tooltip.module.css'

const Tooltip = (props) => {
  const currLocation = props.currLocation
  return (
    <div className={styles.tootip}>tooltip {currLocation}</div>
  )
}

export default Tooltip