import styles from './bottom-navigation.module.scss';

/* eslint-disable-next-line */
export interface BottomNavigationProps {}

export function BottomNavigation(props: BottomNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BottomNavigation!</h1>
    </div>
  );
}

export default BottomNavigation;
