import styles from './progress.module.scss';

/* eslint-disable-next-line */
export interface ProgressProps {}

export function Progress(props: ProgressProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Progress!</h1>
    </div>
  );
}

export default Progress;
