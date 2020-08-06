import React from 'react';
import styles from './LoadingAnimation.module.css';

const LoadingAnimation = () => (
  <div className={styles.container}>
    <span className={styles.loader} />
    <p>Getting coffee...</p>
  </div>
);

export default LoadingAnimation;
