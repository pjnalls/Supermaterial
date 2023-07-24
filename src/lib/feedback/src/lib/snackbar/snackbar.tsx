import styles from './snackbar.module.scss';

/* eslint-disable-next-line */
export interface SnackbarProps {}

export function Snackbar(props: SnackbarProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">Snackbar</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default Snackbar;
