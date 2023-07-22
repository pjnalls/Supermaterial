import styles from './snackbar.module.scss';

/* eslint-disable-next-line */
export interface SnackbarProps {}

export function Snackbar(props: SnackbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Snackbar!</h1>
    </div>
  );
}

export default Snackbar;
