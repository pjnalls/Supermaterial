import styles from './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps {}

export function Backdrop(props: BackdropProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Backdrop!</h1>
    </div>
  );
}

export default Backdrop;
