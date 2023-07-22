import styles from './selects.module.scss';

/* eslint-disable-next-line */
export interface SelectsProps {}

export function Selects(props: SelectsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Selects!</h1>
    </div>
  );
}

export default Selects;
