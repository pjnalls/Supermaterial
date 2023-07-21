import styles from './data-display.module.scss';

/* eslint-disable-next-line */
export interface DataDisplayProps {}

export function DataDisplay(props: DataDisplayProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DataDisplay!</h1>
    </div>
  );
}

export default DataDisplay;
