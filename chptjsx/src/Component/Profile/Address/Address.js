import React from 'react';
import PropTypes from 'prop-types';
import styles from './Address.module.css';


export default function Address(props) {
  const {address} = props;
  return (
    <div className={styles.Address}>
      <p>
        {address}
      </p>
    </div>
  );
}
