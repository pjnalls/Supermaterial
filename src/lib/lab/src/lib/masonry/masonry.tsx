import styles from './masonry.module.scss';

/* eslint-disable-next-line */
export interface MasonryProps {}

export function Masonry(props: MasonryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Masonry!</h1>
    </div>
  );
}

export default Masonry;
