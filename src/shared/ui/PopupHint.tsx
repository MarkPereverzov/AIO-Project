import { Alert, ProgressBar } from 'react-bootstrap';
import styles from './PopupHint.module.css';
import { useEffect, useState } from 'react';

interface PopupHintProps {
  message: string,
  variant: string,
  closeAfter: number, //milliseconds
  setState: (state: number) => void;
}

export const PopupHint = ({message, variant, closeAfter, setState}: PopupHintProps) => {
  const [time] = useState(new Date().getTime());
  const [progress, setProgress] = useState(100);

  useEffect (() => {
    const id = window.setInterval(()=>{
      const elapsedTime = new Date().getTime() - time; 
      const prgs = (closeAfter - elapsedTime) / 100;
      setProgress(prgs);
    }, 100);
    window.setTimeout(()=>{
      window.clearInterval(id);
      setState(0);
    }, closeAfter);
  }, []);

  return (
    <Alert className={styles.Alert} variant={variant} dismissible>
      <p className={styles.Content}>{message}</p>
      <ProgressBar className={styles.ProgressBar} variant={variant} now={progress}/>
    </Alert>
  );
};