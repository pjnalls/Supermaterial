import styles from './backdrop.module.scss';

/* eslint-disable-next-line */
export interface BackdropProps {}

export function Backdrop(props: BackdropProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">Backdrop</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default Backdrop;
