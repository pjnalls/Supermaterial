import styles from './sliders.module.scss';

/* eslint-disable-next-line */
export interface SlidersProps {}

export function Sliders(props: SlidersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Sliders!</h1>
    </div>
  );
}

export default Sliders;
