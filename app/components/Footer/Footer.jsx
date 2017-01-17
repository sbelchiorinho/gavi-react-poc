import styles from './_Footer.scss';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    let year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
        &copy; blue-infinity&nbsp;{year}
      </footer>
    );
  }
}
