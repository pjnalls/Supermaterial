import styles from './footers.module.scss';

/* eslint-disable-next-line */
export interface FootersProps {}

export function Footers(props: FootersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Footers!</h1>
    </div>
  );
}

export default Footers;
