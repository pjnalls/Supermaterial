import styles from './drawer.module.scss';

/* eslint-disable-next-line */
export interface DrawerProps {}

export function Drawer(props: DrawerProps) {
  return (
    <div className={styles['container']}>
      <h1 className="placeholder-text">Drawer</h1><br/><br/><h3  className="placeholder-text">This component is still in development.<br /><br/>Please refer to the "Design" tab below for its 🎨Figma design.</h3>
    </div>
  );
}

export default Drawer;
