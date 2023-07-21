import styles from './lab.module.scss';

/* eslint-disable-next-line */
export interface LabProps {}

export function Lab(props: LabProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lab!</h1>
    </div>
  );
}

export default Lab;
