import styles from './app-bar.module.scss';

/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppBar!</h1>
    </div>
  );
}

export default AppBar;
