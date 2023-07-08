import React from 'react';
import styles from './FullName.module.css';

export default function FullName(props) {
  const {name} = props;
  return (
    <div className={styles.Address}>
      <h2>{name}</h2>
    </div>
  );
}