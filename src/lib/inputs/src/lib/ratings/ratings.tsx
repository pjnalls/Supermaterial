import styles from './ratings.module.scss';

/* eslint-disable-next-line */
export interface RatingsProps {}

export function Ratings(props: RatingsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ratings!</h1>
    </div>
  );
}

export default Ratings;
