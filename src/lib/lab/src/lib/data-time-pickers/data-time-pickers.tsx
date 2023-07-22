import styles from './data-time-pickers.module.scss';

/* eslint-disable-next-line */
export interface DataTimePickersProps {}

export function DataTimePickers(props: DataTimePickersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataTimePickers!</h1>
    </div>
  );
}

export default DataTimePickers;
