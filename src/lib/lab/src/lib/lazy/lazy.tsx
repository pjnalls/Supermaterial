import styles from './lazy.module.scss';

/* eslint-disable-next-line */
export interface LazyProps {}

export function Lazy(props: LazyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lazy!</h1>
    </div>
  );
}

export default Lazy;
