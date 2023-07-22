import styles from './speed-dial.module.scss';

/* eslint-disable-next-line */
export interface SpeedDialProps {}

export function SpeedDial(props: SpeedDialProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SpeedDial!</h1>
    </div>
  );
}

export default SpeedDial;
