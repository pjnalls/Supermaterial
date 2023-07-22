import styles from './carousels.module.scss';

/* eslint-disable-next-line */
export interface CarouselsProps {}

export function Carousels(props: CarouselsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Carousels!</h1>
    </div>
  );
}

export default Carousels;
