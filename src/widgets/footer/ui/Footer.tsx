import React from 'react';
import styles from '../Footer.module.css';

interface FooterProps {
  children: JSX.Element | JSX.Element[];
}

export const Footer = ({children}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
};