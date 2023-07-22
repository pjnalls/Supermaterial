import styles from './parallax.module.scss';

/* eslint-disable-next-line */
export interface ParallaxProps {}

export function Parallax(props: ParallaxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Parallax!</h1>
    </div>
  );
}

export default Parallax;
