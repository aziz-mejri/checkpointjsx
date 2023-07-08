import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfilePhoto.module.css';

export default function Profile(props) {
  const {imageSrc} = props;
  return (
    <div className={styles.Address}>
      <img src={imageSrc} alt='profile' />
    </div>
  );
}