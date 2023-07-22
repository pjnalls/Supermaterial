import styles from './skeleton.module.scss';

/* eslint-disable-next-line */
export interface SkeletonProps {}

export function Skeleton(props: SkeletonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Skeleton!</h1>
    </div>
  );
}

export default Skeleton;
