import styles from './paper.module.scss';

/* eslint-disable-next-line */
export interface PaperProps {}

export function Paper(props: PaperProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Paper!</h1>
    </div>
  );
}

export default Paper;
