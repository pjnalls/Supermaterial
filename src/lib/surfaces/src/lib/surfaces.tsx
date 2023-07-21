import styles from './surfaces.module.scss';

/* eslint-disable-next-line */
export interface SurfacesProps {}

export function Surfaces(props: SurfacesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Surfaces!</h1>
    </div>
  );
}

export default Surfaces;
